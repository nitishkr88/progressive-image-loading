import React from 'react'
import classNames from 'classnames'

import Card from './Card'

import original_1 from 'assets/1.jpg'
import original_2 from 'assets/2.jpg'
import original_3 from 'assets/3.jpg'
import original_4 from 'assets/4.jpg'
import original_5 from 'assets/5.jpg'
import original_6 from 'assets/6.jpg'
import original_7 from 'assets/7.jpg'
import original_8 from 'assets/8.jpg'
import original_9 from 'assets/9.jpg'

import placeholder from '../../placeholder/placeholder.png'

const images = [
  { src: original_1 },
  { src: original_2 },
  { src: original_3 },
  { src: original_4 },
  { src: original_5 },
  { src: original_6 },
  { src: original_7 },
  { src: original_8 },
  { src: original_9 }
]

const Basic = () => (
  <section className="section">
    <div className="container">
      {images.map(({ src }) => (
        <React.Fragment key={src}>
          <Card title="basic">
            <Img src={src} />
          </Card>
        </React.Fragment>
      ))}
    </div>
  </section>
)

class Img extends React.Component {
  state = { ready: false }
  componentDidMount() {
    const buffer = new Image()
    buffer.onload = () => this.setState({ ready: true })
    buffer.src = this.props.src
  }
  render() {
    const { placeholder } = this.props
    const { ready } = this.state
    return (
      <div className="progressive-loading">
        <div className="progressive-loading-wrapper">
          {ready ? <img {...this.props} className="original" /> : null}
          <img
            src={placeholder}
            className={classNames('thumb', { hide: ready })}
          />
        </div>
      </div>
    )
  }
}

Img.defaultProps = {
  placeholder: placeholder
}

export default Basic
