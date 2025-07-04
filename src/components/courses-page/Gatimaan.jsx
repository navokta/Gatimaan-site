import React from "react";
import { Link } from "react-router-dom";
import "./Gatimaan.css";

const Gatimaan = () => {
  return (
    <div className="gc-container">
      {/* Left Section - Courses */}
      <div className="gc-courses-section">
        <div className="gc-header">
          <h1 className="gc-title">
            Gatimaan <span>Classes</span>
          </h1>
          <div className="gc-divider"></div>
        </div>

        <h2 className="gc-subtitle">What We Offer</h2>

        <div className="gc-course-grid">
          <div className="gc-course-card">
            <div className="gc-course-icon">📊</div>
            <h3>DCA</h3>
            <p>Diploma in Computer Applications</p>
          </div>

          <div className="gc-course-card">
            <div className="gc-course-icon">💻</div>
            <h3>DFA</h3>
            <p>Diploma in Financial Accounting</p>
          </div>

          <div className="gc-course-card">
            <div className="gc-course-icon">⌨️</div>
            <h3>Typing</h3>
            <p>Professional Typing Courses</p>
          </div>

          <div className="gc-course-card">
            <div className="gc-course-icon">📈</div>
            <h3>Excel</h3>
            <p>Advanced Spreadsheet Training</p>
          </div>

          <div className="gc-course-card">
            <div className="gc-course-icon">💰</div>
            <h3>Tally</h3>
            <p>Accounting Software Training</p>
          </div>

          <div className="gc-course-card">
            <div className="gc-course-icon">💹</div>
            <h3>Tally Prime</h3>
            <p>Latest Tally Version</p>
          </div>

          <div className="gc-course-card gc-featured">
            <div className="gc-course-icon">🎯</div>
            <h3>CCC</h3>
            <p>Course on Computer Concepts</p>
          </div>
        </div>
      </div>

      {/* Right Section - About */}
      <div className="gc-about-section">
        <div className="gc-about-content">
          <h2 className="gc-about-title">
            Run By <span>Keshav Educational Trust</span>
          </h2>
          <div className="gc-about-divider"></div>

          <p className="gc-about-text">
            Gatimaan Classes is a premier computer education institute committed
            to providing quality training in various computer applications and
            accounting software. Our mission is to empower students with
            practical skills for today's digital workforce.
          </p>

          <p className="gc-about-text">
            Established under the Keshav Educational Trust, we have been serving
            the community since 2018, helping thousands of students achieve
            their career goals through our comprehensive courses.
          </p>

          <div className="gc-highlights">
            <div className="gc-highlight-item">
              <div className="gc-highlight-icon">👨‍🏫</div>
              <p>Expert Instructors</p>
            </div>
            <div className="gc-highlight-item">
              <div className="gc-highlight-icon">🏆</div>
              <p>Certified Courses</p>
            </div>
            <div className="gc-highlight-item">
              <div className="gc-highlight-icon">📅</div>
              <p>Flexible Batches</p>
            </div>
          </div>

          <Link to="/layout/contact" className="gc-contact-button">
            Contact Us
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gatimaan;
