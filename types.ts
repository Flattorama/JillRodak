import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PackageItem {
  icon: React.ElementType;
  title: string;
  duration: string;
  features: string[];
  ctaText: string;
  isFeatured?: boolean;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  title: string;
}