// ./models/courses.model.js (✅ ESM format)

import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  longDesciption: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema, 'Courses');

export default Course; // ✅ ES Module export
