import React from 'react';
import './Aboutvision.css';
import girlBackground from '../../assets/girl1.jpg'; // Make sure the path is correct

const AboutVision = () => {
  return (
    <div
      className="about-vision"
      style={{ backgroundImage: `url(${girlBackground})` }}
    >
      <div className="vision-box">
        Our Vision through Gatimaan
      </div>

      <div className="description-box">
        At <strong>Gatimaan</strong>, we envision a future where every student and professional can
        navigate their career path with clarity and confidence. Our platform acts as a bridge between
        aspirations and achievements, empowering individuals through personalized career consultation
        and expert guidance.

        <br /><br />

        Through advanced tools, mentorship programs, and data-driven insights, Gatimaan is redefining how
        people explore, plan, and grow in their careers. Our mission is to ensure no dream is left
        unexplored and every talent finds its destination.
      </div>
    </div>
  );
};

export default AboutVision;
