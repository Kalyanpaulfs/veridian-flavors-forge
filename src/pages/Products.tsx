
import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      icon: '🍛',
      title: 'Gravies',
      description: 'Traditional Indian base gravies for curries — including onion-tomato, makhani, korma, white and yellow gravy variants. Heat & use, or customize with your own ingredients.',
      features: ['Heat & Serve', 'Customizable', 'Traditional Recipes']
    },
    {
      icon: '🫙',
      title: 'Sauces',
      description: 'Tomato ketchup, schezwan, peri peri, pizza-pasta sauces, and Indo-fusion variants. Tailored for QSRs, cafes, and private labels.',
      features: ['QSR Ready', 'Multiple Variants', 'Private Label']
    },
    {
      icon: '🥒',
      title: 'Pickles',
      description: 'Regional pickle recipes (mango, mixed veg, garlic, chili) with export-compliant packaging and preservation. Traditional taste. Modern packaging.',
      features: ['Export Ready', 'Regional Varieties', 'Long Shelf Life']
    },
    {
      icon: '🌶️',
      title: 'Pastes',
      description: 'Ginger-garlic, tamarind, chili, onion paste — designed for production kitchens and bulk cooking. Reduces prep time with zero compromise on flavour.',
      features: ['Time Saving', 'Bulk Cooking', 'Consistent Quality']
    },
    {
      icon: '🍯',
      title: 'Spreads & Chutneys',
      description: 'Mint chutney, imli chutney, garlic dips, mayo-based and desi spreads. Ready to serve, with consistent taste and shelf stability.',
      features: ['Ready to Serve', 'Shelf Stable', 'Diverse Range']
    }
  ];

  const benefits = [
    { icon: '📅', title: 'Long Shelf Life', description: 'Extended storage without preservatives' },
    { icon: '🔧', title: 'Customizable', description: 'Tailored to your specific requirements' },
    { icon: '🔥', title: 'Heat & Serve', description: 'Quick preparation for busy kitchens' },
    { icon: '🌍', title: 'Export Ready', description: 'International quality standards' },
    { icon: '📦', title: 'Bulk Packaging', description: 'Cost-effective solutions for large operations' },
    { icon: '🏷️', title: 'Private Label', description: 'Custom branding opportunities' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">🧂 Products</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Curated Culinary Essentials, Engineered for Scale
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Authentic Flavours, Modern Solutions</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Veridian Foods will offer a well-researched and tested range of food products, tailored for 
              foodservice, institutional, and retail segments. Every product is developed to preserve 
              authentic Indian taste, offer long shelf life, and ensure ease of use in commercial kitchens 
              and food production units.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🧊 Our Core Product Categories</h2>
            <p className="text-xl text-gray-700">Five essential categories for modern food operations</p>
          </div>

          <div className="space-y-12">
            {products.map((product, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <span className="text-6xl mr-4">{product.icon}</span>
                    <h3 className="text-3xl font-bold text-gray-900">{product.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-orange-100 to-green-100 rounded-xl p-12 text-center">
                    <div className="text-8xl mb-4">{product.icon}</div>
                    <p className="text-gray-600 text-lg">Product showcase and packaging examples</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Veridian Products?</h2>
            <p className="text-xl text-gray-700">Built for the demands of modern food operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-orange-500"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Products */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Coming Soon</h2>
            <p className="text-xl text-gray-700">Expanding our product line to serve more needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-4">🍱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready Meals</h3>
              <p className="text-gray-700">Complete meal solutions for quick service</p>
              <span className="inline-block mt-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                In Development
              </span>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-4">🥜</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Retail Pouch Range</h3>
              <p className="text-gray-700">Consumer-friendly packaging for retail markets</p>
              <span className="inline-block mt-4 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                Planning Phase
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📦 Packaging Solutions</h2>
            <p className="text-xl text-gray-700">Flexible packaging options for different business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { type: 'Bulk Containers', size: '5-20 KG', use: 'Large kitchens & QSRs' },
              { type: 'Pouch Packs', size: '200g-1kg', use: 'Retail & small operations' },
              { type: 'Glass Jars', size: '250g-500g', use: 'Premium retail segment' },
              { type: 'Private Label', size: 'Custom', use: 'Brand partnerships' }
            ].map((option, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{option.type}</h3>
                <p className="text-sm text-gray-600 mb-2">{option.size}</p>
                <p className="text-sm text-gray-700">{option.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Download Catalog */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-6">📥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Download Product Catalogue</h3>
              <p className="text-gray-700 mb-6">
                Get detailed specifications, pricing, and availability information
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
                Download PDF Catalog
              </button>
            </div>

            {/* Custom Inquiries */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-6">📞</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bulk & Custom Inquiries</h3>
              <p className="text-gray-700 mb-6">
                Whether you're a restaurant chain, catering company, or FMCG brand, we offer 
                private labeling, foodservice packs, and custom formulations.
              </p>
              <Link
                to="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 inline-block"
              >
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Menu?</h2>
          <p className="text-xl mb-8">
            Discover how Veridian Foods can elevate your culinary offerings with authentic, 
            reliable, and scalable food solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/partner"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Become a Partner
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Request Samples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
