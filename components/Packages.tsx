import React from 'react';
import { Section, SectionHeader } from './ui/Section';
import { Button } from './ui/Button';
import { Zap, TrendingUp, Target, Check } from 'lucide-react';

const PackageCard: React.FC<{
  title: string;
  duration: string;
  features: string[];
  icon: React.ElementType;
  ctaVariant: 'primary' | 'outline';
  isFeatured?: boolean;
}> = ({ title, duration, features, icon: Icon, ctaVariant, isFeatured }) => {
  return (
    <div className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border ${isFeatured ? 'border-blue-600 shadow-lg' : 'border-gray-200'}`}>
      {isFeatured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
          Most Popular
        </span>
      )}
      
      <div className="mb-6 text-blue-600">
        <Icon size={48} strokeWidth={1.5} />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-blue-600 font-medium text-sm mb-6">{duration}</p>

      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex gap-3 text-gray-600 text-sm">
            <Check size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button href="#book" variant={ctaVariant} fullWidth className="text-sm">
        Learn More
      </Button>
    </div>
  );
};

export const Packages: React.FC = () => {
  return (
    <Section id="offers" variant="light">
      <SectionHeader 
        title="Coaching Packages" 
        subtitle="Clear outcomes, defined timelines, practical support." 
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <PackageCard 
          title="Clarity Sprint"
          duration="1 week"
          icon={Target}
          ctaVariant="outline"
          features={[
            "Discovery questionnaire + 60-minute strategy session",
            "Strengths & lane mapping",
            "30-day action plan with 3 visible wins"
          ]}
        />
        
        <PackageCard 
          title="Accelerator"
          duration="8 weeks"
          icon={TrendingUp}
          ctaVariant="primary"
          isFeatured={true}
          features={[
            "Weekly 45-minute coaching (8 sessions)",
            "Career capital plan",
            "KPI dashboard for next review cycle",
            "Promotion conversation rehearsal"
          ]}
        />

        <PackageCard 
          title="Interview Intensive"
          duration="2 weeks"
          icon={Zap}
          ctaVariant="outline"
          features={[
            "Target role scorecard + story bank",
            "Two mock interviews with feedback",
            "Salary and terms negotiation prep"
          ]}
        />
      </div>

      <p className="text-center text-gray-500">
        Not sure which fit is right?{' '}
        <a href="#book" className="text-blue-600 font-medium hover:underline">
          Start with a 20-minute intro call.
        </a>
      </p>
    </Section>
  );
};