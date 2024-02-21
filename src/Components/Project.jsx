import React from 'react';
import '../Project.css';
import { PROJECT as project } from '../constants/utils';
const Project = () => {
    return (
        <>
            <section className='project'>
                <div className='row container'>
                    <h1 className='about-heading'>
                        Projects
                    </h1>
                    <div className='about-navigation-div'>
                        <a href='/' className='about-link'>Home</a>
                        <span className='about-link'>
                            /
                        </span>
                        <a href='/project' className='about-link'>
                            Projects
                        </a>
                    </div>
                </div>
            </section>
            <div className='mining-social-parent'>
                <div className='mining-social'>
                    <span className='mining-span'>
                        Call Us Today
                    </span>
                    <p className='mining-phone'>
                        + 91 942 355 4569
                    </p>
                </div>
            </div>

            <section className='d-flex justify-content-center align-items-center project-section'>
                <div className='row container'>
                    <div className='project-grid-container'>
                        {
                            project.map((item, index) => (
                                <img src={item.img} key={index} alt='project-images' className='project-image' />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project