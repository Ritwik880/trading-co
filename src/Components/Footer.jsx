import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";



const Footer = () => {
    return (
        <section className='footer-section'>
            <div className='row container'>
                <div className='footer-section-div'>
                    <div>
                        <h1 className='footer-heading'>
                            About Us
                        </h1>
                        <p className='footer-para'>
                            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut enim diam viverra commodo nisi. Volutpat pellentesque ultrices libero viverra. Volutpat eu faucibus sem felis.
                        </p>
                    </div>
                    <div>
                        <h1 className='footer-heading'>
                            Quick Links
                        </h1>
                        <div className='footer-links'>
                            <ul>
                                <li>
                                    Home
                                </li>
                                <li>
                                    About Us
                                </li>
                                <li>
                                    Road Map
                                </li>
                                <li>
                                    Blog
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Team
                                </li>
                                <li>
                                    Career
                                </li>
                                <li>
                                    Contact Us
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div>
                        <h1 className='footer-heading'>
                            Contact Us
                        </h1>
                        <div className='footer-phone-links'>
                            <a href='tel:+91 - 645454882'>+91 - 645454882</a>
                            <a href='tel:+91 - 645454882'>+91 - 645454882</a>
                        </div>

                        <input type="text" className='form-control footer-input' />

                        <div className='footer-social-icon'>
                            <FaFacebook fontSize={36} color='#fff' cursor='pointer'/>
                            <AiFillTwitterCircle fontSize={40} color='#fff' cursor='pointer'/>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer