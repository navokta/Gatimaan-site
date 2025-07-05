import express from 'express';
import Course from '../models/courses.model.js';

const router = express.Router();

router.get('/add', (req, res) => {
  res.render('admin/add-courses', { error: null, success: null });
});

// 🟢 Add New Course (POST)
router.post('/add', async (req, res) => {
  const {
    imageUrl = '',
    title = '',
    shortDescription = '',
    longDesciption = '',
    adminPassword = ''
  } = req.body;

  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ success: false, message: 'Invalid admin password' });
  }

  if (!imageUrl || !title || !shortDescription || !longDesciption) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    const newCourse = new Course({ imageUrl, title, shortDescription, longDesciption });
    await newCourse.save();

    return res.status(201).json({ success: true, message: 'Course added successfully!' });
  } catch (error) {
    console.error('❌ Error while saving course:', error);
    return res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

router.get('/edit/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    res.json({ success: true, course });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// 🟢 Edit Course (POST)
router.post('/edit/:id', async (req, res) => {
  const {
    imageUrl = '',
    title = '',
    shortDescription = '',
    longDesciption = '',
    adminPassword = ''
  } = req.body;

  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ success: false, message: 'Invalid admin password' });
  }

  if (!imageUrl || !title || !shortDescription || !longDesciption) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, {
      imageUrl,
      title,
      shortDescription,
      longDesciption
    });

    if (!updated) return res.status(404).json({ success: false, message: 'Course not found' });

    return res.status(200).json({ success: true, message: 'Course updated successfully' });
  } catch (error) {
    console.error('❌ Error while updating course:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;
