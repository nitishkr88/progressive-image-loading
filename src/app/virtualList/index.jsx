import React from 'react'
import PropTypes from 'prop-types'

import SizeAndPositionManager from './SizeAndPositionManager'

const CONTAINER_HEIGHT = 1000
const CONTAINER_STYLE = {
  width: '100%',
  height: `${CONTAINER_HEIGHT}px`,
  overflowY: 'auto',
  border: '1px solid #DDD',
  margin: '50px auto'
}

const STYLE_INNER = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  minHeight: '100%',
  willChange: 'transform'
}

const STYLE_CONTENT = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  overflow: 'visible'
}

class VirtualizedList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this._initializeSizeAndPositionManager(props.rowCount)
  }

  componentDidMount() {
    const { initialScrollTop, initialIndex, height } = this.props
    const offset =
      initialScrollTop ||
      (initialIndex != null && this.getRowOffset(initialIndex)) ||
      0
    this.setState(
      {
        offset,
        height
      },
      () => {
        if (offset) {
          this.container.scrollTop = offset
        }
        this.container.addEventListener('scroll', this.handleScroll)
      }
    )
  }

  componentWillUnmount() {
    this.container.removeEventListener('scroll', this.handleScroll)
  }

  _initializeSizeAndPositionManager = count => {
    this._sizeAndPositionManager = new SizeAndPositionManager({
      itemCount: count,
      itemSizeGetter: this.getRowHeight,
      estimatedItemSize: this.props.estimatedRowHeight || 100
    })
  }

  handleScroll = e => {
    const offset = this.container.scrollTop
    this.setState({ offset })
  }

  getRowHeight = ({ index }) => {
    const { rowHeight } = this.props

    if (typeof rowHeight === 'function') {
      return rowHeight(index)
    }

    return Array.isArray(rowHeight) ? rowHeight[index] : rowHeight
  }

  getRowOffset = index => {
    const { offset } = this._sizeAndPositionManager.getSizeAndPositionForIndex(
      index
    )
    return offset
  }

  scrollToIndex = (index, alignment) => {
    const { height } = this.state
    const offset = this._sizeAndPositionManager.getUpdatedOffsetForIndex({
      align: alignment,
      containerSize: height,
      targetIndex: index
    })

    this.container.scrollTop = offset
  }

  render() {
    const { overscanCount, rowRenderer } = this.props
    const { height, offset = 0 } = this.state
    const { start, stop } = this._sizeAndPositionManager.getVisibleRange({
      containerSize: height,
      offset,
      overscanCount
    })
    console.log('offset', offset, 'start', start, 'stop', stop)

    let children = []
    for (let index = start; index <= stop; index++) {
      children.push(rowRenderer({ index }))
    }

    return (
      <div ref={el => (this.container = el)} style={{ ...CONTAINER_STYLE }}>
        <div
          ref={el => (this.inner = el)}
          style={{
            ...STYLE_INNER,
            height: `${this._sizeAndPositionManager.getTotalSize()}px`
          }}
        >
          <div
            ref={el => (this.content = el)}
            style={{ ...STYLE_CONTENT, top: `${this.getRowOffset(start)}px` }}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
}

VirtualizedList.propTypes = {
  /** Height of the List. Determines the number of rendered vs virtualized items */
  height: PropTypes.number,
  /** Number of rows to render */
  rowCount: PropTypes.number,
  /** Either a fixed height, an array containing the heights of all items in the list,
   * or a function that returns the height of an item given its index */
  rowHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.func
  ]),
  /** Responsible for rendering an item given its index */
  rowRenderer: PropTypes.func
}

export default VirtualizedList
