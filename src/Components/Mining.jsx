import React from 'react'
import '../Mining.css';
import { MINEIMAGES as images } from '../constants/utils';
import { MININGDIV as div } from '../constants/utils';
import { MININGPARA as para } from '../constants/utils';
import { SERVICES as service } from '../constants/utils';
import { FaLongArrowAltRight } from "react-icons/fa";
import LazyLoad from 'react-lazyload';

const Mining = () => {
  return (
    <>
      <section className='mining'>
        <div className='row container'>
          <h1 className='about-heading'>
            Stone Mining
          </h1>
          <div className='about-navigation-div'>
            <a href='/' className='about-link'>Home</a>
            <span className='about-link'>
              /
            </span>
            <a href='/mining' className='about-link'>
              Mining
            </a>
            <span className='about-link'>
              /
            </span>
            <a href='/mining-project' className='about-link'>
              Stone Mining
            </a>
          </div>
        </div>
      </section>

      <div className='mining-social-parent'>
        <div className='mining-social'>
          <span className='mining-span'>
            Call Us Today
          </span>
          <p className='mining-phone'>
            +  9241149525
          </p>
        </div>
      </div>

      <section className='d-flex justify-content-center align-items-center mining-landing'>
        <div className='row container'>
          <div className='mine-image-div'>
            {
              images.map((item, index) => (
                <LazyLoad height={200} offset={100} key={index}>
                  <img src={item.img} className='mine-image' />
                </LazyLoad>
              ))
            }
          </div>
        </div>
      </section>

      <section className='d-flex justify-content-center align-items-center about-mining'>
        <div className='row container'>
          <div className='col-lg-7 col-md-12'>
            <h6 className='mining-heading'>
              Mining
            </h6>
            {
              para.map((item, index) => (
                <p className='mining-main-para' key={index}>
                  {
                    item.para
                  }
                </p>
              ))
            }
          </div>
          <div className='col-lg-5 col-md-12'>
            {
              div.map((item, index) => (
                <div key={index} className={`mining-info ${index % 2 === 0 ? 'even-background' : 'odd-background'}`}>
                  <h6 className='mining-text'>
                    {item.name}
                  </h6>
                  {
                    item.title && <p className='mining-para'>
                      {item.title}
                    </p>
                  }
                  <button className='mining-btn-arrow'>
                    <FaLongArrowAltRight fontSize={30} />
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className='d-flex justify-content-center align-items-center mining-service'>
        <div className='row container'>
          <h1 className='service-heading'>
            Other Services
          </h1>
          <div className='service-parent-div'>
            {
              service.map((item, index) => (
                <div key={index} className='service-div'>
                  <span>
                    {
                      item.title
                    }
                  </span>
                  <p>
                    {
                      item.desc
                    }
                  </p>
                  <button className='service-btn'>
                    {
                      item.btn
                    }
                    <FaLongArrowAltRight fontSize={20} className='mx-2' />
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Mining