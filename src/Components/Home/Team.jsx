import React from 'react'
import { TEAMDATA as data } from '../../constants/utils'
const Team = () => {
    return (
        <section className='about-section'>
            <div className='row container'>
                <div>
                    <h1 className='team-heading'>MEET OUR TEAM</h1>
                    <p className='about-para'>
                        Our Team Members
                    </p>
                </div>
                <div className='team-cards'>
                    {
                        data && data.map((item, id) => {
                            return (
                                <div key={id}>
                                    <div className="card">
                                        <img src={item.img} className="card-img-top" alt={item.title} />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className='card-text'>
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>

    )
}

export default Team