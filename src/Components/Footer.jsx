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
                <div>
                    <a href='#'>
        	            <img src='/icon1.svg' alt='icon'/>
                    </a>
                    <a href='#'>
        	            <img src='/icon2.svg' alt='icon'/>
                    </a>
                    <a href='#'>
        	            <img src='/icon3.svg' alt='icon'/>
                    </a>
                    <a href='#'>
        	            <img src='/icon4.svg' alt='icon'/>
                    </a>
                </div>
                <p>
                202, 2 Floor Vijay, Laxmienclavekaviramanpath, Navshakti, Patna, Phulwari, Bihar, India, 800001
                </p>
            </div>
            <div className='footer-right-part'>
                <h1 className='footer-heading'>
                    Quick Links
                </h1>
                
            </div>
        </section>
    )
}

export default Footer