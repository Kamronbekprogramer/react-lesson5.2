// src/components/MainSection.js
import React from 'react';
import './MainSection.css';
import main_img from '../../assets/Ellipse 1.png';

function MainSection() {
  return (
    <div className="main_section">
      <div className="container">
        <div className="main_inner_section">
        <div className="main_img">
            <img src={main_img} alt="" />
          </div>
          <div className="main_text">
            <h1>Hi, I am John,<br /> Creative Technologist</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button>Download Resume</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default MainSection;
