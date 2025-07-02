import React from 'react';
import './Aboutsection.css';
import aboutImg from '../../assets/about-bg.jpg'; 

const AboutSection = () => {
  return (
    <div className="container">
      <div className="image-section">
        <img src={aboutImg} alt="Career Guidance" style={{ objectFit: 'contain' }} />
      </div>
      <div className="text-section">
        <h1>About</h1>
        <p>
          <strong>Gatimaan Career Creator</strong> is a consultancy group led by Dr. Bharat Bhushan Sharma,
          dedicated to guiding students in shaping their future after 10+2.
        </p>
        <p>
          Dr. Sharma offers expert advice on choosing the right career path and helps students secure admissions
          in various reputed colleges and universities across India.
        </p>
        <p>
          Whether you're unsure about your next step or seeking the best educational opportunities, <strong>Gatimaan</strong>
          provides trusted support and direction for your academic journey.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
