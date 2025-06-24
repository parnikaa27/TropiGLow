import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
      
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-[#3B1F0B] via-[#4E2A11] to-[#3B1F0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            We'd love to hear from you. Whether you're planning a project or seeking a tailored solution, reach out today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 shadow-xl border-2 border-amber-800">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-amber-700 to-yellow-800 p-3 rounded-lg shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Address</h4>
                    <p className="text-amber-800">
                      Building: R.G. Tower – Ground and First Floor<br />
                      Region: Henveiru<br />
                      Road: Hithah Finivaa Magu <br />
                      Postal code: 20084 <br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-amber-700 to-yellow-800 p-3 rounded-lg shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Phone</h4>
                    <p className="text-amber-800">+960 9310373</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-amber-700 to-yellow-800 p-3 rounded-lg shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Email</h4>
                    <p className="text-amber-800">sales.cenpro@opromaldives.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-amber-700 to-yellow-800 p-3 rounded-lg shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Business Hours</h4>
                    <p className="text-amber-800">
                      Mon - Sat: 9:00 AM – 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded google maps link */}
              <div className="rounded-xl overflow-hidden shadow-lg h-64">
                <iframe
                  title="Our Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.2205522889108!2d73.5085354371111!3d4.176999788657691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7f9fdd0a44d3%3A0xeec0f140cf88d903!2sO%20Shop!5e0!3m2!1sen!2sin!4v1750168802837!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 shadow-xl border-2 border-amber-800">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Send us a Message</h3>
            
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-amber-900 mb-2">Message Sent Successfully!</h4>
                <p className="text-amber-800">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'error' && (
                  <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <p className="text-red-800 text-sm">{errorMessage}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-amber-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border-2 border-amber-800 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200 disabled:bg-amber-100 disabled:cursor-not-allowed bg-white"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-amber-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border-2 border-amber-800 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200 disabled:bg-amber-100 disabled:cursor-not-allowed bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-amber-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border-2 border-amber-800 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200 disabled:bg-amber-100 disabled:cursor-not-allowed bg-white"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-amber-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border-2 border-amber-800 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200 resize-none disabled:bg-amber-100 disabled:cursor-not-allowed bg-white"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-700 to-yellow-800 hover:from-amber-800 hover:to-yellow-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;