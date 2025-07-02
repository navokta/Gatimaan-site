import React, { useEffect, useState } from 'react';
import './WhatsappIcon.css';
import whatsappIcon from '../../assets/whatsap.png'; // Ensure the image path is correct

const WhatsappIcon = () => {
  const [isActive, setIsActive] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setShowTopButton(scrollPosition > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fab-container ${isActive ? 'active' : ''}`}
        style={{ bottom: showTopButton ? '80px' : '20px' }}
      >
        <div className="fab-options">
          <a
            href="https://wa.me/+918279980079?text=Hi%20I'm%20interested%20in%20your%20course!"
            target="_blank"
            rel="noopener noreferrer"
            className="fab-option"
          >
            📱 WhatsApp
          </a>
          <a href="tel:+918279980079" className="fab-option">
            📞 Call
          </a>
        </div>
        <div
          className={`fab-button ${isActive ? 'cross' : ''}`}
          onClick={() => setIsActive(!isActive)}
        >
          <img src={whatsappIcon} alt="WhatsApp Icon" />
        </div>
      </div>

      {showTopButton && (
        <button onClick={scrollToTop} id="topBtn" title="Go to top">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default WhatsappIcon;
