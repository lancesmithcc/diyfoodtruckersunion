import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src="/img/logo.svg" alt="DIY Food Truckers Union" className="h-12 w-auto" />
            </div>
            <p className="font-redhat text-gray-400 mb-6 max-w-md">
              DIY Food Truckers lifting up DIY Food Truckers since 2025.
            </p>
            <div className="flex space-x-4">
              <a href="https://discord.gg/4XNQJ879" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-caprasimo mb-4">Quick Links</h3>
            <ul className="space-y-2 font-redhat text-gray-400">
              <li><a href="/workbook/" className="hover:text-white transition-colors duration-200">DIY Workbook</a></li>
              <li><a href="/resources/" className="hover:text-white transition-colors duration-200">Resources</a></li>
              <li><a href="https://discord.gg/4XNQJ879" className="hover:text-white transition-colors duration-200">Discord Community</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-caprasimo mb-4">Contact Us</h3>
            <ul className="space-y-3 font-redhat text-gray-400">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>hello@diyfoodtruckersunion.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="font-redhat">&copy; 2025 DIY Food Truckers Union. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;