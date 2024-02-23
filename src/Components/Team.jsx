import React from 'react';
import '../Team.css'
const Team = () => {
    return (
        <section className='team-section'>
            <div className='row container'>
                <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-4 headings-container">
                    <p class="text-blk heading-text">
                        Meet our dream team
                    </p>
                    <p class="text-blk sub-heading-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla et sagittis,
                        vestibulum risus lacus sit.
                    </p>
                </div>
                <div class="responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12 team-members-container">
                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
                        <div class="card">
                            <img class="card-img" src="/team3.jpeg" />
                            <p class="text-blk name">
                                Dr, Jitendra Kumar
                            </p>
                        </div>
                    </div>
                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
                        <div class="card">
                            <img class="card-img" src="/team4.jpeg" />
                            <p class="text-blk name">
                                Gajendra Singh
                            </p>
                        </div>
                    </div>
                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
                        <div class="card">
                            <img class="card-img" src="/team5.jpeg" />
                            <p class="text-blk name">
                                Amit Anand
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Team