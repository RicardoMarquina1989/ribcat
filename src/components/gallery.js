import React from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'

import slides from './slides'

const GalleryItem = ({ index, srcSet, src, setIndex }) => {
  const transforms = [
    'translateY(10px) translateZ(0px)',
    'translateY(-10px) translateZ(0px)',
    'translateY(10px) translateZ(0px)',
    'translateY(-10px) translateZ(0px)'
  ]
  const transform = transforms[index % 4]
  return (
    <figure
      className="gallery-thumbnails-item"
      onClick={() => {
        setIndex(index)
      }}>
      <div className="gallery-thumbnails-item-frame" style={{ transform }}>
        <div className="gallery-thumbnails-item-text-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="9" rx="0" ry="16" width="16" height="1" fill="black"></rect>
            <rect x="8" y="15" rx="0" ry="16" width="16" height="1" fill="black"></rect>
            <rect x="8" y="21" rx="0" ry="16" width="12" height="1" fill="black"></rect>
          </svg>
        </div>
        <img
          alt=""
          srcSet={srcSet}
          src={src}
          width="400"
          height="225"
          decoding="async"
          data-nimg="1"
          loading="lazy"
          style={{ color: 'transparent', visibility: 'visible' }}
        />
      </div>
    </figure>
  )
}
export function Gallery() {
  const [index, setIndex] = React.useState(-1)
  const caption = (item) => {
    return (
      <React.Fragment>
        <div className="text-xl mb-2 font-bold">{item.title}</div>
        <p className="text-white">{item.alt}</p>
      </React.Fragment>
    )
  }
  return (
    <section className="gallery">
      <div className="gallery-thumbnails">
        {slides.map((item, index) => (
          <GalleryItem key={index} index={index} src={item.src} srcSet={item.srcSet1} setIndex={setIndex} />
        ))}
      </div>
      <Lightbox index={index} slides={slides} open={index >= 0} close={() => setIndex(-1)} plugins={[Captions]} caption={caption} />
    </section>
  )
}
