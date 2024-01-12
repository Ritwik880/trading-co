// Timeline.js

import React from 'react';
import { EVENTSDATA as data } from '../constants/utils';
const Timeline = () => {


  return (
    <section className='timeline-section'>
      <div className='row container'>
        <div>
          <h1 className='timeline-heading'>ROAD MAP</h1>
          <p className='timeline-para'>
            A product roadmap shows the path ahead, helps teams plan,
            and guides the delivery of the product.

          </p>
        </div>
        <div>
          {
            data && data.map((item, id) => {
              return (
                <div key={id}>
                  <div class="timeline-empty">
                  </div>
                  <div class="timeline-middle">
                    <div class="timeline-circle"></div>
                  </div>
                  <div class="timeline-component timeline-content">
                    <h3>
                      {item.name}
                    </h3>
                    <p>
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Timeline;
