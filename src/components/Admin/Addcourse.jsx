import React, { useState } from "react";
import "./Addcourse.css";

const Addcourse = () => {
  const [form, setForm] = useState({
    imageUrl: "",
    title: "",
    shortDescription: "",
    longDesciption: "",
    adminPassword: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await fetch("http://localhost:5000/courses/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(result.success);
        setError("");
        setForm({
          imageUrl: "",
          title: "",
          shortDescription: "",
          longDesciption: "",
          adminPassword: "",
        });
      } else {
        setError(result.error || "Something went wrong");
        setSuccess("");
      }
    } catch (err) {
      setError("Server error");
      setSuccess("");
    }
  };

  return (
    <div className="ac-container">
      <div className="ac-box">
        <h2 className="ac-heading">Add New Course</h2>

        {error && <div className="ac-error">{error}</div>}
        {success && <div className="ac-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="ac-form-group">
            <label>Image URL</label>
            <input
              type="text"
              name="imageUrl"
              required
              value={form.imageUrl}
              onChange={handleChange}
            />
          </div>

          <div className="ac-form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              required
              value={form.title}
              onChange={handleChange}
            />
          </div>

          <div className="ac-form-group">
            <label>Short Description</label>
            <textarea
              name="shortDescription"
              rows="3"
              required
              value={form.shortDescription}
              onChange={handleChange}
            />
          </div>

          <div className="ac-form-group">
            <label>Long Description</label>
            <textarea
              name="longDesciption"
              rows="5"
              required
              value={form.longDesciption}
              onChange={handleChange}
            />
          </div>

          <div className="ac-form-group">
            <label>Admin Password</label>
            <input
              type="password"
              name="adminPassword"
              required
              value={form.adminPassword}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="ac-submit-button">
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcourse;
