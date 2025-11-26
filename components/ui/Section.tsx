import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'white' | 'light' | 'blue';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  variant = 'white' 
}) => {
  const variants = {
    white: "bg-white text-gray-800",
    light: "bg-gray-50 text-gray-800 border-t border-b border-gray-100",
    blue: "bg-blue-600 text-white"
  };

  return (
    <section id={id} className={`py-20 md:py-28 ${variants[variant]} ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader: React.FC<{ title: string; subtitle?: string; lightText?: boolean }> = ({ 
  title, 
  subtitle,
  lightText = false
}) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${lightText ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${lightText ? 'text-blue-100' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};