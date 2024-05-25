import React from 'react';
import './WorkItem.css';

function WorkItem({ work }) {
  return (
    <div className="work">
      <div className="work-img">
        <img src={work.image} alt={work.title} />
      </div>
      <div className="work-text">
        <h1>{work.title}</h1>
        <div className="dashboard">
          <div className="year">
            <p>{work.year}</p>
          </div>
          <p>{work.category}</p>
        </div>
        <p>{work.description}</p>
      </div>
    </div>
  );
}

export default WorkItem;
