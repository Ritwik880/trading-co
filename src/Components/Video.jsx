import React from 'react'
import LazyLoad from 'react-lazyload'
const Video = () => {
  return (
    <section className='video-section'>
      <a href='#'>
        <LazyLoad height={200} offset={100}>
          <img src='/button.svg' alt='button' className='video-btn-banner' />
        </LazyLoad>
      </a>
    </section>
  )
}

export default Video