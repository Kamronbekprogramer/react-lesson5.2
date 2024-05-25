import React from 'react';
import './Header.css';
function Header() {
  return (
    <header>
      <div className="container">
        <ul>
          <li><a href="#">Works</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      {/* <div className="toggle">
        <div className="menu-toggle">
          <input type="checkbox" id="toggle" />
          <span></span>
          <span></span>
          <span></span>
          <ul>
            <li><a href="#">Works</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div> */}
    </header>
  );
}

export default Header;
