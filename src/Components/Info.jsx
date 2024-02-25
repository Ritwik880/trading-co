import React from 'react';
import { CONTACTDATA as contact } from '../constants/utils';
import LazyLoad from 'react-lazyload'
const Info = () => {
    return (
        <section className='contact-section-div'>
            <div className='row container'>
                <div className='contact-section-parent'>
                    <div className='contact-section-left-box'>
                        <span className='contact-section-span'>
                            COMPANY ADDRESS
                        </span>
                        <h3 className='contact-heading'>
                            JEET AND SONI ENTERPRISES LLP's registered office address is F No. 202, 2 Floor Vijay Laxmienclavekaviramanpath, Navshakti, Patna, Phulwari, Bihar, India, 800001
                        </h3>
                    </div>
                    <div className='contact-social-parent-div'>
                        {
                            contact.map((item, index) => (
                                <div className='contact-social-div' key={index}>
                                    <LazyLoad height={200} offset={100}>
                                        <img src={item.img} alt='call' />
                                    </LazyLoad>
                                    <div>
                                        <span className='contact-social-span'>
                                            {item.name}
                                        </span>
                                        <p className='contact-social-para'>
                                            {item.desc1}
                                        </p>
                                        <p className='contact-social-para'>
                                            {item.desc2}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info