// components/WhyChooseUs.js
import React from 'react';
import { 
  Bot, Expand, Search, Megaphone, 
  Palette, Headphones, CheckCircle, Rocket,
  Shield, Zap
} from 'lucide-react';

const features = [
  { icon: Bot, name: 'Smart Business Automation', desc: 'Streamline operations with intelligent workflow automation', color: 'from-indigo-500 to-purple-600' },
  { icon: Rocket, name: 'Fast Delivery', desc: 'Timely project completion without compromise', color: 'from-emerald-500 to-teal-600' },
  { icon: Search, name: 'SEO Friendly', desc: 'Optimized code for better search rankings', color: 'from-blue-500 to-cyan-600' },
  { icon: Expand, name: 'Scalable Solutions', desc: 'Grow without limitations with our platforms', color: 'from-orange-500 to-red-500' },
  { icon: Palette, name: 'Modern UI/UX', desc: 'Beautiful, intuitive interfaces for users', color: 'from-rose-500 to-pink-600' },
  { icon: Headphones, name: '24/7 Support', desc: 'Dedicated technical assistance anytime', color: 'from-teal-500 to-emerald-600' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-2 bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div className="container-fluid mx-auto px-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white shadow-md px-5 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">Why Partner With Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Choose Us</span>
          </h2>
          <p className="text-gray-600">
            We combine technical expertise with a client-first approach to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">{feature.name}</h3>
                  <p className="text-gray-500">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold">150+</p>
              <p className="text-emerald-100">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold">250+</p>
              <p className="text-emerald-100">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold">8+</p>
              <p className="text-emerald-100">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-emerald-100">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;