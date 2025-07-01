import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';
import mainbanner from '../../assets/Main_banner.png';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import girl1 from '../../assets/girl3.png';

const images = [
  mainbanner,
  img1,
  img2,
  girl1
];

const NUM_SLICES = 4;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);

  const createSlices = (slideEl, backgroundImage) => {
    // Clear previous slices
    const oldSlices = slideEl.querySelectorAll('.carousel-slice');
    oldSlices.forEach((slice) => slice.remove());

    for (let i = 0; i < NUM_SLICES; i++) {
      const slice = document.createElement('div');
      slice.className = 'carousel-slice';
      slice.style.width = `${100 / NUM_SLICES}vw`;
      slice.style.left = `${(100 / NUM_SLICES) * i}vw`;
      slice.style.backgroundImage = backgroundImage;
      slice.style.backgroundPosition = `${(100 / (NUM_SLICES - 1)) * i}% 50%`;
      slice.style.setProperty('--dir-x', i % 2 === 0 ? -1 : 1);
      slice.style.setProperty('--dir-y', Math.random() > 0.5 ? -1 : 1);
      slice.style.setProperty('--rot', (Math.random() * 2 - 1).toFixed(2));
      slideEl.appendChild(slice);
    }
  };

 const showSlide = (nextIndex) => {
  if (nextIndex === currentSlide) return;

  const current = slideRefs.current[currentSlide];
  const next = slideRefs.current[nextIndex];

  // Step 1: Make next slide visible immediately *below* current
  next.classList.add('active');
  next.style.opacity = '1';
  next.style.zIndex = '0';

  // Step 2: Prepare and animate slices
  createSlices(current, current.style.backgroundImage);
  const slices = current.querySelectorAll('.carousel-slice');

  current.style.zIndex = '1'; // Keep current slide on top for slicing

  slices.forEach((slice, i) => {
    slice.style.animation = `sliceFlyAway 2.5s ease forwards`;
    slice.style.animationDelay = `${i * 0.25}s`;
  });

  current.style.transition = 'opacity 2s'; // Avoid slow fade causing white flash
  current.style.opacity = '0';

  setTimeout(() => {
    current.classList.remove('active');
    slices.forEach((s) => s.remove());
    current.style.zIndex = '';
    current.style.opacity = '';
    current.style.transition = '';
    next.style.zIndex = '';
    setCurrentSlide(nextIndex);
  }, 2200); // match with sliceFlyAway animation duration
};

  const nextSlide = () => {
    showSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    showSlide((currentSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  });

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div
          key={index}
          ref={(el) => (slideRefs.current[index] = el)}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})`, opacity: index === currentSlide ? 1 : 0 }}
        />
      ))}

      <button type="button" className="carousel-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button type="button" className="carousel-btn next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
