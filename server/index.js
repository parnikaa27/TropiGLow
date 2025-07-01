import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection with better error handling
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/coatmaster-pro';

let isMongoConnected = false;
let Contact = null;

// Try to connect to MongoDB
mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  socketTimeoutMS: 45000,
})
  .then(() => {
    console.log('✅ Connected to MongoDB successfully');
    isMongoConnected = true;
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error.message);
    console.log('📝 Note: MongoDB is not available. Contact form will work in demo mode.');
    console.log('📝 To use a real database, please:');
    console.log('   1. Set up MongoDB Atlas (https://www.mongodb.com/atlas)');
    console.log('   2. Update MONGODB_URI in your .env file');
    console.log('   3. Or install MongoDB locally if running outside WebContainer');
    isMongoConnected = false;
  });

// Contact Form Schema (only create if MongoDB is connected)
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

// Only create the model if MongoDB is connected
mongoose.connection.on('connected', () => {
  Contact = mongoose.model('Contact', contactSchema);
  console.log('📄 Contact model created successfully');
});

// In-memory storage for demo mode (when MongoDB is not available)
let demoContacts = [];

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password'
    }
  });
};

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'TropiGlow API is running',
    database: isMongoConnected ? 'Connected' : 'Demo Mode (No Database)',
    timestamp: new Date().toISOString()
  });
});

// Submit contact form with email functionality
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

    let savedContact;

    if (isMongoConnected && Contact) {
      // Save to MongoDB
      const newContact = new Contact({
        name,
        email,
        phone: phone || '',
        message
      });
      savedContact = await newContact.save();
    } else {
      // Save to demo storage
      savedContact = {
        _id: Date.now().toString(),
        name,
        email,
        phone: phone || '',
        message,
        submittedAt: new Date(),
        status: 'new'
      };
      demoContacts.push(savedContact);
      console.log('📝 Contact saved to demo storage (MongoDB not available)');
    }

    // Send email notification (if configured)
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = createTransporter();
        
        // Email to company
        const companyMailOptions = {
          from: process.env.EMAIL_USER,
          to: 'sales.cenpro@opromaldives.com',
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
                <h2 style="margin: 0;">New Contact Form Submission</h2>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">TropiGlow Website</p>
              </div>
              <div style="background: #f8fafc; padding: 20px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
                <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                  <h3 style="color: #1e40af; margin-top: 0;">Contact Details</h3>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                  <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                </div>
                <div style="background: white; padding: 20px; border-radius: 8px;">
                  <h3 style="color: #1e40af; margin-top: 0;">Message</h3>
                  <p style="line-height: 1.6; color: #374151;">${message}</p>
                </div>
              </div>
            </div>
          `
        };

        // Auto-reply email to customer
        const customerMailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Thank you for contacting TropiGlow',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
                <h2 style="margin: 0;">Thank You for Contacting TropiGlow</h2>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Premium Paint & Coatings</p>
              </div>
              <div style="background: #f8fafc; padding: 20px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
                <div style="background: white; padding: 20px; border-radius: 8px;">
                  <p>Dear ${name},</p>
                  <p>Thank you for reaching out to TropiGlow. We have received your message and will get back to you within 24 hours.</p>
                  <p><strong>Your message:</strong></p>
                  <div style="background: #f1f5f9; padding: 15px; border-radius: 5px; margin: 10px 0;">
                    <p style="margin: 0; color: #374151;">${message}</p>
                  </div>
                  <p>If you have any urgent inquiries, please feel free to call us at <strong>+960 9310373</strong>.</p>
                  <p>Best regards,<br>The TropiGlow Team</p>
                </div>
                <div style="text-align: center; margin-top: 20px; padding: 15px; background: white; border-radius: 8px;">
                  <p style="margin: 0; color: #6b7280; font-size: 14px;">
                    TropiGlow - Premium Paint & Coatings<br>
                    R.G. Tower, Henveiru, Hithah Finivaa Magu<br>
                    Phone: +960 9310373 | Email: sales.cenpro@opromaldives.com
                  </p>
                </div>
              </div>
            </div>
          `
        };

        // Send both emails
        await Promise.all([
          transporter.sendMail(companyMailOptions),
          transporter.sendMail(customerMailOptions)
        ]);

        console.log('📧 Emails sent successfully');
      } else {
        console.log('📧 Email not configured (EMAIL_USER and EMAIL_PASS not set)');
      }
    } catch (emailError) {
      console.error('❌ Error sending emails:', emailError.message);
      // Don't fail the request if email fails, just log it
    }

    console.log('📧 New contact form submission:', {
      id: savedContact._id,
      name: savedContact.name,
      email: savedContact.email,
      submittedAt: savedContact.submittedAt,
      storage: isMongoConnected ? 'MongoDB' : 'Demo Mode'
    });

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: savedContact._id,
        submittedAt: savedContact.submittedAt
      },
      note: isMongoConnected ? undefined : 'Running in demo mode - data not persisted'
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
    
    let contacts, total;

    if (isMongoConnected && Contact) {
      // Get from MongoDB
      const filter = status ? { status } : {};
      const skip = (page - 1) * limit;

      contacts = await Contact.find(filter)
        .sort({ submittedAt: -1 })
        .limit(parseInt(limit))
        .skip(skip);

      total = await Contact.countDocuments(filter);
    } else {
      // Get from demo storage
      let filteredContacts = status 
        ? demoContacts.filter(contact => contact.status === status)
        : demoContacts;
      
      total = filteredContacts.length;
      const skip = (page - 1) * limit;
      contacts = filteredContacts
        .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
        .slice(skip, skip + parseInt(limit));
    }

    res.json({
      success: true,
      data: contacts,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / limit)
      },
      note: isMongoConnected ? undefined : 'Running in demo mode - showing demo data'
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

    let updatedContact;

    if (isMongoConnected && Contact) {
      // Update in MongoDB
      updatedContact = await Contact.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
    } else {
      // Update in demo storage
      const contactIndex = demoContacts.findIndex(contact => contact._id === id);
      if (contactIndex !== -1) {
        demoContacts[contactIndex].status = status;
        updatedContact = demoContacts[contactIndex];
      }
    }

    if (!updatedContact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact status updated successfully',
      data: updatedContact,
      note: isMongoConnected ? undefined : 'Updated in demo mode - changes not persisted'
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
  console.log(`💾 Database: ${isMongoConnected ? 'MongoDB Connected' : 'Demo Mode (No Database)'}`);
  
  if (!isMongoConnected) {
    console.log('');
    console.log('📝 To connect to a real database:');
    console.log('   1. Set up MongoDB Atlas: https://www.mongodb.com/atlas');
    console.log('   2. Update MONGODB_URI in your .env file');
    console.log('   3. Restart the server');
  }
});