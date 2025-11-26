import React from 'react';
import { Section, SectionHeader } from './ui/Section';

const TestimonialCard: React.FC<{ quote: string; name: string; title: string }> = ({ quote, name, title }) => (
  <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col justify-between">
    <div>
      <div className="text-blue-600 text-5xl font-serif leading-none mb-6">"</div>
      <p className="text-lg text-gray-800 font-medium leading-relaxed italic mb-8">
        {quote}
      </p>
    </div>
    <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-400 font-medium">
        Photo
      </div>
      <div>
        <p className="font-bold text-gray-900 text-sm">{name}</p>
        <p className="text-xs text-gray-500 uppercase tracking-wide">{title}</p>
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <Section id="results" variant="light">
      <SectionHeader 
        title="Client Results" 
        subtitle="Real outcomes from real professionals."
      />
      
      <div className="grid md:grid-cols-3 gap-8">
        <TestimonialCard 
          quote="Promotion to Analyst II in one review cycle; negotiated a raise and scope increase."
          name="Sarah M."
          title="Financial Analyst"
        />
        <TestimonialCard 
          quote="Switched lanes from operations to ESG analyst with a clear 90-day win plan."
          name="Michelle K."
          title="ESG Analyst"
        />
        <TestimonialCard 
          quote="Closed two cross-functional projects that became the centrepiece of my review."
          name="Amanda L."
          title="Strategy Associate"
        />
      </div>
    </Section>
  );
};