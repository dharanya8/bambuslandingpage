// components/Testimonials.js
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    position: 'CEO, TechSolutions India',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Bambus Technologies transformed our business with their Odoo implementation. The team is professional, responsive, and delivered beyond our expectations.'
  },
  {
    name: 'Priya Sharma',
    position: 'Marketing Director, GrowMore',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Their digital marketing strategies have doubled our online revenue. Highly recommended for anyone looking to scale their business.'
  },
  {
    name: 'Amit Patel',
    position: 'Owner, Fashion Hub',
    img: 'https://randomuser.me/api/portraits/men/75.jpg',
    text: 'The POS software they developed for our retail chain has streamlined our operations immensely. Great support team!'
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-fluid mx-auto px-4 md:px-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Clients Say</span>
          </h2>
          <p className="text-gray-600">
            Trusted by 150+ businesses across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.img} 
                  alt={`${testimonial.name} testimonial`}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-emerald-200 mb-2" />
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;