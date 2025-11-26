import React from 'react';
import { Section, SectionHeader } from './ui/Section';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';

export const WhoItsFor: React.FC = () => {
  const points = [
    "You're 0–6 years into your career and unsure which lane will compound fastest.",
    "Your contributions are solid, yet promotions and raises feel opaque.",
    "You want visible wins, clearer KPIs, and confidence in high-stakes conversations.",
    "You value purpose and want impact without stalling your trajectory.",
    "You prefer practical playbooks over vague motivation."
  ];

  return (
    <Section id="who">
      <SectionHeader title="Is this you?" />
      
      <div className="max-w-3xl mx-auto">
        <ul className="space-y-6 mb-12">
          {points.map((point, index) => (
            <li key={index} className="flex gap-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                <Check size={14} className="text-white" strokeWidth={3} />
              </div>
              <span className="text-lg text-gray-600 leading-relaxed">
                {point}
              </span>
            </li>
          ))}
        </ul>
        
        <div className="text-center">
          <Button href="#book">
            Yes, this is me → Book a call
          </Button>
        </div>
      </div>
    </Section>
  );
};