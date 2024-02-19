import React from 'react'
import '../Contact.css';
import { FaLongArrowAltRight } from "react-icons/fa";

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
                        <a href='/about' className='about-link'>
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

            <section className='d-flex justify-content-center align-items-center contact-info'>
                <div className='row container'>
                    <div className='col-lg-5 col-md-12'>
                        <div className='info-div'>
                            <span className='info-span'>
                            Company Address
                            </span>
                            <p className='info-para'>
                            202, 2 Floor Vijay, Laxmienclavekaviramanpath, Navshakti, Patna, Phulwari, Bihar, India, 800001
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-7 col-md-12'>
                    <div className='contact-social-parent-div'>
                            <div className='contact-social-div'>
                                <img src='/call.svg' alt='call' />
                                <div>
                                    <span className='contact-social-span'>
                                        COMPANY PHONES
                                    </span>
                                    <p className='contact-social-para'>
                                        + 91 942 355 4569
                                    </p>
                                    <p className='contact-social-para'>
                                        + 91 942 355 4569
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
        </>
    )
}

export default Contact