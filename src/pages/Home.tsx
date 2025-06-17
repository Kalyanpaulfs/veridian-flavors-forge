
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-green-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
              Crafting Tomorrow's <span className="text-orange-600">Flavours</span>.{' '}
              <span className="text-green-700">Today</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in">
              A world-class food processing facility, rooted in tradition and driven by innovation.
            </p>
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-8 animate-fade-in">
              Rich. Ready. Reliable.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link
                to="/partner"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Partner With Us
              </Link>
              <Link
                to="/our-story"
                className="bg-transparent border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Follow Our Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Legacy Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Legacy of Trust</h3>
              <p className="text-gray-700 mb-6">
                From a roadside eatry in Mehsana to 120+ hotel rooms under the Janpath Group — 
                our journey spans 50+ years of heartfelt hospitality. Veridian Foods carries 
                that legacy into a new era of food excellence.
              </p>
              <Link
                to="/our-story"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
              >
                Explore Our Story <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Flavours Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🍛</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Authentic Indian Flavours</h3>
              <p className="text-gray-700 mb-6">
                Gravies, sauces, pickles, spreads, pastes — all crafted with traditional recipes, 
                high-quality ingredients, and future-ready technology. Perfect for global kitchens 
                and modern convenience.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                See Product Categories <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Global Quality Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Quality. Local Soul.</h3>
              <p className="text-gray-700 mb-6">
                Designed for export and domestic supply, our upcoming facility will meet FSSAI, 
                ISO, and HACCP standards — delivering consistent, scalable, and safe products to 
                QSRs, food manufacturers, and retail brands worldwide.
              </p>
              <Link
                to="/partner"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Why Partner With Us <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Years of Heritage</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">120+</div>
              <div className="text-lg">Hotel Rooms</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-lg">Sq. Ft. Facility</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">Q2 2025</div>
              <div className="text-lg">Expected Launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Food Business?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join us in bringing authentic Indian flavours to kitchens worldwide. 
            Let's build something delicious together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/partner"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Partnership
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
