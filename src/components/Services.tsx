import React from 'react';
import { Palette, Layout, Megaphone } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Branding',
    description: 'Build a strong brand identity that resonates with your audience and sets you apart from competitors.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: 'Marketing Design',
    description: 'Create compelling marketing materials that drive engagement and conversions.',
    features: ['Social Media Graphics', 'Email Templates', 'Digital Ads', 'Print Materials']
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'UI Design',
    description: 'Design beautiful and intuitive user interfaces that deliver exceptional user experiences.',
    features: ['Web Design', 'Mobile Apps', 'Design Systems', 'Prototypes']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build and grow your brand's visual presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-[#E5E7EB]">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;