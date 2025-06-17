
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">📬 Contact Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We'd Love to Hear From You
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Let's Start a Conversation</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Whether you're an international buyer, a local food entrepreneur, or a potential partner — 
              Veridian Foods welcomes all inquiries. Let's discuss how we can collaborate to bring 
              quality Indian food solutions to your table.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📇 Get in Touch</h2>
            <p className="text-xl text-gray-700">Multiple ways to reach us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Registered Office</h3>
              <p className="text-gray-700 text-sm">
                Janpath Group of Hotels<br />
                Mehsana, Gujarat, India<br />
                PIN Code: [PIN]
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing Facility</h3>
              <p className="text-gray-700 text-sm">
                [Site Location]<br />
                Gujarat, India<br />
                Expected Commissioning: Q2 2025
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-700 text-sm">
                General: info@veridianfoods.com<br />
                Sales: sales@veridianfoods.com<br />
                Careers: careers@veridianfoods.com
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
              <p className="text-gray-700 text-sm">
                Office: +91-XXXXXXXXXX<br />
                WhatsApp: +91-XXXXXXXXXX<br />
                Available: 9 AM - 6 PM IST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📋 Let's Connect</h2>
            <p className="text-xl text-gray-700">Send us a message and we'll get back to you soon</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                Type of Inquiry
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Select inquiry type</option>
                <option value="bulk-orders">Bulk Orders</option>
                <option value="private-label">Private Label</option>
                <option value="distribution">Distribution</option>
                <option value="media">Media</option>
                <option value="careers">Careers</option>
                <option value="general">General Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Please share your message, questions, or requirements..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start the Conversation
              </button>
              <p className="text-sm text-gray-600 mt-4">
                ✅ All inquiries will receive a response within 2 business days.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Map and Location */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📍 Find Us</h2>
            <p className="text-xl text-gray-700">Located in the heart of Gujarat's industrial corridor</p>
          </div>

          <div className="bg-gray-200 rounded-xl p-16 text-center">
            <div className="text-8xl mb-6">🗺️</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Interactive Map</h3>
            <p className="text-gray-600">
              Google Maps integration showing our office location and upcoming manufacturing facility
            </p>
          </div>
        </div>
      </section>

      {/* Social Media and Additional Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Social Media */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">📱 Follow Our Journey</h3>
              <p className="text-lg text-gray-700 mb-8">
                Stay updated with our latest developments, behind-the-scenes content, and industry insights
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                  Instagram
                </a>
                <a href="#" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  YouTube
                </a>
              </div>
            </div>

            {/* Legacy Connection */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">🏨 Our Heritage</h3>
              <p className="text-lg text-gray-700 mb-8">
                Discover our 50+ year legacy in hospitality that forms the foundation of Veridian Foods
              </p>
              <a 
                href="#" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 inline-block"
              >
                Visit JanpathHotel.in
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <span className="text-2xl">💬</span>
        </a>
      </div>

      {/* Office Hours */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">🕒 Office Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <p className="text-lg">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
              <p className="text-lg">Saturday: 9:00 AM - 1:00 PM IST</p>
              <p className="text-lg">Sunday: Closed</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Response Time</h3>
              <p className="text-lg">Email: Within 24 hours</p>
              <p className="text-lg">Phone: Immediate during business hours</p>
              <p className="text-lg">WhatsApp: Within 2 hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
