import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
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
    emailConfigured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS),
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

    // Check if email is configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('📧 Email not configured - Contact form submission received:');
      console.log({
        name,
        email,
        phone: phone || 'Not provided',
        message,
        timestamp: new Date().toISOString()
      });

      return res.status(200).json({
        success: true,
        message: 'Contact form submitted successfully (Demo mode - email not configured)',
        note: 'To enable email functionality, configure EMAIL_USER and EMAIL_PASS environment variables'
      });
    }

    try {
      const transporter = createTransporter();
      
      // Email to company
      const companyMailOptions = {
        from: process.env.EMAIL_USER,
        to: 'parnikabhatia27@gmail.com', 
        subject: `TropiGlow Enquiry from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
              <h2 style="margin: 0;">TropiGlow Enquiry</h2>
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
                <p>If you have any urgent enquiries, please feel free to call us at <strong>+960 9310373</strong>.</p>
                <p>Best regards,<br>TropiGlow Team</p>
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

      console.log('📧 Contact form emails sent successfully to sales.cenpro@opromaldives.com');
      console.log('📧 Auto-reply sent to customer:', email);

      res.status(200).json({
        success: true,
        message: 'Message sent successfully! We will get back to you within 24 hours.',
        timestamp: new Date().toISOString()
      });

    } catch (emailError) {
      console.error('❌ Error sending emails:', emailError.message);
      
      res.status(500).json({
        success: false,
        message: 'Failed to send email. Please try again or contact us directly at +960 9310373.'
      });
    }

  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.'
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
  console.log(`📧 Email configured: ${!!(process.env.EMAIL_USER && process.env.EMAIL_PASS)}`);
  
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('');
    console.log('📧 To enable email functionality:');
    console.log('   1. Add EMAIL_USER=your-email@gmail.com to .env file');
    console.log('   2. Add EMAIL_PASS=your-app-password to .env file');
    console.log('   3. Restart the server');
    console.log('');
    console.log('📝 For Gmail, use App Password instead of regular password');
    console.log('   Generate at: https://myaccount.google.com/apppasswords');
  }
});