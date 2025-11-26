import React, { useState } from 'react';
import { Section, SectionHeader } from './ui/Section';
import { ChevronDown } from 'lucide-react';

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-white rounded-lg border border-gray-100 overflow-hidden mb-3 shadow-sm transition-all duration-200 ${isOpen ? 'shadow-md' : ''}`}>
      <button 
        className="w-full px-8 py-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900 pr-8">{question}</span>
        <ChevronDown 
          size={20} 
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`px-8 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {answer}
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How is this different from general career advice?",
      answer: "It's hands-on, with playbooks tied to your role, your KPIs, and your review cycle. We focus on measurable outcomes, not vague motivation."
    },
    {
      question: "Do you help with interviews and negotiation?",
      answer: "Yes—story bank, mock interviews, and compensation scripts are included in relevant packages."
    },
    {
      question: "Is this for new grads only?",
      answer: "No. Most clients have 1–6 years of experience, though the frameworks apply to anyone early in their career trajectory."
    },
    {
      question: "Do you work with clients outside Canada?",
      answer: "Yes, sessions are virtual; all time zones welcome."
    },
    {
      question: "What's your availability?",
      answer: "Limited spots each month to ensure quality. Book an intro call to check current availability."
    },
    {
      question: "What if I need employer approval?",
      answer: "We'll provide a brief value summary you can share with your manager or L&D team."
    }
  ];

  return (
    <Section id="faq">
      <SectionHeader title="Frequently Asked Questions" />
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, i) => (
          <FaqItem key={i} {...faq} />
        ))}
      </div>
    </Section>
  );
};