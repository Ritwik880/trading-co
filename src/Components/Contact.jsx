import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Contact.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import Info from './Info';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Use your EmailJS template ID, service ID, and user ID
        const templateParams = {
            to_email: 'info.jeetandsonienterprises@gmail.com',
            from_name: formData.fullName,
            from_email: formData.email,
            phone_number: formData.phoneNumber,
            address: formData.address,
            message: formData.message,
        };

        await emailjs.send('service_k1k26qk', 'template_snlyo3a', templateParams, 'ENAm78TXL8QXQx8NZ');
        toast.success("Your message has been sent successfully!");

        // Reset form fields after submission
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            address: '',
            message: '',
        });
    };
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
                    <ToastContainer position="top-center" autoClose={1500} />
                    <div className='col-lg-12 col-md-12'>
                        <form onSubmit={handleSubmit}>
                            <div className="row about-input-div">
                                <div className="col">
                                    <input type="text" className="form-control contact-input-box" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your Full Name" aria-label="First name" required />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control contact-input-box" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email Address" aria-label="Last name" required />
                                </div>
                            </div>
                            <div className="row about-input-div">
                                <div className="col">
                                    <input type="text" className="form-control contact-input-box" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Your Phone Number" aria-label="First name" required />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control contact-input-box" name="address" value={formData.address} onChange={handleChange} placeholder="Your Address" aria-label="Last name" required />
                                </div>
                            </div>
                            <div>
                                <textarea className="form-control contact-input-box" name="message" value={formData.message} onChange={handleChange} placeholder="Enter Your Message Here..." rows={6} resize="none" required></textarea>
                            </div>
                            <div className='d-flex justify-content-start mt-4'>
                                <button className='learn-more-btn' type='submit'>
                                    Submit Message <FaLongArrowAltRight />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className='d-flex justify-content-center align-items-center'>
                <div className='row container'>
                    <img src='/contact-map.svg' alt='map' />
                </div>
            </section>

            <Info />

            <section className='blank-section'></section>
        </>
    )
}

export default Contact