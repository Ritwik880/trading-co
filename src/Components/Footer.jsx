import React from 'react';

const Footer = () => {
    return (
        <section className='footer-section'>
            <div className='footer-left-part'>
                <img src='/nav-logo.png' alt='logo' className='footer-logo' />
                <span>
                    CALL US TODAY
                </span>
                <h1>
                    +91  9241149525
                </h1>
                <div className='social-media'>
                    <a href='https://twitter.com/JeetandSoni' target='_blank'>
                        <img src='/icon1.svg' alt='icon' />
                    </a>
                    <a href='https://www.linkedin.com/company/jeet-and-soni-enterprises-llp/' target='_blank'>
                        <img src='/icon3.svg' alt='icon' />
                    </a>
                    <a href='https://youtu.be/4hFOJIMkEAc?feature=shared' target='_blank'>
                        <img src='/icon4.svg' alt='icon' />
                    </a>
                </div>
                <p>
                    JEET AND SONI ENTERPRISES LLP's registered office address is F No. 202, 2 Floor Vijay Laxmi Enclave Kaviraman Path, Navshakti, Patna, Phulwari, Bihar, India, 800001
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
                                <a href='/'>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href='/about'>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href='/mining-project'>
                                    Our Projects
                                </a>
                            </li>
                            <li>
                                <a href='/'>
                                    Pricings
                                </a>
                            </li>
                            <li>
                                <a href='/contact'>
                                    Contacts
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='footer-heading'>
                            Our Services
                        </h1>
                        <ul>
                            <li>
                                <a href='/mining'>
                                Mining
                                </a>
                            </li>
                            <li>
                                <a href='/mining-project'>
                                Supply Chain
                                </a>
                            </li>
                            <li>
                                <a href='/'>
                                Construction
                                </a>
                            </li>
                            <li>
                                <a href='/'>
                                Real Estate
                                </a>
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