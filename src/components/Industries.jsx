// components/Industries.js
import React from 'react';
import { ArrowRight } from 'lucide-react';

const industries = [
  {
    name: 'IT Software & Hardware',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    desc: 'Custom software solutions for tech companies'
  },
  {
    name: 'Solar Energy Systems',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
    desc: 'Smart energy management and monitoring'
  },
  {
    name: 'Footwear & Retail',
    img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
    desc: 'POS and inventory management for retail'
  },
  {
    name: 'Cleaning Services',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
    desc: 'Service scheduling and CRM solutions'
  },
  {
    name: 'Repairing Services',
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop',
    desc: 'Work order management systems'
  },
  {
    name: 'E-commerce',
    img: 'https://images.unsplash.com/photo-1523475496153-3db5c3f3e6c1?w=400&h=300&fit=crop',
    desc: 'Online store development and marketing'
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container-fluid mx-auto px-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Verticals</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Serve</span>
          </h2>
          <p className="text-gray-600">
            Tailored solutions for diverse business sectors across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={industry.img} 
                  alt={`${industry.name} solutions by Bambus Technologies`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{industry.name}</h3>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <p className="text-gray-600 mb-3">{industry.desc}</p>
                <button className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;