import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ReadMore.css';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [faqs, setFaqs] = useState([
      {
      question: "Do I need any prior knowledge before using this platform?",
      answer: "Not at all. Our consultancy is built for all students—whether you're just starting or need guidance at any stage."
    },
    {
      question: "What kind of help do you provide to students?",
      answer: "We help with university forms, admit cards, results, course selection, and provide career counseling and exam preparation tips—all in Hindi-friendly guidance."
    },
    {
      question: "How long do I get access to this platform?",
      answer: "Once registered, you’ll get lifetime access to our latest updates, resources, and consultancy support."
    },
    {
      question: "Is this service paid or free?",
      answer: "Most of our resources are free. Some advanced services or personalized consulting may have a minimal fee, which will be clearly mentioned."
    }
  ]);
  

  useEffect(() => {
    fetch(`http://localhost:5000/courses/api/${id}`)
      .then(res => res.json())
      .then(data => {
        setCourse(data);
        setFaqs(data.faqs || []);
      })
      .catch(err => console.error("Failed to fetch course:", err));
  }, [id]);

  if (!course) return <div>Loading...</div>;

  const randomRating = (Math.random() * (5 - 3.9) + 3.9).toFixed(1);
  const randomStudents = Math.floor(Math.random() * (1500 - 500 + 1) + 500);

  return (
    <div className="course-container">
      <header className="course-header">
        <div className="header-content">
          <div className="course-category">{course.category || 'Professional Course'}</div>
          <h1 className="course-title">{course.title}</h1>
          <p className="course-tagline">{course.tagline || 'Transform your skills and accelerate your career'}</p>

          <div className="course-stats">
            <div className="stat-box">
              <i className="fas fa-star"></i>
              <span>{course.rating || randomRating} Rating</span>
            </div>
            <div className="stat-box">
              <i className="fas fa-users"></i>
              <span>{course.students || randomStudents} Students</span>
            </div>
            <div className="stat-box">
              <i className="fas fa-certificate"></i>
              <span>{course.certificate ? 'Certificate' : 'No Certificate'}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="course-main">
        <div className="course-left">
          <section className="course-section">
            <h2>Consultancy Highlights</h2>
            <div className="highlight-grid">
              {course.shortDescription}
            </div>
          </section>

          <section className="course-section">
            <h2>About This Course</h2>
            <p>{course.longDesciption}</p>
          </section>

             <section className="eligibility-card">
      <h2 className="eligibility-title">Eligibility Criteria</h2>
      <div className="eligibility-list">
        <div className="eligibility-item">
          <div className="eligibility-content">
            <h3 className="eligibility-heading">1. 10+2 (Intermediate)</h3>
            <p className="eligibility-text">Minimum 50% Marks required</p>
          </div>
        </div>
        <div className="eligibility-item">
          <div className="eligibility-content">
            <h3 className="eligibility-heading">2. Bachelor's Degree</h3>
            <p className="eligibility-text">Minimum 50% Marks required</p>
          </div>
        </div>
        <div className="eligibility-note">
          *Note: Eligibility criteria may vary based on state regulations and university guidelines.
        </div>
      </div>
    </section>
        </div>

        <div className="course-right">
          <div className="course-box">
            <img src={course.imageUrl || 'https://placehold.co/600x400'} alt={course.title} />
            <div className="box-content">
              <h2>{course.title}</h2>
              <button onClick={() => window.location.href = 'tel:+918279980079'}>Call With Us</button>
              <div className="box-note">Your Career - Our Responsibility</div>
            </div>
          </div>

          <div className="consultant-box">
            <h3>About the Consultant</h3>
            <div className="consultant-info">
              <img src="/images/CEO image-modified.png" alt="Instructor" />
              <div>
                <h4>Dr. Bharat Bhushan Sharma</h4>
                <p>Teaching Experience of 8+ Years</p>
                <div className="consultant-stats">
                  <i className="fas fa-star"></i> <span>4.8</span>
                  <i className="fas fa-users"></i> <span>12,345 students</span>
                </div>
              </div>
            </div>
            <p>Dr. Bharat Bhushan Sharma, a UGC NET qualified scholar with a Ph.D. in Foreign Trade...</p>
          </div>
        </div>
      </main>

        <section className="faq-section">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about the course</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={e => {
                e.currentTarget.nextSibling.classList.toggle("hidden");
                e.currentTarget.querySelector("i")?.classList.toggle("rotate");
              }}
            >
              <h3>{faq.question}</h3>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer hidden">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default CourseDetails;
