import React, { useRef, useState } from 'react';
import './Contactsection.css';
import contactBg from '../../assets/contact-bg.jpg';

const ContactSection = () => {
  const formRef = useRef();
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('Sending your message...');

    const formData = new FormData(formRef.current);
    const now = new Date();
    formData.append('date', now.toISOString().split('T')[0]);
    formData.append('time', now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbw2e9eHMi9kJTiqh_Wf2y7nLbzCo63vnegksBsQwjDuJETXAtwCABGEwzGRbZMk3iPD/exec',
        { method: 'POST', body: formData }
      );

      if (response.ok) {
        setMessage('Your message was sent successfully!');
        formRef.current.reset();
      } else {
        throw new Error('Submission failed.');
      }
    } catch (error) {
      setMessage('There was an error submitting the form.');
      console.error('Error!', error.message);
    } finally {
      setSubmitting(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
        <div
      className="contact-page-wrapper"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
      >
      <div className="contact-container">
        <div className="contact-content">
          <div className="right-column">
            <h2>Get in Touch With Us!</h2>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
              name="submit-to-google-sheet"
            >
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
              </div>

              <input type="hidden" name="sheetType" value="Sheet1" />
              <button type="submit" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Send Message'}
              </button>
            </form>
            <div id="message" className="text-center">{message}</div>
          </div>

          <div className="left-column">
            <h2>Contact Our Support Team</h2>
            <p>
              We're Here to Help! Reach out to us via phone, email, or through the contact form below,
              and let us support you in achieving all of your academic goals.
              Your journey to international education starts here!
            </p>
            <ul className="support-info">
              <li>
                <i className="fas fa-envelope"></i> Email:
                <a href="mailto:onlinegatimaan@gmail.com" className="email" style={{ textDecoration: 'none', color: 'white' }}>
                  &nbsp; onlinegatimaan@gmail.com
                </a>
              </li>
              <li>
                <i className="fas fa-phone"></i> Phone:
                <a href="tel:+918279980079" style={{ textDecoration: 'none', color: 'white' }}>
                  &nbsp; +91 8279980079
                </a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> Address: Kuncha Raja ji, Sikandrabad <br />
                District : Bulandshahr - 203205
              </li>
            </ul>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <header className="contact-header">
          <div className="contact-info">
            <div className="info-box">
              <div className="con-icon">
                <h1 className="contact-icon"><i className="fa-solid fa-phone"></i></h1>
              </div>
              <br />
              <h3>Call us</h3>
              <b><p>+91 8279980079</p></b>
            </div>
            <div className="info-box">
              <div className="con-icon">
                <h1 className="contact-icon"><i className="fa-solid fa-envelope"></i></h1>
              </div>
              <br />
              <h3>Email us</h3>
              <b><p>onlinegatimaan@gmail.com</p></b>
            </div>
            <div className="info-box">
              <div className="con-icon">
                <h1 className="contact-icon"><i className="fa-solid fa-location-dot"></i></h1>
              </div>
              <br />
              <h3>Visit Here</h3>
              <b><p>Kuncha Raja ji, Sikandrabad <br /> District : Bulandshahr - 203205</p></b>
            </div>
          </div>
        </header>
      </div>
      </div>
  );
};

export default ContactSection;
