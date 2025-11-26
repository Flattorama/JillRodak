import React from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-36 pb-20 md:pt-48 md:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Career Coaching for Women
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build a career you love—without waiting your turn.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Coaching for early-career women in business to get clarity, build leverage, and accelerate promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#book">
                Book a 20-minute intro call
              </Button>
              <Button href="#lead" variant="outline">
                Take the Career Quiz
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="w-full max-w-[420px] aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl bg-gray-50">
               <img 
                 src="/jillian-hero.jpg" 
                 alt="Jillian Rodak sitting on a couch" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -z-10 top-6 right-6 w-full h-full border-2 border-blue-100 rounded-2xl pointer-events-none translate-x-4 translate-y-4 hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};