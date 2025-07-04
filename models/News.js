// ./models/News.js (✅ ESM syntax)

import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  newsTitle: {
    type: String,
    required: true
  },
  newsLink: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Admit Card', 'Admission', 'Result'],
    required: true
  }
}, { timestamps: true });

const News = mongoose.model('News', NewsSchema);

export default News; // ✅ ESM export
