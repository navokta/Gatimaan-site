// ./routes/courseRoutes.js (ESM Compatible)

import express from 'express';
import Course from '../models/courses.model.js';

const router = express.Router();

// ✅ Show Add Course Form
router.get('/admin/add', (req, res) => {
  res.render('admin/add-courses', { error: null, success: null });
});

// ✅ Handle Add Course Form Submission
router.post('/admin/add', async (req, res) => {
  const {
    imageUrl = '',
    title = '',
    shortDescription = '',
    longDesciption = '',
    adminPassword = ''
  } = req.body;

  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return res.render('admin/add-courses', {
      error: 'Invalid admin password',
      body: req.body
    });
  }

  if (!imageUrl || !title || !shortDescription || !longDesciption) {
    return res.render('admin/add-courses', {
      error: 'All fields are required',
      body: req.body
    });
  }

  try {
    const newCourse = new Course({ imageUrl, title, shortDescription, longDesciption });
    await newCourse.save();

    res.render('admin/add-courses', {
      success: 'Course added successfully!',
      body: {}
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


// ✅ List All Courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.render('components/courses', { courses });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// ✅ Show Edit Form
router.get('/admin/edit/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).send('Course not found');

    res.render('admin/edit-course', { course, error: null });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// ✅ Handle Edit Submission
router.post('/admin/edit/:id', async (req, res) => {
  const {
    imageUrl = '',
    title = '',
    shortDescription = '',
    longDesciption = '',
    adminPassword = ''
  } = req.body;

  const course = await Course.findById(req.params.id);

  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return res.render('admin/edit-course', {
      course,
      error: 'Invalid admin password',
    });
  }

  if (!imageUrl || !title || !shortDescription || !longDesciption) {
    return res.render('admin/edit-course', {
      course,
      error: 'All fields are required',
    });
  }

  try {
    await Course.findByIdAndUpdate(req.params.id, {
      imageUrl,
      title,
      shortDescription,
      longDesciption
    });

    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


// ✅ API route for frontend (JSON response)
router.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    console.error('❌ Failed to fetch courses:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});



// ⚠️ View Single Course (keep last)
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).send('Course not found');

    res.render('layout/course-view-page', { course, currentPath: req.path });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


export default router;
