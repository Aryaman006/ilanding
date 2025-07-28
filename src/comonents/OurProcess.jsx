'use client';

import { Search, FileText, CheckCircle2, Repeat } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discovery',
    description: 'Understand your HR gaps through detailed analysis and consultation.',
    icon: Search,
    bg: 'bg-blue-100',
    text: 'text-blue-600',
  },
  {
    title: 'Proposal',
    description: 'We provide a curated service plan with a clear timeline and outcomes.',
    icon: FileText,
    bg: 'bg-indigo-100',
    text: 'text-indigo-600',
  },
  {
    title: 'Execution',
    description: 'Seamless delivery of selected HR services, tailored to your needs.',
    icon: CheckCircle2,
    bg: 'bg-green-100',
    text: 'text-green-600',
  },
  {
    title: 'Ongoing Support',
    description: 'Continuous monitoring, compliance checks, and proactive improvements.',
    icon: Repeat,
    bg: 'bg-yellow-100',
    text: 'text-yellow-600',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-white via-slate-50 to-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-2">
          Our Process
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-16">
          How We Work With You
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full ${step.bg} ${step.text} mb-6 mx-auto shadow-sm`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-sm font-medium text-gray-500 uppercase mb-1">
                  Step 0{index + 1}
                </h4>
                <h5 className="text-lg font-bold text-gray-800 mb-2">
                  {step.title}
                </h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
