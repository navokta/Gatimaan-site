import express from 'express';
import News from '../models/News.js';

const router = express.Router();

// @route   POST /admin/add-news
// @desc    Add a new news item (admin only)
// @access  Private (admin password required)
router.post('/add-news', async (req, res) => {
  const { title, description, newsTitle, newsLink, category, adminpassword } = req.body;

  // Validate admin password
  if (adminpassword !== process.env.ADMIN_PASSWORD) {
    return res.status(403).json({ success: false, message: 'Invalid admin password' });
  }

  // Validate required fields
  if (!title || !description || !newsTitle || !newsLink || !category) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    const newNews = new News({
      title,
      description,
      newsTitle,
      newsLink,
      category,
    });

    await newNews.save();
    return res.status(201).json({ success: true, message: '✅ News added successfully' });
  } catch (error) {
    console.error('❌ Error saving news:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.get('/api/news', async (req, res) => {
  try {
    const newsList = await News.find().sort({ createdAt: -1 });
    res.json(newsList);
  } catch (err) {
    console.error("Error fetching news:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
