import React from 'react';
import { Zap, Shield, Clock, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Easy Collaboration',
    description: 'Simple project management and communication through our streamlined platform.',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Professional Quality',
    description: 'Expert designers delivering pixel-perfect designs that meet industry standards.',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Modern Approach',
    description: 'Stay ahead with cutting-edge design trends and innovative solutions.',
    color: 'from-pink-400 to-pink-600'
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Affordable Plans',
    description: 'Competitive pricing with flexible plans to suit businesses of all sizes.',
    color: 'from-green-400 to-green-600'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Creatiwise?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine creativity with reliability to deliver exceptional design solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 ease-in-out"
                style={{ backgroundImage: `linear-gradient(to right, ${feature.color})` }}
              />
              <div className="relative p-8 rounded-2xl border border-[#E5E7EB]">
                <div className={`w-12 h-12 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r ${feature.color} text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;