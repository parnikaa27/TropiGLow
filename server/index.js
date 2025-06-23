import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/coatmaster-pro';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
  });

// Contact Form Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['new', 'read', 'responded'],
    default: 'new'
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'CoatMaster Pro API is running',
    timestamp: new Date().toISOString()
  });
});

// Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Create new contact entry
    const newContact = new Contact({
      name,
      email,
      phone: phone || '',
      message
    });

    const savedContact = await newContact.save();

    console.log('📧 New contact form submission:', {
      id: savedContact._id,
      name: savedContact.name,
      email: savedContact.email,
      submittedAt: savedContact.submittedAt
    });

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: savedContact._id,
        submittedAt: savedContact.submittedAt
      }
    });

  } catch (error) {
    console.error('❌ Error saving contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.'
    });
  }
});

// Get all contact submissions (for admin use)
app.get('/api/contacts', async (req, res) => {
  try {
    const { status, limit = 50, page = 1 } = req.query;
    
    const filter = status ? { status } : {};
    const skip = (page - 1) * limit;

    const contacts = await Contact.find(filter)
      .sort({ submittedAt: -1 })
      .limit(parseInt(limit))
      .skip(skip);

    const total = await Contact.countDocuments(filter);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('❌ Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contact submissions'
    });
  }
});

// Update contact status
app.patch('/api/contacts/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['new', 'read', 'responded'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be: new, read, or responded'
      });
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact status updated successfully',
      data: updatedContact
    });

  } catch (error) {
    console.error('❌ Error updating contact status:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating contact status'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});