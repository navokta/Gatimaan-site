import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';

// Route files
import newsAdminRoutes from '../routes/newsAdminRoutes.js';
import courseRoutes from '../routes/courseRoutes.js';
import adminRoutes from '../routes/adminRoutes.js';
import newsRoutes from '../routes/newsRoutes.js';

// Models
import News from '../models/News.js';
import Course from '../models/courses.model.js';

dotenv.config();

const app = express();

// Resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// View engine setup (for EJS-based pages, optional if React only)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/courses', courseRoutes);        // API for course listing
app.use('/admin', adminRoutes);           // Admin course actions (React)
app.use('/admin', newsAdminRoutes);       // Admin news actions (React)
app.use('/', newsRoutes);             // News API (React)



// Start server
app.listen(5000, () => {
  console.log('✅ Server running at http://localhost:5000');
});

export default app;
