import React, { useState } from 'react';

//library import
import emailjs from 'emailjs-com';
import LazyLoad from 'react-lazyload';

//css
import '../About.css';

//react-icons
import { FaLongArrowAltRight } from "react-icons/fa";

//utils
import { QUOTE as quote } from '../constants/utils';
import { APPOINTMENTDATA as data } from '../constants/utils';

//components
import Team from './Team';

//react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    selectedService: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ['fullName', 'email', 'phoneNumber', 'selectedService', 'message'];
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
        selectedService: formData.selectedService,
        message: formData.message,
      };

      const response = await emailjs.send(
        'service_k1k26qk',
        'template_2jgxw81',
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
          selectedService: '',
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
      <section className='about'>
        <div className='row container'>
          <h1 className='about-heading'>
            About Us
          </h1>
          <div className='about-navigation-div'>
            <a href='/' className='about-link'>Home</a>
            <span className='about-link'>
              /
            </span>
            <a href='/about' className='about-link'>
              About Us
            </a>
          </div>
        </div>
      </section>

      <section className='about-part2'>
        <div className='row container'>
          <div className='col-lg-6 col-md-12'>
            <LazyLoad height={200} offset={100}>
              <img src='/team3.jpeg' alt='about-mission' className='ourmission' />
            </LazyLoad>
          </div>
          <div className='col-lg-6 col-md-12'>
            <span className='about-span'>
              our mission
            </span>
            <h1 className='about-part2-heading'>
              To providing the best
              services and qualities
            </h1>
            <div className='about-part2-div'>
              <p className='about-part2-para'>
                At Jeet and Soni Enterprises, our mission is to be a beacon of excellence in the industries we serve. We are dedicated to providing sustainable and responsible solutions in mining, supply chain management, construction, manufacturing, and technology. Committed to innovation, environmental stewardship, and client satisfaction, we strive to make a positive impact on communities and contribute to the overall development of a better, interconnected world.
              </p>

              <h6 className='about-part2-sub-head'>
              Dr Jitendra Kumar
              </h6>
 
            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <span className='about-span'>
              our vision
            </span>
            <h1 className='about-part2-heading'>
              To take our customers to
              a next level of experience
            </h1>
            <div className='about-part2-div'>
              <p className='about-part2-para'>
                Our vision at Jeet and Soni Enterprises is to be a dynamic force driving positive change and progress. We envision a future where our expertise in mining, supply, construction, manufacturing, and technology not only meets the needs of the present but also anticipates and addresses the challenges of tomorrow. With a focus on integrity, collaboration, and continuous improvement, we aim to be industry leaders, shaping a sustainable and prosperous future for generations to come.
              </p>

              <h6 className='about-part2-sub-head'>
              Soni Kumari
              </h6>

            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <LazyLoad height={200} offset={100}>
              <img src='/team1.jpeg' alt='about-mission' className='ourmission team1image' />
            </LazyLoad>
          </div>
        </div>
      </section>

      <section className='about-part3'>
        <div className='row container'>
          <h5 className='about-quote-head'>
            Get a Quote
          </h5>
          <h2 className='about-quote'>
            Build Your Future Today
          </h2>
          <p className='about-para'>
            At Jeet and Soni Enterprises, our commitment to integrity, innovation, and customer satisfaction is unwavering. We continuously strive to exceed expectations, fostering long-term relationships with our clients, partners, and stakeholders.
          </p>
          <p className='about-para'>
            Join us on our journey as we continue to evolve, adapt, and set new benchmarks in the industries we serve. Together, let's build a future that is sustainable, prosperous, and filled with endless possibilities.
          </p>

          <div className='d-flex justify-content-center'>
            <a href='#appointment' className='learn-more-btn'>
              Appointment <FaLongArrowAltRight />
            </a>
          </div>
        </div>
      </section>

      <section className='d-flex justify-content-center align-items-center appointment-section'>
        <div className='row container'>
          <div className='appointment-parent-box'>
            {
              data.map((item, index) => (
                <div className='appointment-box'>
                  <img src={item.img} alt={item.name} />
                  <p className='appointment-text'>
                    {item.name}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <Team />
      <section className='about-part4' id='appointment'>
        <div className='row container'>
          <ToastContainer position="top-center" autoClose={1500} />
          <div className='col-lg-6 col-md-12'>
            <span className='about-appointment'>
              Appointment
            </span>
            <h1 className='about-request'>
              Request a Quote
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="row about-input-div">
                <div className="col">
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="form-control about-input-box" placeholder="Full Name" aria-label="Full name" required />
                </div>
                <div className="col">
                  <input type="text" name="email" value={formData.email} onChange={handleChange} className="form-control about-input-box" placeholder="E - Mail" aria-label="Email" required />
                </div>
              </div>
              <div className="row about-input-div">
                <div className="col">
                  <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="form-control about-input-box" placeholder="Phone Number" aria-label="Phone Number" required />
                </div>
                <div className="col">
                  <input type="text" name="selectedService" value={formData.selectedService} onChange={handleChange} className="form-control about-input-box" placeholder="Select Service" aria-label="Selected Service" required />
                </div>
              </div>
              <div>
                <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" placeholder="Message" rows={6} required resize="none"></textarea>
              </div>
              <div className='landing-button-div mt-3'>
                <button className='learn-more-btn' type='submit'>
                  Appointment <FaLongArrowAltRight />
                </button>
              </div>
            </form>
          </div>


          <div className='col-lg-6 col-md-12'>
            {
              quote.map((item, index) => (
                <div key={index} className='about-quote-div'>
                  <div className='about-quote-parent-div'>
                    <LazyLoad height={200} offset={100}>
                      <img src={item.img} alt={item.name} />
                    </LazyLoad>
                    <div className='about-quote-text'>
                      <h6 className='about-quote-subHead'>
                        {item.name}
                      </h6>
                      <p className='about-quote-para'>
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

    </>
  )
}

export default About