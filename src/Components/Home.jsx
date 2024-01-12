import React from 'react'

const Home = () => {
    return (
        <section className='landing-section'>
            <div className='row container'>
                <div className='landing-section-div'>
                    <div>
                        <h1 className='landing-heading'>
                            Trading With
                            <br />
                            <span className='landing-heading-span'>
                                Jeet and Soni Enterprises
                            </span>
                        </h1>
                        <p className='landing-para'>
                            forex trading - Commodity Trading Bullion Trading - Future Option Trading
                        </p>
                        <div className='landing-button-div'>
                            <button className='road-map-btn'>
                                ROAD MAP
                            </button>
                            <button className='create-account-btn'>
                                CREATE ACCOUNT
                            </button>

                        </div>
                    </div>
                    <div>
                        <img src='/landing-phone.png' className='landing-phone' alt='landing-phone' />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Home