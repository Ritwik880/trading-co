import React, { useEffect, useState } from 'react';

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
        <nav className={`navbar navbar-expand-lg ${scrolled ? 'bg-colored' : 'bg-light'}`}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src='/nav-logo.png' alt='nav-logo' className='nav-logo' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">MINING</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar