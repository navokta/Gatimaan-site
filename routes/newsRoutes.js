// ./routes/newsRoutes.js (ES Module)

import express from 'express';
import dotenv from 'dotenv';
import News from '../models/News.js';

dotenv.config();

const router = express.Router();

// Middleware to set currentPath
router.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

// GET route to view news by category
router.get('/news/:category', async (req, res) => {
  try {
    const category = req.params.category;

    const allowedCategories = [
      'All',
      'Admission',
      'Result',
      'Admit Card',
      'Technology',
      'Sports',
      'Politics',
      'Education'
    ];

    if (!allowedCategories.includes(category)) {
      return res.redirect('/news');
    }

    const query = category === 'All' ? {} : { category };
    const newsList = await News.find(query).sort({ createdAt: -1 });

    res.render('news', {
      category,
      newsList,
      currentPath: req.path
    });
  } catch (err) {
    console.error(`Error fetching news for category "${req.params.category}":`, err);
    res.status(500).send('Server Error');
  }
});

// GET route to show add-news form
router.get('/add-news', (req, res) => {
  try {
    res.render('add-news', {
      currentPath: req.path
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// POST route to submit form data
router.post('/add-news', async (req, res) => {
  const { title, description, newsTitle, newsLink, category, adminpassword } = req.body;

  if (adminpassword !== process.env.ADMIN_PASSWORD) {
    return res.render('add-news', {
      error: 'Invalid admin password',
      body: req.body
    });
  }

  try {
    const newNews = new News({
      title,
      description,
      newsTitle,
      newsLink,
      category
    });

    await newNews.save();

    res.redirect(`/news/${category}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/api/news', async (req, res) => {
  try {
    const newsList = await News.find().sort({ createdAt: -1 });
    res.json(newsList);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
