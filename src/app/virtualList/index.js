import React from 'react'
import SizeAndPositionManager from './SizeAndPositionManager'

class VirtualizedList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.container = props.container
  }

  componentDidMount() {
    const { onMount, initialScrollTop, initialIndex, height } = this.props.options
    const offset =
      initialScrollTop || (initialIndex != null && this.getRowOffset(initialIndex)) || 0
  }

  _initializeSizeAndPositionManager = count => {
    this._sizeAndPositionManager = new SizeAndPositionManager({
      itemCount: count,
      itemSizeGetter: this.getRowHeight,
      estimatedItemSize: this.props.options.estimatedRowHeight || 100
    })
  }

  handleScroll = e => {
    const {
      options: { onScroll },
      container: { scrollTop: offset }
    } = this.props

    this.setState({ offset })
    if (typeof onScroll === 'function') {
      onScroll(offset, e)
    }
  }

  getRowHeight = ({ index }) => {
    const {
      options: { rowHeight }
    } = this.props

    if (typeof rowHeight === 'function') {
      return rowHeight(index)
    }

    return Array.isArray(rowHeight) ? rowHeight[index] : rowHeight
  }

  getRowOffset = index => {
    const { offset } = this._sizeAndPositionManager.getSizeAndPositionForIndex(index)
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

  setRowCount = count => {
    this._initializeSizeAndPositionManager(count)
  }

  componentWillUnmount() {
    this.container.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const {
      options: { overscanCount, renderRow }
    } = this.props
    const { height, offset = 0 } = this.state
    const { start, stop } = this._sizeAndPositionManager.getVisibleRange({
      containerSize: height,
      offset,
      overscanCount
    })
  }
}

export default VirtualizedList
