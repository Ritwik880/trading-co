import React from 'react'

const Testimonial = () => {
    return (
        <section className='work-section'>
            <div className='row container'>
                <span className='work-span'>
                    TESTIMONIALS
                </span>
                <h1 className='work-heading'>
                    Our Clients Say
                </h1>
                <div className='testimonial-div'>
                    <img src='/testimonial1.svg' alt='testimonial' className='image'/>
                    <div className='testimonial-right-div'>
                        <img src='/quote_icon.svg' alt='testimonial' />
                        <p className='testimonial-para'>
                            Exceptional service! The coal mining expertise provided by this company has not only optimized our operations but also significantly increased our productivity, making them our trusted partner for all our sand and coal mining needs."
                        </p>
                        <h5 className='testimonial-heading'>
                            Dikshita Singh
                        </h5>
                        <p className='testimonial-sb-para'>
                            Organic Sector Industries
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial