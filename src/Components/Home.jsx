import React, { useRef, useState, useEffect } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { CONSTRUCTDATA as data } from '../constants/utils';
import Video from './Video';
import Modal from 'react-bootstrap/Modal';
const Home = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <section className='landing-section'>
                <div className='row container'>
                    <div className='landing-section-div'>
                        <div>
                            <h1 className='landing-heading'>
                                Welcome to <span className='landing-heading-span'> Jeet and <br /> Soni </span> Enterprises
                            </h1>
                            <p className='landing-para'>
                                At Jeet and Soni Enterprises, our mission is to be a beacon of excellence in the industries we serve. We are dedicated to providing sustainable and responsible solutions in mining, supply chain management, construction, manufacturing, and technology. Committed to innovation, environmental stewardship, and client satisfaction, we strive to make a positive impact on ....
                            </p>
                            <div className='landing-button-div'>
                                <button className='learn-more-btn'>
                                    Learn more <FaLongArrowAltRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                    <button onClick={handleShow} className='video-icon'>
                                        <img src='/video_icon.svg' alt='video' />
                                    </button>
                                </div>
                                <div className='about-bottom-section-sub-div'>
                                    <img src='/about1.svg' alt='about' className='about-img' />
                                </div>
                                <div className='about-bottom-section-sub-div2'>
                                    <img src='/about2.svg' alt='about' className='about-img' />
                                </div>
                            </div>
                        </div>
                        <Modal show={show} onHide={handleClose}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >

                            <Modal.Body>
                                <video controls width="100%" height="auto">
                                    <source src="/inshot.mp4" type="video/mp4" />
                                </video>
                            </Modal.Body>
                        </Modal>

                    </div>

                </div>
            </section>
            {/* <section className='d-flex justify-content-center align-items-center research'></section> */}
            <section className='work-section'>
                <div className='row container'>
                    <span className='work-span'>OUR WORKS</span>
                    <h1 className='work-heading'>Our Special Projects</h1>
                    <div className='work-image-div'>
                        <div className='image-container'>
                            <img src='/work1.svg' alt='work' />
                            <div className='overlay'>
                                <h6 className='overlay-heading'>
                                    Commercial
                                </h6>
                                <p className='overlay-para'>
                                    Alpha Construction
                                </p>

                                <button className='overlay-btn'>
                                    +
                                </button>
                            </div>
                        </div>
                        <div className='image-container'>
                            <img src='/work2.svg' alt='work' />
                            <div className='overlay'>
                                <h6 className='overlay-heading'>
                                    Commercial
                                </h6>
                                <p className='overlay-para'>
                                    Alpha Construction
                                </p>

                                <button className='overlay-btn'>
                                    +
                                </button>
                            </div>
                        </div>
                        <div className='image-container'>
                            <img src='/work3.svg' alt='work' />
                            <div className='overlay'>
                                <h6 className='overlay-heading'>
                                    Commercial
                                </h6>
                                <p className='overlay-para'>
                                    Alpha Construction
                                </p>

                                <button className='overlay-btn'>
                                    +
                                </button>
                            </div>
                        </div>
                        <div className='image-container'>
                            <img src='/work4.svg' alt='work' />
                            <div className='overlay'>
                                <h6 className='overlay-heading'>
                                    Commercial
                                </h6>
                                <p className='overlay-para'>
                                    Alpha Construction
                                </p>

                                <button className='overlay-btn'>
                                    +
                                </button>
                            </div>
                        </div>
                        <div className='image-container'>
                            <img src='/work2.svg' alt='work' />
                            <div className='overlay'>
                                <h6 className='overlay-heading'>
                                    Commercial
                                </h6>
                                <p className='overlay-para'>
                                    Alpha Construction
                                </p>

                                <button className='overlay-btn'>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact-section'></section>
            <section className='contact-section-div'>
                <div className='row container'>
                    <div className='contact-section-parent'>
                        <div className='contact-section-left-box'>
                            <span className='contact-section-span'>
                                COMPANY ADDRESS
                            </span>
                            <h3 className='contact-heading'>
                                JEET AND SONI ENTERPRISES LLP's registered office address is F No. 202, 2 Floor Vijay Laxmienclavekaviramanpath, Navshakti, Patna, Phulwari, Bihar, India, 800001
                            </h3>
                        </div>
                        <div className='contact-social-parent-div'>
                            <div className='contact-social-div'>
                                <img src='/call.svg' alt='call' />
                                <div>
                                    <span className='contact-social-span'>
                                        COMPANY PHONES
                                    </span>
                                    <p className='contact-social-para'>
                                        +  9241149525
                                    </p>
                                    <p className='contact-social-para'>
                                        +  9241149525
                                    </p>
                                </div>
                            </div>
                            <div className='contact-social-div'>
                                <img src='/message.svg' alt='call' />
                                <div>
                                    <span className='contact-social-span'>
                                        Jeet and Soni enterprises Emails
                                    </span>
                                    <p className='contact-social-para'>
                                        jeetandsoni@gmail.com
                                    </p>
                                    <p className='contact-social-para'>
                                        jeetand soni.info@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='work-section'>
                <div className='row container'>
                    <span className='work-span'>
                        TESTIMONIALS
                    </span>
                    <h1 className='work-heading'>
                        Our Clients Say
                    </h1>
                    <div className='testimonial-div'>
                        <img src='/testimonial1.svg' alt='testimonial' className='image' />
                        <div className='testimonial-right-div'>
                            <img src='/quote_icon.svg' alt='testimonial' />
                            <p className='testimonial-para'>
                                Exceptional service! The coal mining expertise provided by this company has not only optimized our operations but also significantly increased our productivity, making them our trusted partner for all our sand and coal mining needs."
                            </p>
                            <h5 className='testimonial-heading'>
                                Dikshita Singh
                            </h5>
                            <p className='testimonial-sb-para'>
                                Organic Sector Industries
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Video />
        </>

    )
}

export default Home