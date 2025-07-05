// src/components/Admin/Addcourse.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BASE_URL = import.meta.env.VITE_API_BASE || 'https://gatimaan-site.onrender.com';

const Addcourse = () => {
  const [formData, setFormData] = useState({
    imageUrl: '',
    title: '',
    shortDescription: '',
    longDesciption: '',
    adminPassword: ''
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const res = await fetch(`${BASE_URL}/courses/admin/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message || "Course added successfully!");
        setFormData({
          imageUrl: '',
          title: '',
          shortDescription: '',
          longDesciption: '',
          adminPassword: ''
        });
      } else {
        toast.error(data.message || "Failed to add course.");
      }
    } catch (err) {
      toast.error('Something went wrong. Try again later.');
      console.error(err);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto mt-10 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Add New Course</h2>
      <form onSubmit={handleSubmit}>
        {['imageUrl', 'title', 'shortDescription', 'longDesciption', 'adminPassword'].map((field) => (
          <div className="mb-3" key={field}>
            <label className="block mb-1 capitalize">{field}</label>
            <input
              type={field === 'adminPassword' ? 'password' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded"
              required
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default Addcourse;
