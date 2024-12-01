import React from 'react';
import { ArrowRight, Sparkles, Star, Heart, Trophy, Users } from 'lucide-react';
import Badge from './Badge';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#EFF6FF] to-[#FAF5FF] pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative">
        {/* Floating Badges */}
        <Badge
          icon={<Star className="w-4 h-4 text-yellow-500" />}
          text="Rated 4.9/5 by Clients"
          className="absolute left-[10%] top-[130px] -rotate-[15deg] animate-float origin-bottom-right"
        />

        <Badge
          icon={<Heart className="w-4 h-4 text-red-500" />}
          text="50+ Brand Transformations"
          className="absolute left-[6%] bottom-[250px] animate-float-delay-2"
        />
        <Badge
          icon={<Users className="w-4 h-4 text-blue-500" />}
          text="100+ Happy Clients"
          className="absolute right-[10%] top-[130px] animate-float-delay-1"
        />
        <Badge
          icon={<Trophy className="w-4 h-4 text-purple-500" />}
          text="Award-Winning Designs"
          className="absolute right-[6%] bottom-[250px] animate-float-delay-3"
        />

        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 mb-8">
          <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
          <span className="text-sm text-purple-600 font-medium">Transform your brand with expert design</span>
        </div>

        <h1 className="text-[64px] leading-[1.1] font-bold tracking-tight mb-8">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Design that drives
          </span>
          <br />
          <span className="text-black">your business forward</span>
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12">
          Your dedicated design partner for branding, marketing, and UI design. Get unlimited design requests with quick turnaround times.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button className="inline-flex items-center px-8 py-4 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">
            Start your project
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="inline-flex items-center px-8 py-4 rounded-full border border-gray-200 text-gray-700 hover:border-gray-300 transition-colors">
            View our work
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;