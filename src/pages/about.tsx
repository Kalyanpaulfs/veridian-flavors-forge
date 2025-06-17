
import React from 'react';
import { Link } from 'react-router-dom';

const OurStory = () => {
  const values = [
    { letter: 'V', word: 'Value-Driven', description: 'We put people, quality, and purpose before profit.' },
    { letter: 'E', word: 'Excellence', description: 'Precision in process, pride in product.' },
    { letter: 'R', word: 'Reliability', description: 'Consistency that kitchens can trust, every time.' },
    { letter: 'I', word: 'Integrity', description: 'Ethical sourcing, honest labeling, and transparent operations.' },
    { letter: 'D', word: 'Diligence', description: 'Every batch is crafted with care and attention to detail.' },
    { letter: 'I', word: 'Innovation', description: 'Tradition meets technology to meet evolving needs.' },
    { letter: 'A', word: 'Accountability', description: 'We own our actions and stand by our commitments.' },
    { letter: 'N', word: 'Nurture', description: 'We nurture relationships — with our team, partners, and the planet.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A legacy rooted in hospitality, growing into a future of food innovation
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🏨 Legacy Rooted in Hospitality</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold mb-2">1970s - Roadside Eatery</h3>
              <p className="text-gray-700">Humble beginnings serving authentic flavours in Mehsana</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-6xl mb-4">🏨</div>
              <h3 className="text-xl font-bold mb-2">Growth - Hotel Empire</h3>
              <p className="text-gray-700">Expanding to 120+ rooms under Janpath Group</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-2">2024 - Food Factory</h3>
              <p className="text-gray-700">Launching Veridian Foods with modern processing</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6">
              For over five decades, the Janpath Group of Hotels, Mehsana has been a trusted name in 
              Mehsana, Gujarat — known for heartfelt service, authentic cuisine, and dependable hospitality. 
              From humble beginnings as a roadside eatry to a 120+ room hotel group, we have always 
              believed that great food is at the heart of great experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Why Food Processing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              🧭 Why Food Processing? Why Now?
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                India's rich culinary heritage deserves global recognition — not just through restaurants, 
                but in ready-to-use, export-friendly formats that retain the authenticity of Indian flavours. 
                With increasing demand from QSRs, cloud kitchens, retail chains, and international food 
                manufacturers, the next generation of the Janpath Group is stepping forward to answer that call.
              </p>
              
              <p>
                Veridian Foods is a natural extension of our legacy — a state-of-the-art food processing 
                company, built to deliver consistent, clean-label, and scalable food solutions without 
                compromising taste.
              </p>
              
              <p>
                Backed by decades of operational experience in food service, we understand what kitchens 
                need — reliability, ready-to-use formats, and above all, rich and rooted flavour.
              </p>
              
              <p>
                Our facility, currently under development in Gujarat, will house advanced machinery, 
                strict hygiene protocols, and production lines tailored for gravies, sauces, pastes, 
                pickles, and more — all aligned with FSSAI, ISO, and export quality standards.
              </p>
              
              <p className="font-semibold text-orange-600">
                We're not just producing food. We're preserving tradition and preparing for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders' Message */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-green-50 p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">✉️ Founders' Message</h2>
            <blockquote className="text-xl text-gray-700 italic text-center max-w-4xl mx-auto leading-relaxed">
              "Veridian Foods is more than a business venture — it's a dream shared across generations. 
              From stirring pots in our kitchen to drawing floor plans of a modern processing plant, 
              we've come a long way — with love for food as our constant ingredient. We're building 
              Veridian with the same care, consistency, and commitment that built Janpath. The journey 
              ahead is exciting, and we invite you to be a part of it."
            </blockquote>
            <div className="text-center mt-8">
              <p className="font-semibold text-gray-800">— The Founding Brothers</p>
              <p className="text-gray-600">Janpath Group | Veridian Foods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">🎯 Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To deliver the essence of Indian culinary heritage through scalable, safe, and 
                convenient food products for modern kitchens worldwide.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-4">🌟 Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To become a globally trusted name in Indian food solutions — blending tradition, 
                technology, and transparency to serve every table from homes to hotels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VERIDIAN Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">💠 Core Values – The VERIDIAN Way</h2>
            <p className="text-xl text-gray-700">
              Each letter of VERIDIAN reflects a pillar that guides our daily actions and long-term decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-orange-500"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">{value.letter}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.word}</h3>
                  <p className="text-gray-700 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8">
            Be part of our story as we transform Indian food heritage into global opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/partner"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Partner With Us
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
