import React from 'react'

const Contact = () => {
    return (
        <>
            <section className='contact-section'></section>
            <section className='contact-section-div'>
                <div className='row container'>
                    <div className='contact-section-parent'>
                        <div className='contact-section-left-box'>
                            <span className='contact-section-span'>
                                COMPANY ADDRESS
                            </span>
                            <h3 className='contact-heading'>
                                202, 2 Floor Vijay, Laxmienclavekaviramanpath, Navshakti, Patna, Phulwari, Bihar, India, 800001
                            </h3>
                        </div>
                        <div className='contact-social-parent-div'>
                            <div className='contact-social-div'>
                                <img src='/call.svg' alt='call' />
                                <div>
                                    <span className='contact-social-span'>
                                        COMPANY PHONES
                                    </span>
                                    <p className='contact-social-para'>
                                        + 91 942 355 4569
                                    </p>
                                    <p className='contact-social-para'>
                                        + 91 942 355 4569
                                    </p>
                                </div>
                            </div>
                            <div className='contact-social-div'>
                                <img src='/message.svg' alt='call' />
                                <div>
                                    <span className='contact-social-span'>
                                        Jeet and Soni enterprises Emails
                                    </span>
                                    <p className='contact-social-para'>
                                        jeetandsoni@gmail.com
                                    </p>
                                    <p className='contact-social-para'>
                                        jeetand soni.info@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact