const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const courseRoutes = require('../routes/courseRoutes');
const newsRouter = require('../routes/newsRoutes');
const News = require('../models/News');
const Course = require('../models/courses.model');

const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/courses', courseRoutes);
app.use('/', newsRouter);

// Routes
app.get('/', async (req, res) => {
  try {
    const [admitCards, admissions, results, courses, newsList] = await Promise.all([
      News.find({ category: 'Admit Card' }).limit(5),
      News.find({ category: 'Admission' }).limit(5),
      News.find({ category: 'Result' }).limit(5),
      Course.find(),
      News.find().sort({ _id: -1 })
    ]);

    res.render('layout/boilerplate', {
      admitCards,
      admissions,
      results,
      courses,
      newsList,
      currentPath: req.path
    });
  } catch (err) {
    console.error('❌ Error rendering home page:', err);
    res.status(500).send("Server Error");
  }
});

app.get('/layout/about', (req, res) => {
  res.render('layout/about', { currentPath: req.path });
});

app.get('/layout/contact', (req, res) => {
  res.render('layout/contact', { currentPath: req.path });
});

app.get('/layout/courses', async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.render('layout/courses-page.ejs', { courses, currentPath: req.path });
  } catch (err) {
    next(err);
  }
});

app.get('/news', async (req, res) => {
  try {
    const newsList = await News.find().sort({ _id: -1 });
    res.render('news', { newsList });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = app;