// components/Hero.js
import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, Zap, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Bambus Technologies | Odoo ERP, Web Development & Digital Marketing</title>
        <meta name="description" content="Bambus Technologies provides Odoo ERP implementation, web development, SEO, digital marketing, Android app development, POS software and business automation solutions." />
        <meta name="keywords" content="Odoo implementation, ERP solutions, web development, digital marketing, SEO, Android development, POS software, business automation, Power BI" />
        <link rel="canonical" href="https://bambustechnologies.in" />
      </Helmet>
      
      <section id="home" className="relative pt-28 pb-20 md:pt-30 md:pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c2236a9a?w=1920&h=1080&fit=crop"
            alt="Modern office technology background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/85 to-teal-900/90"></div>
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container-fluid mx-auto px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4 text-emerald-300" />
                <span className="text-sm font-medium text-white">Trusted by 150+ Businesses</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Streamline Your Business Operations with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                  Intelligent Technology Solutions
                </span>
              </h1>
              <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0">
                Empowering growth from core development to end-to-end business automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white/70 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
                  <Play className="w-5 h-5" /> Watch Demo
                </button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-8 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm text-gray-200">No hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm text-gray-200">Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm text-gray-200">24/7 support</span>
                </div>
              </div>
            </div>

            {/* Right Side - Dashboard Image */}
            <div className="flex-1 relative animate-fade-in-up animation-delay-200">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                    alt="Business technology dashboard showing data analytics and automation"
                    className="rounded-xl w-full object-cover"
                  />
                </div>
                {/* Floating cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-3 animate-bounce-slow">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-semibold">+48% Growth</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-3 animate-bounce-slow animation-delay-300">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-teal-600" />
                    <span className="text-sm font-semibold">150+ Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;