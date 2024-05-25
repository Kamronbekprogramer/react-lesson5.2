// src/components/PostsSection.js
import React from 'react';
import './PostSection.css';
function PostsSection() {
  return (
    <div className="posts_section">
      <div className="container">
        <div className="posts">
          <div className="posts_text">
            <h3>Recent posts</h3>
            <button><a href="#">View all</a></button>
          </div>
          <div className="posts_card">
            <div className="card">
              <h1>Making a design system from scratch</h1>
              <div className="data">
                <p>12 Feb 2020</p>
                <p>|</p>
                <p>design, Pattern</p>
              </div>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="card">
              <h1>Making a design system from scratch</h1>
              <div className="data">
                <p>12 Feb 2020</p>
                <p>|</p>
                <p>design, Pattern</p>
              </div>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostsSection;
