import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from './types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
          <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
        </div>
      </div>
      
      <Quote className="w-8 h-8 text-purple-200 mb-4" />
      
      <p className="text-gray-600 leading-relaxed flex-grow">{testimonial.quote}</p>
    </div>
  );
};

export default TestimonialCard;