import React from 'react'

export default function withIntersectionObserver(Component) {
  return class extends React.PureComponent {
    constructor(props) {
      super(props)
      this.state = { intersecting: null }
      this._mounted = false
      this._wrapper = null
      this.options = props.options || {
        root: props.viewportEl || null,
        rootMargin: '0px',
        threshold: 0.2
      }
    }

    handleObserverUpdate = entries => {
      const { isIntersecting } = entries.filter(
        entry => entry.target === this._wrapper
      )[0]
      this._mounted && this.setState({ intersecting: isIntersecting })
    }

    componentDidMount() {
      this._mounted = true
      this.observer = new IntersectionObserver(this.handleObserverUpdate, this.options)
      this.observer.observe(this._wrapper)
    }

    componentWillUnmount() {
      this._mounted = false
      this.observer.disconnect()
    }

    render() {
      return (
        <div className="intersection-obs" ref={wrapper => (this._wrapper = wrapper)}>
          <Component intersecting={this.state.intersecting} {...this.props} />
        </div>
      )
    }
  }
}
