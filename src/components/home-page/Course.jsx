import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import './Course.css';

const CoursesSection = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/courses/api/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("❌ Failed to fetch courses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="courses-section">
      <div className="container">
        <div className="section-info">
        <h2 className="section-title">
          Explore Our <span className="highlight">Courses</span>
        </h2>
        <p className="section-subtitle">Discover the perfect learning path for you</p>
        </div>

        {isLoading ? (
          <div className="loading-courses">
            <div className="loading-spinner"></div>
            <p>Loading courses...</p>
          </div>
        ) : courses.length > 0 ? (
          <>
            <div className="courses-container">
              {courses.slice(0, 6).map((course, index) => (
                <div
                  className="course-card-wrapper"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  key={course._id}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="course-card">
                    <div className="image-container">
                      <img
                        src={course.imageUrl || "https://placehold.co/600x400"}
                        className="course-image"
                        alt={course.title}
                        loading="lazy"
                      />
                      {/* <div className="course-badge">Popular</div> */}
                    </div>
                    <div className="card-body">
                      {/* <div className="course-meta">
                        <span className="course-level">{course.level || 'Beginner'}</span>
                        <span className="course-duration">• {course.duration || '4 weeks'}</span>
                      </div> */}
                      <h5 className="card-title">{course.title}</h5>
                      <p className="card-text">
                        {course.shortDescription}
                      </p>
                      <div className="card-footer">
                        <Link
                          to={`/courses/${course._id}`}
                          className="read-more-btn"
                        >
                          Explore Course
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </Link>
                        {/* <span className="course-price">${course.price || '49.99'}</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="explore-more" data-aos="fade-up">
              <Link to="/layout/courses" className="explore-btn">
                View All Courses
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </Link>
            </div>
          </>
        ) : (
          <div className="no-courses" data-aos="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7f8c8d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <h3>No courses available yet</h3>
            <p>Check back later or contact us for more information</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;