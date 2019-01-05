import React from 'react'
import ProgressiveImage from './ProgressiveImage'
import Card from './Card'

import original_1 from 'assets/1.jpg'
import thumb_1 from 'assets/1.thumb.jpg'

import original_2 from 'assets/2.jpg'
import thumb_2 from 'assets/2.thumb.jpg'

import original_3 from 'assets/3.jpg'
import thumb_3 from 'assets/3.thumb.jpg'

import original_4 from 'assets/4.jpg'
import thumb_4 from 'assets/4.thumb.jpg'

import original_5 from 'assets/5.jpg'
import thumb_5 from 'assets/5.thumb.jpg'

import original_6 from 'assets/6.jpg'
import thumb_6 from 'assets/6.thumb.jpg'

import original_7 from 'assets/7.jpg'
import thumb_7 from 'assets/7.thumb.jpg'

import original_8 from 'assets/8.jpg'
import thumb_8 from 'assets/8.thumb.jpg'

import original_9 from 'assets/9.jpg'
import thumb_9 from 'assets/9.thumb.jpg'

const images = [
  { src: original_1, thumb: thumb_1 },
  { src: original_2, thumb: thumb_2 },
  { src: original_3, thumb: thumb_3 },
  { src: original_4, thumb: thumb_4 },
  { src: original_5, thumb: thumb_5 },
  { src: original_6, thumb: thumb_6 },
  { src: original_7, thumb: thumb_7 },
  { src: original_8, thumb: thumb_8 },
  { src: original_9, thumb: thumb_9 }
]

const Thumb = () => (
  <section className="section">
    <div className="container">
      {images.map(({ src, thumb }) => (
        <React.Fragment key={src}>
          <Card title="thumb and blurred">
            <ProgressiveImage src={src} placeholder={thumb} blur />
          </Card>
        </React.Fragment>
      ))}
    </div>
  </section>
)

export default Thumb
