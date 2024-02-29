import React from 'react';

//css
import '../Team.css';

//utils
import { TEAM as data } from '../constants/utils';

//library-import
import LazyLoad from 'react-lazyload';

const Team = () => {
    return (
        <section className='team-section'>
            <div className='row container'>
                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-4 headings-container">
                    <p className="text-blk heading-text">
                        Meet our dream team
                    </p>
                </div>
                <div className="responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12 team-members-container">
                    {
                        data.map((item, index) => (
                            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container" key={index}>
                                <div className="card">
                                    <LazyLoad height={200} offset={100}>
                                        <img className="card-img" src={item.img} />
                                    </LazyLoad>
                                    <p className="text-blk name">
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

    )
}

export default Team