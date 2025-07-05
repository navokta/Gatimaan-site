import React, { useEffect, useState } from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_API_BASE || "https://gatimaan-site.onrender.com";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${BASE_URL}/courses/api`);
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('❌ Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="course-container">
      <div className="course-header">
        <h1>Discover Our Courses</h1>
        <p>Interactive learning experiences with modern animations</p>
      </div>

      <div className="course-grid">
        {courses.map((course) => (
          <div className="course-card" key={course._id}>
            <div className="course-image-container">
              <img
                src={course.imageUrl || 'https://source.unsplash.com/random/600x400?education'}
                alt={course.title}
                className="course-image"
              />
              <span className="course-badge">Popular</span>
            </div>

            <div className="course-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.shortDescription}</p>

              <div className="course-meta">
                <span className="course-price">
                  {course.price ? `$${course.price}` : ''}
                </span>

                <div className="course-rating">
                  <div className="stars">★★★★★</div>
                  <span>
                    ({(Math.random() * (5 - 3.8) + 3.8).toFixed(1)})
                  </span>
                </div>
              </div>

              <Link to={`/courses/${course._id}`} className="course-button">
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
