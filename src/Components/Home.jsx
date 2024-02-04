import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
const Home = () => {
    return (
        <>
            <section className='landing-section'>
                <div className='row container'>
                    <div className='landing-section-div'>
                        <div>
                            <h1 className='landing-heading'>
                                Welcome to <span className='landing-heading-span'> Jeet and <br /> Soni </span> Enterprises
                            </h1>
                            <p className='landing-para'>
                                At Jeet and Soni Enterprises, our mission is to be a beacon of excellence in the industries we serve. We are dedicated to providing sustainable and responsible solutions in mining, supply chain management, construction, manufacturing, and technology. Committed to innovation, environmental stewardship, and client satisfaction, we strive to make a positive impact on ....
                            </p>
                            <div className='landing-button-div'>
                                <button className='learn-more-btn'>
                                    Learn more <FaLongArrowAltRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Home