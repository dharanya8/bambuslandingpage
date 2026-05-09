// components/Services.js
import React from 'react';
import { 
  Package, Database, Megaphone, LineChart, 
  Smartphone, Code2, Store, BarChart3, 
  Box, ArrowRight, CheckCircle 
} from 'lucide-react';

const services = [
  { 
    icon: Package, 
    name: 'ERP Solutions', 
    desc: 'Comprehensive ERP systems to unify all business functions from sales to accounting.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop'
  },
  { 
    icon: Database, 
    name: 'Odoo Implementation', 
    desc: 'Seamless Odoo setup and customization for your specific business needs.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
  },
  { 
    icon: Megaphone, 
    name: 'Digital Marketing', 
    desc: 'Data-driven strategies to enhance visibility and generate high-quality leads.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  },
  { 
    icon: LineChart, 
    name: 'SEO Optimization', 
    desc: 'Improve your website ranking on Google to attract organic traffic.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop'
  },
  { 
    icon: Smartphone, 
    name: 'Android App Development', 
    desc: 'Powerful native Android apps and Odoo mobile integration.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
  },
  { 
    icon: Code2, 
    name: 'Web Development', 
    desc: 'Modern, responsive websites built with cutting-edge technologies.',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop'
  },
  { 
    icon: Store, 
    name: 'POS Software', 
    desc: 'Cloud-based POS system for retail and service businesses.',
    img: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=400&h=300&fit=crop'
  },
  { 
    icon: BarChart3, 
    name: 'Power BI Analytics', 
    desc: 'Transform your data into actionable insights with interactive dashboards.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
  },
  { 
    icon: Box, 
    name: '3D Rendering', 
    desc: 'High-quality 3D visualizations for products and architectural projects.',
    img: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400&h=300&fit=crop'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-fluid mx-auto px-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Digital Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            All-in-One Business Software — Run Your Entire Business with One Smart Platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={`${service.name} service provided by Bambus Technologies`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-gray-500 mb-4">{service.desc}</p>
                  <button className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:gap-3 transition-all group/btn">
                    Learn More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;