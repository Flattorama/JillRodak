import React from 'react';

export const ProofBar: React.FC = () => {
  const items = [
    "Previously at Deloitte",
    "VP, Sustainability",
    "Corporate Knights Top 30 Under 30"
  ];

  return (
    <div className="py-10 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 flex-wrap text-center">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-sm font-semibold text-gray-500">
              <span className="w-2 h-2 bg-blue-600 rounded-full hidden md:block"></span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};