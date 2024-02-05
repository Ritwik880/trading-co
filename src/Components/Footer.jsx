import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <section className='footer-section'>
            <div className='footer-left-part'>
                <img src='/nav-logo.svg' alt='logo' />
                <span>
                    CALL US TODAY
                </span>
                <h1>
                    + 91 942 355 4569
                </h1>
                <div className='social-media'>
                    <a href='#'>
                        <img src='/icon1.svg' alt='icon' />
                    </a>
                    <a href='#'>
                        <img src='/icon2.svg' alt='icon' />
                    </a>
                    <a href='#'>
                        <img src='/icon3.svg' alt='icon' />
                    </a>
                    <a href='#'>
                        <img src='/icon4.svg' alt='icon' />
                    </a>
                </div>
                <p>
                    202, 2 Floor Vijay, Laxmienclavekaviramanpath, Navshakti, Patna, Phulwari, Bihar, India, 800001
                </p>
            </div>
            <div className='footer-right-part'>
                <div className='footer-sub-right-part'>
                    <div>
                        <h1 className='footer-heading'>
                            Quick Links
                        </h1>
                        <ul>
                            <li>
                                Home
                            </li>
                            <li>
                                About Us
                            </li>
                            <li>
                                Our Projects
                            </li>
                            <li>
                                Pricings
                            </li>
                            <li>
                                Contacts
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='footer-heading'>
                            Our Services
                        </h1>
                        <ul>
                            <li>
                                Mining
                            </li>
                            <li>
                                Supply Chain
                            </li>
                            <li>
                                Construction
                            </li>
                            <li>
                                Real Estate
                            </li>

                        </ul>
                    </div>
                    <div>
                        <h1 className='footer-heading'>
                            Our News
                        </h1>
                        <div>
                            <h6>
                                Jeet and Soni
                                Enterprises LLP
                            </h6>
                            <p>
                                26 Jan 2024
                            </p>
                            <p>
                                by Nishant Kumar
                            </p>
                        </div>
                        <div>
                            <h6>
                                Jeet and Soni
                                Enterprises LLP
                            </h6>
                            <p>
                                26 Jan 2024
                            </p>
                            <p>
                                by Nishant Kumar
                            </p>
                        </div>
                    </div>
                </div>
                <p className='copyright'>
                    © Copyright Jeet and Soni Enterprises LLP. All Rights Reserved 2024
                </p>
            </div>
        </section>
    )
}

export default Footer