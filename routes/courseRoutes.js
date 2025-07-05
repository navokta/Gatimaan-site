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

// ✅ Get Course by ID for Edit (API)
router.get('/admin/edit/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    res.status(200).json({ success: true, course });
  } catch (err) {
    console.error('❌ Failed to fetch course:', err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});


// ✅ Handle Edit Submission (JSON API)
router.post('/admin/edit/:id', async (req, res) => {
  const {
    imageUrl = '',
    title = '',
    shortDescription = '',
    longDesciption = '',
    adminPassword = ''
  } = req.body;

  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ success: false, message: 'Invalid admin password' });
    }

    if (!imageUrl || !title || !shortDescription || !longDesciption) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    await Course.findByIdAndUpdate(req.params.id, {
      imageUrl,
      title,
      shortDescription,
      longDesciption,
    });

    return res.status(200).json({ success: true, message: 'Course updated successfully' });

  } catch (err) {
    console.error('❌ Edit Error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
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



// ✅ Must come before "/:id"
router.get('/api', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses); // Proper API response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while fetching courses' });
  }
});

// ⚠️ KEEP THIS LAST
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).send('Course not found');

    res.render('layout/course-view-page', { course });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


// backend: routes/courseRoutes.js
router.get('/api/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});



export default router;
