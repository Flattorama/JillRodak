import React from 'react';
import { Button } from './ui/Button';

export const MobileStickyCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-2xl z-40">
      <Button href="#book" fullWidth className="shadow-lg">
        Book a 20-min Intro Call
      </Button>
    </div>
  );
};