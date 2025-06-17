
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-orange-400">Veridian</span>
              <span className="text-2xl font-bold text-green-400 ml-1">Foods</span>
            </div>
            <p className="text-gray-300 mb-4">
              Crafting Tomorrow's Flavours. Today. A world-class food processing facility, 
              rooted in tradition and driven by innovation.
            </p>
            <p className="text-sm text-orange-400 font-semibold">Rich. Ready. Reliable.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/our-story" className="text-gray-300 hover:text-orange-400 transition-colors">Our Story</Link></li>
              <li><Link to="/plant" className="text-gray-300 hover:text-orange-400 transition-colors">Plant & Manufacturing</Link></li>
              <li><Link to="/quality" className="text-gray-300 hover:text-orange-400 transition-colors">Quality</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-orange-400 transition-colors">Products</Link></li>
              <li><Link to="/partner" className="text-gray-300 hover:text-orange-400 transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Gujarat, India</p>
              <p>info@veridianfoods.com</p>
              <p>+91-XXXXXXXXXX</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Explore our hospitality legacy at{' '}
                <a href="#" className="text-orange-400 hover:text-orange-300">JanpathHotel.in</a>
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Get project updates & launch offers</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md text-gray-900 flex-1 min-w-64"
                />
                <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400">Follow us on social media</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Veridian Foods. All rights reserved. Part of Janpath Group of Hotels.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
