import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 mb-8">
          <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
          <span className="text-sm text-purple-600 font-medium">Transform your brand with expert design</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Design that drives
          </span>
          <br />
          your business forward
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12">
          Your dedicated design partner for branding, marketing, and UI design. Get unlimited design requests with quick turnaround times.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="inline-flex items-center px-8 py-4 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">
            Start your project
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="inline-flex items-center px-8 py-4 rounded-full border border-gray-200 hover:border-gray-300 transition-colors">
            View our work
          </button>
        </div>

        <div className="mt-20">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50">
            {/* Add client logos here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;