import React from 'react';
import { brands } from './data';

const TrustedBrands = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 mb-12">
          Trusted by innovative companies worldwide
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="w-32 h-12 relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2">
            <span className="text-sm text-gray-500">Join 500+ companies already growing with Creatiwise</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;