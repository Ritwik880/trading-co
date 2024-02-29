import React from 'react';

//css
import '../Mining-Project.css';
import '../About.css';

//utils
import { MINEPROJECT as project } from '../constants/utils';
import { SOCIAL as social } from '../constants/utils';
import { IMAGES as images } from '../constants/utils';

//library-import
import LazyLoad from 'react-lazyload';

const MiningProject = () => {
    return (
        <>
            <section className='mining-project'>
                <div className='row container'>
                    <h1 className='about-heading'>
                        Project Alex
                    </h1>
                    <div className='about-navigation-div'>
                        <a href='/' className='about-link'>Home</a>
                        <span className='about-link'>
                            /
                        </span>
                        <a href='/about' className='about-link'>
                            Mining
                        </a>
                        <span className='about-link'>
                            /
                        </span>
                        <a href='/about' className='about-link'>
                            Project Alex
                        </a>
                    </div>
                </div>
            </section>

            <section className='d-flex justify-content-center align-items-center mine-project'>
                <div className='row container'>
                    <div className='col-lg-6 col-md-12'>
                        <LazyLoad height={200} offset={100}>
                            <img src='/mine4.svg' alt='mine4' className='mine-parent-image' />
                        </LazyLoad>
                        {
                            project.map((item, index) => (
                                <>
                                    {
                                        item.para && <p className='mining-project-para' key={index}>
                                            {item.para}
                                        </p>
                                    }
                                </>
                            ))
                        }
                        <div className='grid-container'>
                            {images.map((item, index) => (
                                <LazyLoad height={200} offset={100} key={index}>
                                    <img src={item.img} alt='item' />
                                </LazyLoad>
                            ))}
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <h3 className='koderma-heading'>
                            Koderma Mining
                        </h3>
                        <p className='koderma-para'>
                            Koderma, located in the Indian state of Jharkhand, is renowned for its rich mineral resources, particularly mica and kyanite. The region has a significant presence in the mining industry, with numerous mines extracting these valuable minerals. Koderma's mica deposits, known for their quality and variety, contribute significantly to India's mica production. Mica, a versatile mineral with applications in the electronics, cosmetics .
                        </p>

                        <h5 className='project-info'>
                            Project Info
                        </h5>
                        <div>
                            <span className='project-left-head'>
                                Client:
                            </span>
                            <span className='project-right-head'>
                                Akshay Singh
                            </span>
                        </div>
                        <div>
                            <span className='project-left-head'>
                                Category:
                            </span>
                            <span className='project-right-head'>
                                Mining Business
                            </span>
                        </div>
                        <div>
                            <span className='project-left-head'>
                                Completed on:
                            </span>
                            <span className='project-right-head'>
                                20 January 2022
                            </span>
                        </div>

                        <div className='project-social-div'>
                            {
                                social.map((item, index) => (
                                    <LazyLoad height={200} offset={100} key={index}>
                                        <img src={item.img} alt="social" onClick={() => window.open(item.url)} />
                                    </LazyLoad>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MiningProject