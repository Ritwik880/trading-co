import React from 'react';

//library-import
import LazyLoad from 'react-lazyload';

const Video = () => {
  return (
    <section className='video-section'>
      <a href='https://youtu.be/4hFOJIMkEAc?feature=shared' target='_blank'>
        <LazyLoad height={200} offset={100}>
          <img src='/button.svg' alt='button' className='video-btn-banner' />
        </LazyLoad>
      </a>
    </section>
  )
}

export default Video