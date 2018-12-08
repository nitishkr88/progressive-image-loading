import React from 'react'
import ProgressiveImage from './ProgressiveImage'
import Card from './Card'

import original_1 from 'assets/1.jpg'
import thumb_1 from 'assets/1.thumb.jpg'
import trace_1 from 'assets/1.trace.svg'

import original_2 from 'assets/2.jpg'
import thumb_2 from 'assets/2.thumb.jpg'
import trace_2 from 'assets/2.trace.svg'

import original_3 from 'assets/3.jpg'
import thumb_3 from 'assets/3.thumb.jpg'
import trace_3 from 'assets/3.trace.svg'

import original_4 from 'assets/4.jpg'
import thumb_4 from 'assets/4.thumb.jpg'
import trace_4 from 'assets/4.trace.svg'

import original_5 from 'assets/5.jpg'
import thumb_5 from 'assets/5.thumb.jpg'
import trace_5 from 'assets/5.trace.svg'

import original_6 from 'assets/6.jpg'
import thumb_6 from 'assets/6.thumb.jpg'
import trace_6 from 'assets/6.trace.svg'

import original_7 from 'assets/7.jpg'
import thumb_7 from 'assets/7.thumb.jpg'
import trace_7 from 'assets/7.trace.svg'

import original_8 from 'assets/8.jpg'
import thumb_8 from 'assets/8.thumb.jpg'
import trace_8 from 'assets/8.trace.svg'

import original_9 from 'assets/9.jpg'
import thumb_9 from 'assets/9.thumb.jpg'
import trace_9 from 'assets/9.trace.svg'

const images = [
  { src: original_1, thumb: thumb_1, trace: trace_1 },
  { src: original_2, thumb: thumb_2, trace: trace_2 },
  { src: original_3, thumb: thumb_3, trace: trace_3 },
  { src: original_4, thumb: thumb_4, trace: trace_4 },
  { src: original_5, thumb: thumb_5, trace: trace_5 },
  { src: original_6, thumb: thumb_6, trace: trace_6 },
  { src: original_7, thumb: thumb_7, trace: trace_7 },
  { src: original_8, thumb: thumb_8, trace: trace_8 },
  { src: original_9, thumb: thumb_9, trace: trace_9 }
]

const Home = () => (
  <section className="section">
    <div className="container">
      {images.map(({ src, thumb, trace }) => (
        <React.Fragment key={src}>
          <Card title="thumb and blurred">
            <ProgressiveImage src={src} placeholder={thumb} blur />
          </Card>
          <Card title="svg trace">
            <ProgressiveImage src={src} placeholder={trace} />
          </Card>
        </React.Fragment>
      ))}
    </div>
  </section>
)

export default Home
