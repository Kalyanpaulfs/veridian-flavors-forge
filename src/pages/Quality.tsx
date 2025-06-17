
import React from 'react';
import { Link } from 'react-router-dom';

const Quality = () => {
  const practices = [
    {
      icon: '🔍',
      title: 'Ingredient Sourcing',
      description: 'Verified suppliers with strong food safety records'
    },
    {
      icon: '📊',
      title: 'Batch Traceability',
      description: 'Digital logs for every production run'
    },
    {
      icon: '🧼',
      title: 'Sanitization & Hygiene',
      description: 'GMP-compliant processes and staff training'
    },
    {
      icon: '🌡️',
      title: 'In-Process Controls',
      description: 'Moisture, pH, viscosity, and temperature checks'
    },
    {
      icon: '🧪',
      title: 'Final Product Testing',
      description: 'Shelf life, microbial, sensory & packaging tests'
    }
  ];

  const certifications = [
    { name: 'FSSAI', status: 'completed', icon: '✅' },
    { name: 'BRC', status: 'completed', icon: '✅' },
    { name: 'ISO 22000', status: 'completed', icon: '✅', subtitle: 'Food Safety Management' },
    { name: 'HACCP', status: 'completed', icon: '✅' },
    { name: 'US FDA', status: 'progress', icon: '⏳', subtitle: 'for export readiness' },
    { name: 'Kosher / Halal', status: 'progress', icon: '⏳', subtitle: 'on request' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">🧪 Quality at the Forefront</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Where Safety Meets Authenticity - Building trust through rigorous standards
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Where Safety Meets Authenticity</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              At Veridian Foods, quality is not a department — it's our foundation. From sourcing the 
              finest ingredients to adhering to rigorous testing protocols, we're committed to ensuring 
              every batch meets the highest standards of safety, taste, and traceability.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Assurance Practices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🔍 Our Quality Assurance Practices</h2>
            <p className="text-xl text-gray-700">Comprehensive oversight at every step of production</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practices.map((practice, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{practice.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{practice.title}</h3>
                <p className="text-gray-700">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process Flow */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Process Flow</h2>
            <p className="text-xl text-gray-700">From raw materials to finished products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: 'Raw Material Inspection', icon: '📦' },
              { step: 'Processing Controls', icon: '⚙️' },
              { step: 'In-line Testing', icon: '🔬' },
              { step: 'Final QC Check', icon: '✓' },
              { step: 'Packaging & Release', icon: '📋' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <p className="font-semibold text-gray-800">{item.step}</p>
                {index < 4 && (
                  <div className="hidden md:block w-full h-1 bg-orange-300 mt-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🏅 Certifications (Planned & In Progress)</h2>
            <p className="text-xl text-gray-700">Meeting global standards for food safety and quality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  cert.status === 'completed' ? 'bg-green-50 border-2 border-green-200' : 'bg-yellow-50 border-2 border-yellow-200'
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                  {cert.subtitle && (
                    <p className="text-sm text-gray-600 mb-2">({cert.subtitle})</p>
                  )}
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    cert.status === 'completed' 
                      ? 'bg-green-200 text-green-800' 
                      : 'bg-yellow-200 text-yellow-800'
                  }`}>
                    {cert.status === 'completed' ? 'Planned' : 'In Progress'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab & Testing Facilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">🔬 State-of-the-Art Testing Lab</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Our in-house laboratory will be equipped with advanced testing equipment to ensure:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    Microbiological safety testing
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    Chemical composition analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    Nutritional content verification
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    Sensory evaluation panels
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    Shelf-life stability studies
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-12 text-center">
              <div className="text-8xl mb-4">🧪</div>
              <p className="text-gray-600 text-lg">Advanced testing equipment and quality control lab</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">🌿 Our Commitment</h2>
            <blockquote className="text-2xl text-gray-700 italic max-w-4xl mx-auto leading-relaxed">
              "We don't just meet standards — we aim to exceed them. Every step, from prep to pack, 
              is audited and reviewed to deliver Rich. Ready. Reliable. food that's safe and sensational."
            </blockquote>
            <div className="mt-8">
              <div className="text-orange-600 font-bold text-xl">— Veridian Foods Quality Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">👥 Quality Assurance Team</h2>
            <p className="text-xl text-gray-700">Experienced professionals dedicated to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { role: 'Quality Manager', focus: 'Overall QA strategy and compliance', icon: '👨‍💼' },
              { role: 'Food Technologist', focus: 'Product development and testing', icon: '👩‍🔬' },
              { role: 'QC Supervisor', focus: 'Daily quality control operations', icon: '👨‍🏭' }
            ].map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.role}</h3>
                <p className="text-gray-700">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Quality You Can Trust</h2>
          <p className="text-xl mb-8">
            Partner with us for consistent, safe, and authentic food products that meet global standards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/partner"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Become a Partner
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;
