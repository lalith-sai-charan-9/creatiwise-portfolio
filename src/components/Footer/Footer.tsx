import React from 'react';
import { Palette } from 'lucide-react';
import { footerSections } from './data';
import FooterSection from './FooterSection';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand and Social */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                creatiwise.
              </span>
            </div>
            <p className="text-gray-600 mb-6 max-w-sm">
              Your dedicated design partner for branding, marketing, and UI design.
              Get unlimited design requests with quick turnaround times.
            </p>
            <SocialLinks />
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <FooterSection section={section} />
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © {currentYear} Creatiwise. All rights reserved.
            </div>
            <div className="flex items-center gap-8">
              <a href="mailto:hello@creatiwise.com" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                hello@creatiwise.com
              </a>
              <a href="tel:+1234567890" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;