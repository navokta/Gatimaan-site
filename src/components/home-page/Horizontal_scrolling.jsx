import React, { useEffect, useRef } from "react";
import "./Horizontal_scrolling.css";
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';

const links = [
  { href: "https://www.mangalayatan.in", label: "MU", img: logo1 },
  { href: "https://www.subharti.org.in", label: "Subharti University", img: logo2 },
  { href: "https://aktu.ac.in/university-logo.html", label: "AKTU", img: logo3 },
  { href: "https://www.abc.gov.in/", label: "ABC id", img: logo6 },
  { href: "https://ccsuniversity.ac.in", label: "CCSU Meerut", img: logo4 },
  { href: "https://www.du.ac.in/", label: "Delhi University", img: logo5 },
  { href: "https://deb.ugc.ac.in/StudentDEBID", label: "DEB id", img: logo6 },
];

const AutoSlider = () => {
  const trackRef = useRef(null);
  const offset = useRef(0);
  const slideWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;

    // Duplicate slides once to create seamless scroll
    links.forEach((_, index) => {
      const clone = track.children[index].cloneNode(true);
      track.appendChild(clone);
    });

    const slide = track.children[0];
    slideWidthRef.current = slide.offsetWidth + 20;

    let animationId;

    const animate = () => {
      offset.current -= 1;
      if (Math.abs(offset.current) >= slideWidthRef.current * links.length) {
        offset.current = 0;
      }
      track.style.transform = `translateX(${offset.current}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="auto-slider-section">
      <div className="auto-slider-container">
        <h2 className="slider-title">📌 Quick Links</h2>
        <div className="slider-wrapper">
          <div className="slider-track" ref={trackRef}>
            {links.map((link, i) => (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="slide-link"
                key={i}
              >
                <div className="slide">
                  <div className="icon-box">
                    <img src={link.img} alt={link.label} className="icon-img" />
                  </div>
                  <p className="slide-label">{link.label}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoSlider;
