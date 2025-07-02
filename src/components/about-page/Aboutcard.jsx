import React from 'react';
import './Aboutcard.css';

import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';
import person3 from '../../assets/person3.png';

const teamMembers = [
  {
    name: 'Dr. Bharat Bhushan Sharma',
    position: 'Co-Founder',
    qualifications: ['Ph.D', 'MBA', 'UGC NET'],
    bio: 'Expert in business, marketing, and economics with degrees in MBA, M.Com, MA Economics, and Yogic Sciences.',
    image: person1,
    linkedin: '#',
    email: '#',
  },
  {
    name: 'Pawan Sharma',
    position: 'Director',
    qualifications: ['M.Com', 'MBA', 'LLB'],
    bio: 'Expert in commerce, management, and law with M.Com, MBA in Marketing & Finance, and LLB degree.',
    image: person2,
    linkedin: '#',
    email: '#',
  },
  {
    name: 'Shailee Sharma',
    position: 'Founder',
    qualifications: ['M.A. English', 'M.A. Education', 'B.Ed'],
    bio: 'Education specialist with dual M.A. degrees in English and Education, plus B.Ed qualification.',
    image: person3,
    linkedin: '#',
    email: '#',
  },
];

const AboutCard = () => {
  return (
    <div className="team-section">
      <div className="section-header">
        <h2>Our <span>Expert Team</span></h2>
        <p className="section-subtitle">Meet the dedicated professionals behind our success</p>
        <div className="divider"></div>
      </div>

      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="card-image">
              <img src={member.image} alt={member.name} />
              <div className="image-overlay"></div>
            </div>
            <div className="card-content">
              <h3>{member.name}</h3>
              <p className="position">{member.position}</p>
              <div className="qualifications">
                {member.qualifications.map((qual, i) => (
                  <span key={i}>{qual}</span>
                ))}
              </div>
              <p className="bio">{member.bio}</p>
              <div className="social-links">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={`mailto:${member.email}`}>
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
