// components/About.js
import React from 'react';
import { CheckCircle2, Users, Award, Clock, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-2 bg-white">
      <div className="container-fluid mx-auto px-4 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 order-2 lg:order-1">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
              Powering Business Growth Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Technology Excellence</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Bambus Technologies, we provide intelligent business solutions, automation, software development, 
              ERP implementation, digital marketing, and analytics services to help businesses thrive in the digital age.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our team of experts combines technical excellence with strategic thinking to deliver solutions that 
              drive real business outcomes. We're committed to helping you achieve digital transformation.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { icon: Users, text: '150+ Happy Clients', color: 'from-blue-500 to-indigo-600' },
                { icon: Award, text: '8+ Years Experience', color: 'from-emerald-500 to-teal-600' },
                { icon: Clock, text: '24/7 Support', color: 'from-orange-500 to-red-500' },
                { icon: Globe, text: 'Global Presence', color: 'from-purple-500 to-pink-600' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Learn More About Us
            </button>
          </div>
          
          <div className="flex-1 order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                alt="Bambus Technologies team collaborating on software development"
                className="w-full object-cover rounded-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-emerald-200 rounded-full blur-2xl opacity-50 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-200 rounded-full blur-2xl opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;