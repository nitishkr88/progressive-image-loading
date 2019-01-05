import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import placeholder from '../../placeholder/placeholder.png'
import withIntersectionObserver from '../hocs/withIntersectionObserver'

const ProgressiveImage = props => {
  let Component = props.lazy ? withIntersectionObserver(Img) : Img
  return <Component {...props} />
}

class Img extends PureComponent {
  state = { ready: false }
  _triggered = false
  _mounted = false

  componentWillMount() {
    this._mounted = true
  }

  componentDidMount() {
    if (!this.props.lazy) {
      const buffer = new Image()
      buffer.onload = () => this._mounted && this.setState({ ready: true })
      buffer.src = this.props.src
    }
  }

  componentWillUnmount() {
    this._mounted = false
  }

  componentWillReceiveProps({ intersecting }) {
    if (intersecting && !this._triggered) {
      this._triggered = true
      const buffer = new Image()
      buffer.onload = () => this._mounted && this.setState({ ready: true })
      buffer.src = this.props.src
    }
  }

  render() {
    const { src, placeholder, blur } = this.props
    const { ready } = this.state

    return (
      <div className="progressive-loading">
        <div className="progressive-loading-wrapper">
          {ready ? <img className="original" src={src} /> : null}
          <img
            src={placeholder}
            className={classNames('thumb', { blur, hide: ready })}
          />
        </div>
      </div>
    )
  }
}

ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  alt: PropTypes.string,
  lazy: PropTypes.bool,
  blur: PropTypes.bool
}

ProgressiveImage.defaultProps = {
  src: null,
  alt: null,
  placeholder: placeholder,
  lazy: true,
  blur: false
}

export default ProgressiveImage
