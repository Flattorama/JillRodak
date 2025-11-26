import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Jillian Rodak Coaching</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Helping early-career women in business build careers they love—with clarity, leverage, and confidence.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Coaching', 'About', 'Resources', 'Book a Call'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@jillianrodak.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                  hello@jillianrodak.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© 2025 Jillian Rodak Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};