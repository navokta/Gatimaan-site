import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Editcourse.css";

const Editcourse = () => {
  const { id } = useParams();

  const [form, setForm] = useState({
    imageUrl: "",
    title: "",
    shortDescription: "",
    longDesciption: "",
    adminPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/courses/admin/edit/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          setError(data.message || "Failed to load course.");
        } else {
          setForm((prev) => ({
            ...prev,
            ...data.course,
          }));
        }
      })
      .catch(() => setError("Failed to fetch course details."));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`http://localhost:5000/courses/admin/edit/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (!result.success) {
        setError(result.message || "Failed to update course.");
      } else {
        setSuccess("Course updated successfully!");
        setForm((prev) => ({ ...prev, adminPassword: "" })); // clear password
      }
    } catch {
      setError("Update failed due to server error.");
    }
  };

  return (
    <div className="ec-container">
      <h1 className="ec-title">Edit Course</h1>

      {error && <p className="ec-error">{error}</p>}
      {success && <p className="ec-success">{success}</p>}

      <form className="ec-form" onSubmit={handleSubmit}>
        <label>Image URL:</label>
        <input type="text" name="imageUrl" value={form.imageUrl} onChange={handleChange} />

        <label>Title:</label>
        <input type="text" name="title" value={form.title} onChange={handleChange} />

        <label>Short Description:</label>
        <input type="text" name="shortDescription" value={form.shortDescription} onChange={handleChange} />

        <label>Long Description:</label>
        <textarea name="longDesciption" value={form.longDesciption} onChange={handleChange}></textarea>

        <label>Admin Password:</label>
        <input type="password" name="adminPassword" value={form.adminPassword} onChange={handleChange} />

        <button type="submit" className="ec-submit-button">Update Course</button>
      </form>
    </div>
  );
};

export default Editcourse;
