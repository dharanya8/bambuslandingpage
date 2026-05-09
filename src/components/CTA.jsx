// components/CTA.js
import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="container-fluid mx-auto px-16 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to embark on a journey of digital transformation?
        </h2>
        <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
          Let's turn your vision into reality. Contact us today to set your brand on the path to digital excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center gap-2">
            Get Free Consultation <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2">
            <PhoneCall className="w-5 h-5" /> +91 93445 67746
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;