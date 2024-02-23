import React from 'react'
import '../About.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { QUOTE as quote } from '../constants/utils';
import Team from './Team';
const About = () => {
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
            <img src='/team3.jpeg' alt='about-mission' className='ourmission' />
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
                Ajit Kumar, CEO
              </h6>
              <div className='landing-button-div'>
                <button className='learn-more-btn'>
                  Learn more <FaLongArrowAltRight />
                </button>
              </div>
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
                Soni Singh, COO
              </h6>
              <div className='landing-button-div'>
                <button className='learn-more-btn'>
                  Learn more <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <img src='/team1.jpeg' alt='about-mission' className='ourmission team1image' />
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
            <button className='learn-more-btn'>
              Appointment <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </section>

      <Team/>

      <section className='about-part4'>
        <div className='row container'>
          <div className='col-lg-6 col-md-12'>
            <span className='about-appointment'>
              Appointment
            </span>
            <h1 className='about-request'>
              Request a Quote
            </h1>
            <div className="row about-input-div">
              <div className="col">
                <input type="text" className="form-control about-input-box" placeholder="Full Name" aria-label="First name" />
              </div>
              <div className="col">
                <input type="text" className="form-control about-input-box" placeholder="E - Mail" aria-label="Last name" />
              </div>
            </div>
            <div className="row about-input-div">
              <div className="col">
                <input type="text" className="form-control about-input-box" placeholder="Phone Number" aria-label="First name" />
              </div>
              <div className="col">
                <input type="text" className="form-control about-input-box" placeholder="Select Service" aria-label="Last name" />
              </div>
            </div>
            <div>
              <textarea className="form-control" placeholder="Message" rows={6} onResize={false}></textarea>
            </div>
            <div className='landing-button-div mt-3'>
                <button className='learn-more-btn'>
                Appointment <FaLongArrowAltRight />
                </button>
              </div>
          </div>

          <div className='col-lg-6 col-md-12'>
            {
              quote.map((item, index) => (
                <div key={index} className='about-quote-div'>
                  <div className='about-quote-parent-div'>
                    <img src={item.img} alt={item.name} />
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