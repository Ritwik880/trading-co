import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { CONSTRUCTDATA as data } from '../constants/utils';
const About = () => {
    return (
        <>
            <section className='about-section'>
                <div className='row container'>
                    <div className='about-part'>
                        <div className='construct-div'>
                            <div className='construct-sub-div'>
                                <h2 className='construct-sub-div-heading'>
                                    47
                                </h2>
                                <p className='construct-sub-div-para'>
                                    Completed Projects
                                </p>
                            </div>
                            <div className='construct-sub-div2'>
                                <h2 className='construct-sub-div-heading'>
                                    5+
                                </h2>
                                <p className='construct-sub-div-para'>
                                    Years of Experience
                                </p>
                            </div>

                        </div>
                        <div className='construct-sub-right-div'>
                            <h3 className='construct-sub-right-div-heading'>
                                We Construct and Manage Places and Infrastructures
                            </h3>
                            {
                                data.map((item, id) => (
                                    <div className='construct-sub-right-child-div' key={id}>
                                        <img src={item.img} alt='construct1' />
                                        <div>
                                            <h6 className='construct-sub-right-child-div-heading'>
                                                {item.name}
                                            </h6>
                                            <p className='construct-sub-right-child-div-para'>
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='about-bottom-section'>
                        <div className='col-lg-6 col-md-12'>
                            <span className='about-span'>ABOUT US</span>
                            <h1 className='about-bottom-section-heading'>
                                With our expertise
                                we guarantee success
                            </h1>
                            <p className='about-bottom-section-para'>
                                Pride in Multifaceted Presence Across Diverse Industries.
                            </p>
                            <p className='about-bottom-section-para2'>
                                At Jeet and Soni Enterprises, we take pride in our multifaceted presence across diverse industries. Established with a vision to deliver excellence, our company has become a trusted name in various domains, providing comprehensive solutions and services to meet the evolving needs of our clients.

                            </p>
                            <div className='landing-button-div'>
                                <button className='learn-more-btn'>
                                    Learn more <FaLongArrowAltRight />
                                </button>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <div className='about-bottom-section-image-div'>
                                <div className='video-icon-btn'>
                                    <a href='#'>
                                        <img src='/video_icon.svg' alt='video' />
                                    </a>
                                </div>
                                <div className='about-bottom-section-sub-div'>
                                    <img src='/about1.svg' alt='about' className='about-img' />
                                </div>
                                <div className='about-bottom-section-sub-div2'>
                                    <img src='/about2.svg' alt='about' className='about-img' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default About