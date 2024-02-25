import React from 'react'
import '../Contact.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import Info from './Info';

const Contact = () => {
    return (
        <>
            <section className='contact'>
                <div className='row container'>
                    <h1 className='about-heading'>
                        Contacts
                    </h1>
                    <div className='about-navigation-div'>
                        <a href='/' className='about-link'>Home</a>
                        <span className='about-link'>
                            /
                        </span>
                        <a href='/contact' className='about-link'>
                            Contacts
                        </a>
                    </div>
                </div>
            </section>

            <section className='about-part4'>
                <div className='row container'>
                    <div className='col-lg-12 col-md-12'>
                        <div className="row about-input-div">
                            <div className="col">
                                <input type="text" className="form-control contact-input-box" placeholder="Your Full Name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control contact-input-box" placeholder="Your Email Address" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="row about-input-div">
                            <div className="col">
                                <input type="text" className="form-control contact-input-box" placeholder="Your Phone Number" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control contact-input-box" placeholder="Your Address" aria-label="Last name" />
                            </div>
                        </div>
                        <div>
                            <textarea className="form-control contact-input-box" placeholder="Enter Your Message Here..." rows={6} onResize={false}></textarea>
                        </div>
                        <div className='d-flex justify-content-start mt-4'>
                            <button className='learn-more-btn'>
                                Submit Message <FaLongArrowAltRight />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-flex justify-content-center align-items-center'>
                <div className='row container'>
                    <img src='/contact-map.svg' alt='map'/>
                </div>
            </section>

           <Info/>

           <section className='blank-section'></section>
        </>
    )
}

export default Contact