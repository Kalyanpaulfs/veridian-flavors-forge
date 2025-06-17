
import React from 'react';
import { Link } from 'react-router-dom';

const Plant = () => {
  const features = [
    { icon: '📍', title: 'Location', description: 'Gujarat, India (well-connected to key logistics hubs)' },
    { icon: '📅', title: 'Expected Commissioning', description: 'Q2 2025' },
    { icon: '⚙️', title: 'Processing Lines', description: 'For gravies, sauces, pickles, spreads, and more' },
    { icon: '🔧', title: 'Technology', description: 'Semi-automated and scalable production' },
    { icon: '📦', title: 'Packaging Options', description: 'Bulk, pouch, jar, and private-label ready' },
    { icon: '📊', title: 'Capacity', description: 'Designed for phase-wise expansion' },
    { icon: '💧', title: 'Utilities', description: 'RO water, solar-ready, advanced effluent treatment system' },
    { icon: '✅', title: 'Compliances Planned', description: 'BRC, FSSAI, ISO 22000, HACCP, FDA (for exports)' },
  ];

  const phases = [
    { phase: 'Phase 1', title: 'Civil Construction', status: 'In Progress', color: 'bg-blue-500' },
    { phase: 'Phase 2', title: 'Machinery Installation', status: 'Upcoming', color: 'bg-yellow-500' },
    { phase: 'Phase 3', title: 'Trial Production', status: 'Q1 2025', color: 'bg-orange-500' },
    { phase: 'Phase 4', title: 'Commercial Production', status: 'Q2 2025', color: 'bg-green-500' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">🏭 Plant & Manufacturing</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A facility that brings vision to life - where tradition meets technology
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">A Facility That Brings Vision to Life</h2>
            <div className="prose prose-lg">
              <p className="text-gray-700 text-lg leading-relaxed">
                Currently under construction in Gujarat, the Veridian Foods manufacturing plant is being 
                built to deliver consistent, export-ready Indian food solutions at scale. Spread over 
                <span className="font-bold text-orange-600"> 1,00,000+ sq. ft.</span>, our facility is being 
                developed with automation, hygiene, and compliance as its foundation.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                Our infrastructure is aligned with global standards — capable of handling multiple SKUs in 
                sauces, gravies, pastes, pickles, and spreads. Once commissioned, the plant will be equipped 
                to meet the needs of QSRs, food manufacturers, cloud kitchens, private labels, and international buyers.
              </p>
            </div>
          </div>

          {/* Plant Visualization */}
          <div className="bg-gray-100 rounded-2xl p-12 mb-16 text-center">
            <div className="text-8xl mb-6">🏗️</div>
            <div className="bg-orange-600 text-white px-6 py-3 rounded-full inline-block font-bold text-lg">
              UNDER DEVELOPMENT
            </div>
            <p className="text-gray-600 mt-4 text-lg">3D renders and construction photos will be updated here</p>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🔧 Key Features</h2>
            <p className="text-xl text-gray-700">State-of-the-art infrastructure designed for global standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📅 Development Timeline</h2>
            <p className="text-xl text-gray-700">From foundation to full production</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <div key={index} className="text-center">
                <div className={`w-4 h-4 ${phase.color} rounded-full mx-auto mb-4`}></div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.phase}</h3>
                  <p className="text-gray-700 font-semibold mb-2">{phase.title}</p>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {phase.status}
                  </span>
                </div>
                {index < phases.length - 1 && (
                  <div className="hidden md:block w-full h-1 bg-gray-300 mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Logistics */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">📍 Strategic Location</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Our Gujarat facility is strategically positioned to serve both domestic and international markets:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Close proximity to major ports for export convenience
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Well-connected road and rail networks
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Access to skilled workforce and raw materials
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Government support for food processing industry
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-200 rounded-xl p-12 text-center">
              <div className="text-8xl mb-4">🗺️</div>
              <p className="text-gray-600 text-lg">Interactive map showing plant location and connectivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌱 Sustainability Features</h2>
            <p className="text-xl text-gray-700">Building responsibly for the future</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-green-50 rounded-xl">
              <div className="text-6xl mb-4">☀️</div>
              <h3 className="text-xl font-bold mb-2">Solar Ready</h3>
              <p className="text-gray-700">Designed for renewable energy integration</p>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="text-6xl mb-4">💧</div>
              <h3 className="text-xl font-bold mb-2">Water Management</h3>
              <p className="text-gray-700">Advanced RO system and water recycling</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-6xl mb-4">♻️</div>
              <h3 className="text-xl font-bold mb-2">Waste Treatment</h3>
              <p className="text-gray-700">State-of-the-art effluent treatment system</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Be Part of Our Manufacturing Journey</h2>
          <p className="text-xl mb-8">
            Watch our facility come to life and be among the first to experience our products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/partner"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Explore Partnership
            </Link>
            <Link
              to="/quality"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Learn About Quality
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plant;
