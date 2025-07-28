// app/components/ServicesSection.tsx
"use client";
import { motion } from "framer-motion";

const services = [
  "Recruitment Services – IT & Non-IT hiring (entry to exec level)",
  "Talent Acquisition – Workforce planning & hiring strategy",
  "HR Operations – Onboarding, documentation, HR admin",
  "Payroll – Monthly processing, tax filings, compliance",
  "HRMS Implementation – Platform selection & training (Keka, gretHR, Zoho HRMS)",
  "Performance Management (PMS Platform)",
  "Learning & Development",
  "Policy Drafting – Employee handbooks, POSH, conduct",
  "Compliance Services – Labour law, audits, reports",
  "Org Policy Design – Tailored policies for agile teams",
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-blue-50 text-gray-800">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <div className="h-1 w-16 bg-blue-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-gray-600 mb-12">
          We offer end-to-end HR solutions tailored to support fast-growing teams and organizations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-800 text-base font-medium">• {service}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
