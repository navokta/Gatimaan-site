import React, { useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    const topBtn = document.getElementById("topBtn");
    const whatsappBtn = document.getElementById("whatsappBtn");

    const handleScroll = () => {
      const showBtn = document.body.scrollTop > 300 || document.documentElement.scrollTop > 300;
      if (topBtn) topBtn.style.display = showBtn ? "block" : "none";
      if (whatsappBtn) {
        if (showBtn) {
          whatsappBtn.classList.add("shift-up");
        } else {
          whatsappBtn.classList.remove("shift-up");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">

        {/* About Section */}
        <div className="footer-box footer-about des">
          <h3 className="footer-txt">About Gatimaan</h3>
          <p>
            Empowering students and professionals with expert guidance, personalized counseling, and industry insights to make confident, informed career choices.
          </p>
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box des">
          <h3 className="footer-txt">Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/layout/courses">Courses</a></li>
            <li><a href="/layout/about">About Us</a></li>
            <li><a href="/layout/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-box des">
          <h3 className="footer-txt">Contact Us</h3>
          <p>Email: <a href="mailto:onlinegatimaan@gmail.com">onlinegatimaan@gmail.com</a></p>
          <p>Phone: <a href="tel:+918279980079">+91 8279980079</a></p>
          <p>Address: Kuncha Raja ji, Sikandrabad <br /> District: Bulandshahr - 203205</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom des">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved by Gatimaan</p>
        <p>Made with ❤️ by <a href="https://www.navokta.com" style={{ textDecoration: 'none', color: 'white' }}><strong>Navokta</strong></a></p>
      </div>

      {/* Back to Top Button */}
      <button onClick={scrollToTop} id="topBtn" title="Go to top">
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
