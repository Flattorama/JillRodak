import React from 'react';
import { Section, SectionHeader } from './ui/Section';
import { Button } from './ui/Button';

export const BookCall: React.FC = () => {
  return (
    <Section id="book" variant="light">
      <SectionHeader 
        title="Let's see if we're a fit." 
        subtitle="Choose a time for a 20-minute intro call. We'll map your goals and the fastest next steps."
      />

      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
            <input 
              type="text" 
              placeholder="Your full name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
            <input 
              type="email" 
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">What's your main goal right now?</label>
            <textarea 
              rows={4}
              placeholder="Tell me briefly about what you're working toward..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none"
            ></textarea>
          </div>

          <Button fullWidth type="submit" className="mt-2">
            Request a Call
          </Button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          You'll receive a calendar invite and a brief prep guide.
        </p>
      </div>
    </Section>
  );
};