import React, { useEffect, useState } from 'react';
import { HEADER as header } from '../constants/utils';
import { DROPDOWN as dropdown } from '../constants/utils';
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            const scrollThreshold = 50;

            setScrolled(offset > scrollThreshold);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className='top-parent-header'>
                <div className='row container'>
                    <div className='top-header'>
                        <div>
                            <ul className='top-header-list'>
                                <li>
                                    <a href='#'>
                                        SUPPORT
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        PROJECTS
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        CAREERS
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='top-header-icon'>
                            {
                                header.map((item, index) => (
                                    <a href='#' className='header-social' key={index}>
                                        <img src={item.img} alt='header' />
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </header>
            <nav className={`navbar navbar-expand-lg ${scrolled ? 'bg-colored' : 'bg-light'}`}>
                <div className="container">

                    <a className="navbar-brand" href="/">
                        <img src='/nav-logo.svg' alt='nav-logo' className='nav-logo' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/mining">
                                    Mining
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Supply Chain
                                </a>
                                <ul className='dropdown-menu'>
                                    <li>
                                        <div className='dropdown-box'>
                                            {
                                                dropdown.map((item, index) => (
                                                    <div key={index} className='dropdown-child-box'>
                                                        <img src={item.img} alt='image' className='dropdown-icon'/>
                                                        <div>
                                                            <h6 className='dropdown-title'>
                                                                {
                                                                    item.title
                                                                }
                                                            </h6>
                                                            <p className='dropdown-para'>
                                                                {
                                                                    item.desc
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Construction
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Real Estate
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar