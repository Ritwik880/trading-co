import React from 'react'
import '../Mining-Project.css';
import { MINEPROJECT as project } from '../constants/utils';
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
                        <img src='/mine4.svg' alt='mine4' />
                        {
                            project.map((item, index) => (
                                <div key={index}>
                                    {
                                        item.para && <p>
                                            {item.para}
                                        </p>
                                    }
                                    {
                                        item.img && <div className='mining-project-image'>
                                            <img src={item.img} alt='item' />
                                        </div>
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div className='col-lg-6 col-md-12'>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MiningProject