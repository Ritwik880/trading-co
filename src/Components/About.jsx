import React from 'react';
import { CARDSDATA as data } from '../constants/utils';

const About = () => {
    return (
        <>
            <section className='about-section'>
                <div className='row container'>
                    <div>
                        <h1 className='about-heading'>ABOUT US</h1>
                        <p className='about-para'>
                            At Jeet and Soni Enterprises, we take pride in our multifaceted presence across diverse industries. Established with a vision to deliver excellence, our company has become a trusted name in various domains, providing comprehensive solutions and services to meet the evolving needs of our clients.
                        </p>
                    </div>
                    <div className='about-cards'>
                        {
                            data && data.map((item, id) => {
                                return (
                                    <div key={id} className='about-box'>
                                        <p className='about-box-para'>
                                            {item.name}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <img src='/client.svg' alt='client-logo' className='client-banner' />
        </>
    )
}

export default About