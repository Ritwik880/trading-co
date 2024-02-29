import React, { useState } from 'react';

//library import
import emailjs from 'emailjs-com';

//react-icons
import { FaLongArrowAltRight } from 'react-icons/fa';

//react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//css
import '../Contact.css'
import '../About.css'

//components
import Info from '../Components/Info'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ['fullName', 'email', 'phoneNumber', 'address', 'message'];
    const isEmptyField = requiredFields.some(field => !formData[field]);

    if (isEmptyField) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      // Use emailjs to send the email
      const emailParams = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        message: formData.message,
      };

      const response = await emailjs.send(
        'service_k1k26qk',
        'template_tgg2n9l',
        emailParams,
        'ENAm78TXL8QXQx8NZ'
      );

      // Check the response from emailjs
      if (response.status === 200) {
        toast.success('Message sent successfully');
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          address: '',
          message: '',
        });
      } else {
        toast.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message', error);
      toast.error('Error sending message');
    }
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
      <section className='d-flex justify-content-center align-items-center contact-part'>
        <div className='row container'>
          <ToastContainer position='top-center' autoClose={1500} />
          <div className='col-lg-12 col-md-12'>
            <form onSubmit={handleSubmit}>
              <div className='row about-input-div'>
                <div className='col'>
                  <input
                    type='text'
                    className='form-control contact-input-box'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder='Your Full Name'
                    aria-label='First name'
                    required
                  />
                </div>
                <div className='col'>
                  <input
                    type='text'
                    className='form-control contact-input-box'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Your Email Address'
                    aria-label='Last name'
                    required
                  />
                </div>
              </div>
              <div className='row about-input-div'>
                <div className='col'>
                  <input
                    type='text'
                    className='form-control contact-input-box'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder='Your Phone Number'
                    aria-label='First name'
                    required
                  />
                </div>
                <div className='col'>
                  <input
                    type='text'
                    className='form-control contact-input-box'
                    name='address'
                    value={formData.address}
                    onChange={handleChange}
                    placeholder='Your Address'
                    aria-label='Last name'
                    required
                  />
                </div>
              </div>
              <div>
                <textarea
                  className='form-control contact-input-box'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Enter Your Message Here...'
                  rows={6}
                  resize='none'
                  required
                ></textarea>
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
  );
};

export default Contact;
