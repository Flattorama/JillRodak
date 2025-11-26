import React from 'react';
import { Section } from './ui/Section';

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
           <div className="w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden shadow-lg relative">
                <img 
                 src="/jillian-about.jpg" 
                 alt="Jillian Rodak" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
            {/* Offset border effect */}
            <div className="absolute -z-10 bottom-6 left-6 w-full h-full border-2 border-blue-100 rounded-2xl translate-x-4 translate-y-4 hidden md:block"></div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Jillian</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Jillian Rodak is a senior strategy and sustainability leader who helps emerging professionals turn potential into promotions. She currently serves as Vice President, Sustainability at a national industry association and previously worked in Deloitte Canada's Sustainability & Climate practice.
            </p>
            <p>
              Her work spans strategy, operations, and stakeholder engagement, with a focus on making complex goals measurable and achievable. Named to Corporate Knights' Top 30 Under 30 earlier in her career, Jillian also mentors students and speaks on career development and impact-driven work.
            </p>
            <p>
              As a coach, she blends practical playbooks with candid accountability so clients build leverage fast—clarifying the right roles, stacking visible wins, and communicating value with confidence.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};