import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

export const LeadMagnet: React.FC = () => {
  return (
    <Section id="lead" variant="blue" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your first 90 days, simplified.
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            A short playbook for early-career women to stack visible wins and set up your next promotion.
          </p>
          <ul className="space-y-4">
            {[
              "6 templates (win log, KPI one-pager, sponsor map)",
              "2 email scripts (ask for scope; ask for compensation review)",
              "A weekly checklist for momentum"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-blue-50">
                <Check size={20} className="text-white shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-10 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Get the Free Playbook</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="First name"
              className="w-full px-4 py-3.5 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:bg-white/20 focus:border-white transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full px-4 py-3.5 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:bg-white/20 focus:border-white transition-colors"
            />
            <Button variant="white" fullWidth className="mt-2" type="submit">
              Get the Playbook
            </Button>
            <p className="text-center text-xs text-blue-200 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
};