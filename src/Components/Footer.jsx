import React from 'react';

//utils
import { FOOTER as footer } from '../constants/utils';
import { FOOTERLEFT as data } from '../constants/utils';
const Footer = () => {
    return (
        <section className='footer-section'>
            <div className='footer-left-part'>
                {
                    data.map((item, index) => (
                        <div key={index} className='data-container'>
                            <img src={item.logo} alt='logo' className='footer-logo' />
                            <span>
                                {item.text}
                            </span>
                            <h1>
                                {item.phone}
                            </h1>
                            <div className='social-media'>
                                {item.images.map((image, imageIndex) => (
                                    <a key={imageIndex} href={image.link} target='_blank'>
                                        <img src={image.img} alt='icon' />
                                    </a>
                                ))}
                            </div>
                            <p>
                                {item.para}
                            </p>
                        </div>
                    ))
                }
            </div>

            <div className='footer-right-part'>
                <div className='footer-sub-right-part'>
                    {
                        footer.map((item) => (
                            <div key={item.id}>
                                {item.headline && (
                                    <h1 className='footer-heading'>
                                        {item.headline}
                                    </h1>
                                )}
                                {item.list && (
                                    <ul>
                                        {item.list.map((listItem, listIndex) => (
                                            <li key={listIndex}>
                                                <a href={listItem.href}>
                                                    {listItem.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {
                                    item.headline === 'Our News' && item.news.map((newsItem, index) => (
                                        <div key={index}>
                                            <h6>
                                                {newsItem.name}
                                            </h6>
                                            <p>
                                                {newsItem.date}
                                            </p>
                                            <p>
                                                by {newsItem.title}
                                            </p>
                                        </div>
                                    ))
                                }
                                {
                                    item.title && (
                                        <p className='copyright'>
                                            {item.title}
                                        </p>

                                    )
                                }
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Footer