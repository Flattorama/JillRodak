import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Who It's For", href: "#who" },
    { label: "Packages", href: "#offers" },
    { label: "Method", href: "#method" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 font-bold text-xl text-gray-900">
            <span className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center font-bold text-sm">
              JR
            </span>
            <span>Jillian Rodak</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button href="#book" className="px-6 py-2.5 text-xs h-auto">
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-500 hover:text-gray-900 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 px-6 py-4 shadow-lg flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-base font-medium text-gray-600 py-2 block"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button href="#book" fullWidth onClick={() => setIsOpen(false)}>
            Book a Call
          </Button>
        </div>
      )}
    </nav>
  );
};