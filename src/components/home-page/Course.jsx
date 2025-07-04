import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import './Course.css'

const CoursesSection = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });

    // Fetch courses from backend
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/courses/api/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("❌ Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="courses-section py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5 display-5 fw-bold text-primary des">
          🎓 Explore Our Courses
        </h2>

        {courses.length > 0 ? (
          <>
            <div className="row g-4 des">
              {courses.slice(0, 6).map((course, index) => (
                <div
                  className="col-md-4 col-sm-6 des"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  key={course._id}
                >
                  <div className="card h-100 shadow-sm course-card border-0 overflow-hidden">
                    <img
                      src={course.imageUrl || "https://placehold.co/600x400"}
                      className="card-img-top"
                      alt={course.title}
                    />
                    <div className="card-body d-flex flex-column text-center tracking-tighter">
                      <h5 className="card-title">{course.title}</h5>
                      <p className="card-text flex-grow-1">
                        {course.shortDescription}
                      </p>
                      <Link
                        to={`/courses/${course._id}`}
                        className="btn btn-outline-primary mt-auto w-100"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <Link to="/layout/courses" className="btn btn-lg btn-success des">
                Explore More Courses
              </Link>
            </div>
          </>
        ) : (
          <div className="alert alert-info text-center mt-4 des">
            No courses available yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
