'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
  '70+ Years of Combined HR Expertise',
  'Deep Knowledge of Bangalore’s Talent Market',
  'Industry-Agnostic: IT & Non-IT',
  'Fast Turnaround with Quality Assurance',
  'Scalable Solutions for Growing Teams',
  'Personalized Service with Founder-Led Engagement',
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-3">
          Why Choose HireX?
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-14">
          Our Unique Edge
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-green-600 mt-1">
                <CheckCircle className="w-6 h-6" />
              </div>
              <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                {feature}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
