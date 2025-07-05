import React, { useState } from "react";
import "./AddNews.css";

const AddNews = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    newsTitle: "",
    newsLink: "",
    category: "",
    adminpassword: "",
  });

  const [status, setStatus] = useState({ error: "", success: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ error: "", success: "" });

    try {
      const res = await fetch("http://localhost:5000/admin/add-news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.success) {
        setStatus({ error: data.message || "Failed to submit news.", success: "" });
      } else {
        setStatus({ success: "✅ News submitted successfully!", error: "" });
        setFormData({
          title: "",
          description: "",
          newsTitle: "",
          newsLink: "",
          category: "",
          adminpassword: "",
        });
      }
    } catch (err) {
      setStatus({ error: "🚨 Server error. Please try again.", success: "" });
    }
  };

  return (
    <div className="add-news-container">
      <h2>📰 Submit New News</h2>

      {status.error && <p className="error-message">{status.error}</p>}
      {status.success && <p className="success-message">{status.success}</p>}

      <form onSubmit={handleSubmit} className="add-news-form">
        <label>Post Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>News Title:</label>
        <input
          type="text"
          name="newsTitle"
          value={formData.newsTitle}
          onChange={handleChange}
          required
        />

        <label>News Link:</label>
        <input
          type="url"
          name="newsLink"
          value={formData.newsLink}
          onChange={handleChange}
          required
        />

        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Category --</option>
          <option value="Admit Card">Admit Card</option>
          <option value="Admission">Admission</option>
          <option value="Result">Result</option>
        </select>

        <label>Admin Password:</label>
        <input
          type="password"
          name="adminpassword"
          value={formData.adminpassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit News</button>
      </form>
    </div>
  );
};

export default AddNews;
