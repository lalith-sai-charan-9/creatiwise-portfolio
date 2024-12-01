import React from 'react';
import { Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  'Unlimited design requests',
  'Fast turnaround time',
  'Fixed monthly pricing',
  'Money-back guarantee'
];

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm text-purple-600 font-medium">Start creating today</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to transform your
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              brand's visual identity?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join hundreds of satisfied clients who trust Creatiwise with their design needs.
            Start your journey today with our risk-free trial.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-sm"
              >
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors group">
              <span className="font-medium">Start your free trial</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-gray-200 hover:border-gray-300 transition-colors">
              <span className="font-medium">Schedule a demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;