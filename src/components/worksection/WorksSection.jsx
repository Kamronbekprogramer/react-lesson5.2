import React from 'react';
import './WorksSection.css';
import WorkItem from './WorkItem';

function WorksSection({ works }) {
  return (
    <div className="works_section">
      <div className="container">
        <div className="works">
          <h1>Featured works</h1>
          {works.map((work) => (
            <React.Fragment key={work.id}>
              <WorkItem work={work} />
              <div className="border">
                <svg xmlns="http://www.w3.org/2000/svg" width="858" height="2" viewBox="0 0 858 2" fill="none">
                  <path d="M0 1L858 1.00008" stroke="#E0E0E0" />
                </svg>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorksSection;
