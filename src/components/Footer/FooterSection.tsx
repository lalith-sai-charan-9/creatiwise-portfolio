import React from 'react';
import { FooterSection as FooterSectionType } from './types';

interface FooterSectionProps {
  section: FooterSectionType;
}

const FooterSection: React.FC<FooterSectionProps> = ({ section }) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
      <ul className="space-y-3">
        {section.links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;