
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Partner = () => {
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
    console.log('Partnership inquiry submitted:', formData);
    // Handle form submission here
  };

  const partners = [
    {
      icon: '🍽️',
      title: 'QSRs & Restaurant Chains',
      description: 'Consistent quality, ready-to-cook formats, and customized packaging.',
      benefits: ['Consistent Quality', 'Ready-to-Cook', 'Custom Packaging']
    },
    {
      icon: '🌍',
      title: 'Distributors & Exporters',
      description: 'Export-compliant, bulk-ready SKUs with necessary clearances.',
      benefits: ['Export Compliant', 'Bulk Ready', 'Global Standards']
    },
    {
      icon: '🏪',
      title: 'Retail & D2C Brands',
      description: 'White-label and private-label opportunities for local and international markets.',
      benefits: ['White Label', 'Private Label', 'Market Ready']
    },
    {
      icon: '🏭',
      title: 'Food Manufacturers & Meal Kit Brands',
      description: 'OEM support for sauces, gravies, and functional ingredients.',
      benefits: ['OEM Support', 'Functional Ingredients', 'Scalable Solutions']
    }
  ];

  const offerings = [
    { icon: '🎨', title: 'Product customization', description: 'Tailored formulations to meet your specific requirements' },
    { icon: '⚖️', title: 'Batch flexibility', description: 'From small batches to large-scale production runs' },
    { icon: '🏷️', title: 'Private label design & packaging', description: 'Complete branding and packaging solutions' },
    { icon: '🔬', title: 'R&D support for new food formats', description: 'Innovation support for new product development' },
    { icon: '💰', title: 'Transparent pricing and logistics', description: 'Clear, competitive pricing with reliable delivery' },
    { icon: '🤝', title: 'Long-term supply reliability', description: 'Consistent supply chain partnerships' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">🤝 Partner With Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Let's Build Something Delicious Together
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Building Partnerships Built on Trust</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              At Veridian Foods, we believe the best partnerships are built on trust, transparency, and 
              shared growth. Whether you're a foodservice brand, global distributor, QSR chain, or an 
              FMCG startup — we are open to collaborations that take great Indian food to every corner 
              of the world.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🤔 Who We Work With</h2>
            <p className="text-xl text-gray-700">Partnering with diverse businesses across the food industry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <span className="text-5xl mr-4">{partner.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{partner.title}</h3>
                </div>
                <p className="text-gray-700 mb-6 text-lg">{partner.description}</p>
                <div className="flex flex-wrap gap-2">
                  {partner.benefits.map((benefit, idx) => (
                    <span 
                      key={idx}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">💼 What We Offer</h2>
            <p className="text-xl text-gray-700">Comprehensive solutions for your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-orange-50 to-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{offering.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                <p className="text-gray-700">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🏆 Built on 50+ Years of Trust</h2>
            <p className="text-xl text-gray-700">Leveraging decades of hospitality experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">🏨</div>
              <h3 className="text-2xl font-bold text-orange-600 mb-2">50+</h3>
              <p className="text-gray-700">Years in Hospitality</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">120+</h3>
              <p className="text-gray-700">Hotel Rooms Managed</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">1000+</h3>
              <p className="text-gray-700">Guests Served Daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📨 Start Your Partnership Journey</h2>
            <p className="text-xl text-gray-700">Tell us about your business and how we can work together</p>
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
                Type of Partnership
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Select partnership type</option>
                <option value="bulk-orders">Bulk Orders</option>
                <option value="private-label">Private Label</option>
                <option value="distribution">Distribution</option>
                <option value="oem">OEM Manufacturing</option>
                <option value="export">Export Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about your requirements *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Please describe your business, requirements, and how you'd like to partner with us..."
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

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-700">sales@veridianfoods.com</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-700">+91-XXXXXXXXXX</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700">Gujarat, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Food Together?</h2>
          <p className="text-xl mb-8">
            Join us in bringing authentic Indian flavours to kitchens worldwide. 
            Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Schedule a Call
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
