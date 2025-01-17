import React, { useState, useRef, useEffect } from 'react';

//react-icons
import { FaLongArrowAltRight } from "react-icons/fa";

//utils
import { CONSTRUCTDATA as data } from '../constants/utils';
import { WORKIMAGE as work } from '../constants/utils';
import { BANNER as banner } from '../constants/utils';
import { TESTIMONIAL as test } from '../constants/utils';

//components
import Video from './Video';
import Modal from 'react-bootstrap/Modal';
import LazyLoad from 'react-lazyload';
import Info from './Info';

const Home = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const iframeRef = useRef();

    useEffect(() => {
        const handleClose = () => {
            setShow(false);
            pauseVideo();
        };

        const handleOutsideClick = (event) => {
            if (show && !iframeRef.current.contains(event.target)) {
                handleClose();
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [show]);

    const pauseVideo = () => {
        iframeRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    };

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
                                <a href='/about' className='learn-more-btn'>
                                    Learn more <FaLongArrowAltRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='about-section'>
                <div className='row container'>
                    <div className='about-part'>
                        <div className='construct-div'>
                            {
                                banner.map((item, index) => (
                                    <div key={index} className={`construct-sub-div ${index % 2 === 0 ? 'even' : 'odd'}`}>
                                        <h2 className='construct-sub-div-heading'>
                                            {item.name}
                                        </h2>
                                        <p className='construct-sub-div-para'>
                                            {item.desc}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='construct-sub-right-div'>
                            <h3 className='construct-sub-right-div-heading'>
                                We Construct and Manage Places and Infrastructures
                            </h3>
                            {
                                data.map((item, id) => (
                                    <div className='construct-sub-right-child-div' key={id}>
                                        <LazyLoad height={200} offset={100}>
                                            <img src={item.img} alt='construct1' />
                                        </LazyLoad>
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
                                <a href='/about' className='learn-more-btn'>
                                    Learn more <FaLongArrowAltRight />
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-12'>
                            <div className='about-bottom-section-image-div'>
                                <div className='video-icon-btn'>
                                    <button onClick={handleShow} className='video-icon'>
                                        <LazyLoad height={200} offset={100}>
                                            <img src='/video_icon.svg' alt='video' />
                                        </LazyLoad>
                                    </button>
                                </div>
                                <div className='about-bottom-section-sub-div'>
                                    <LazyLoad height={200} offset={100}>
                                        <img src='/about1.svg' alt='about' className='about-img' />
                                    </LazyLoad>
                                </div>
                                <div className='about-bottom-section-sub-div2'>
                                    <LazyLoad height={200} offset={100}>
                                        <img src='/about2.svg' alt='about' className='about-img' />
                                    </LazyLoad>
                                </div>
                            </div>
                        </div>
                        <Modal
                            show={show}
                            onHide={() => {
                                setShow(false);
                                pauseVideo();
                            }}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Body>
                                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/4hFOJIMkEAc?si=-a3mFDogMRP5QXR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </Modal.Body>
                        </Modal>

                    </div>

                </div>
            </section>
            <section className='work-section'>
                <div className='row container'>
                    <span className='work-span'>OUR WORKS</span>
                    <h1 className='work-heading'>Our Special Projects</h1>
                    <div className='work-image-div'>
                        {
                            work.map((item, index) => (
                                <div className='image-container' key={index}>
                                    <img src={item.img} alt='work' className='work-image' />
                                    <div className='overlay'>
                                        <h6 className='overlay-heading'>
                                            {item.name}
                                        </h6>
                                        <p className='overlay-para'>
                                            {item.desc}
                                        </p>

                                        <button className='overlay-btn'>
                                            {item.btn}
                                        </button>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
            <section className='contact-section'></section>
            <Info />
            <section className='work-section'>
                <div className='row container'>
                    <span className='work-span'>
                        TESTIMONIALS
                    </span>
                    <h1 className='work-heading'>
                        Our Clients Say
                    </h1>
                    {
                        test.map((item, index) => (
                            <div className='testimonial-div' key={index}>
                                <LazyLoad height={200} offset={100}>
                                    <img src={item.img} alt='testimonial' className='image' />
                                </LazyLoad>
                                <div className='testimonial-right-div'>
                                    <LazyLoad height={200} offset={100}>
                                        <img src={item.img2} alt='testimonial' />
                                    </LazyLoad>
                                    <p className='testimonial-para'>
                                        {item.desc}
                                    </p>
                                    <h5 className='testimonial-heading'>
                                        {item.name}
                                    </h5>
                                    <p className='testimonial-sb-para'>
                                        {item.para}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <Video />
        </>

    )
}

export default Home