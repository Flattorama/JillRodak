import React from 'react';
import { Section, SectionHeader } from './ui/Section';
import { Button } from './ui/Button';

const MethodCard: React.FC<{ letter: string; title: string; desc: string }> = ({ letter, title, desc }) => (
  <div className="bg-white rounded-xl p-8 text-center border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300">
    <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-md">
      {letter}
    </div>
    <h4 className="text-lg font-bold text-gray-900 mb-3">{title}</h4>
    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

export const Method: React.FC = () => {
  const steps = [
    { letter: "R", title: "Role Fit", desc: "Identify roles that compound your strengths." },
    { letter: "O", title: "Outcomes", desc: "Define business outcomes you can own in 90 days." },
    { letter: "C", title: "Career Capital", desc: "Build skills, projects, mentors, and sponsors strategically." },
    { letter: "K", title: "KPIs", desc: "Make progress visible with simple, agreed-upon metrics." },
    { letter: "E", title: "Executive Presence", desc: "Communicate with clarity under pressure." },
    { letter: "T", title: "Terms", desc: "Negotiate scope, title, and total compensation confidently." }
  ];

  return (
    <Section id="method">
      <SectionHeader 
        title="The ROCKET Method" 
        subtitle="A clear, teachable framework tailored to your goals so you move faster with less guesswork."
      />
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {steps.map((step) => (
          <MethodCard key={step.letter} {...step} />
        ))}
      </div>

      <div className="text-center">
        <Button href="#book">See how ROCKET applies to you</Button>
      </div>
    </Section>
  );
};