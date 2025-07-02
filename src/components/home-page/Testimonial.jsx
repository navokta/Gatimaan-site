import React from "react";
import "./Testimonial.css";
import CEOImage from "../../assets/CEO image-modified.png";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Quote Icon */}
        <img
          src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/quote.svg"
          height="50"
          className="quote-icon"
          alt="Quote Icon"
          loading="lazy"
        />

        <div className="testimonial-card">
          {/* Text Quote */}
          <div className="testimonial-content">
            <p className="testimonial-quote">
              "मुसीबतें आएंगी हज़ार,
              <br />
              पढ़ाई से ही मिलेगा संसार में सम्मान और अधिकार।
              <br />
              शिक्षा ही है असली उपहार।"
            </p>
          </div>

          {/* Author */}
          <div className="testimonial-author-section">
            <img
              src={CEOImage}
              alt="Dr. Bharat Bhushan Sharma"
              className="testimonial-image"
              loading="lazy"
            />
            <div className="testimonial-author-details">
              <div className="testimonial-author">
                Dr. Bharat Bhushan Sharma
              </div>
              <div className="testimonial-title">
                Ph.D., M.Com, MBA, MA(Economics), MA(Yogic Sciences)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
