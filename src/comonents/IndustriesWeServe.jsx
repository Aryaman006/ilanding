'use client';

import { motion } from 'framer-motion';

const industries = [
  { icon: '🌐', title: 'IT & Software Services' },
  { icon: '🏭', title: 'Manufacturing' },
  { icon: '🏥', title: 'Healthcare & Pharma' },
  { icon: '🛍', title: 'Retail & E-commerce' },
  { icon: '🧾', title: 'FinTech & BFSI' },
  { icon: '🏢', title: 'Startups & MSMEs' },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 px-6 md:px-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-2">
          Industries We Serve
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-16">
          Diverse Expertise Across Sectors
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl p-8 shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h4 className="text-lg font-semibold text-gray-700">{industry.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
