import React from 'react';
import { Star, Heart, Trophy, Users } from 'lucide-react';

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
  className: string;
  style?: React.CSSProperties;
}

const Badge: React.FC<BadgeProps> = ({ icon, text, className, style }) => {
  return (
    <div className={`absolute bg-white rounded-full px-4 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center gap-2 animate-float z-10 border border-[#F3F4F6] ${className}`} style={style}>
      {icon}
      <span className="text-sm font-medium text-gray-800 whitespace-nowrap">{text}</span>
    </div>
  );
};

export default Badge;