// Timeline.js

import React from 'react';
import { EVENTSDATA as data } from '../constants/utils';
import '../Timeline.css';

const Timeline = () => {
  return (
    <section className='timeline-section'>
      <div className='row container'>
        <div className='timeline-content-div'>
          <h1 className='timeline-heading'>ROAD MAP</h1>
          <p className='timeline-para'>
            A product roadmap shows the path ahead, helps teams plan,
            and guides the delivery of the product.
          </p>
        </div>
        <div className="timeline">
          {data.map((event, index) => (
            <div key={index} className={`timeline-container ${index % 2 === 0 ? 'left' : 'right'}`}>
              {index === 0 && <div className='timeline-point'></div>}
              <div className="content">
                <h2 className='timeline-card-heading'>{event.name}</h2>
                <p className='timeline-card-para'>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
