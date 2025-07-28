// app/components/PricingSection.tsx
"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Basic Plan",
    price: "9.9",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.",
    features: [
      "Duis aute irure dolor",
      "Excepteur sint occaecat",
      "Nemo enim ipsam voluptatem",
    ],
    featured: false,
  },
  {
    name: "Standard Plan",
    price: "19.9",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
      "Ut labore et dolore magn"
    ],
    featured: true,
  },
  {
    name: "Premium Plan",
    price: "39.9",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
    features: [
      "Temporibus autem quibusdam",
      "Saepe eveniet ut et voluptates",
      "Nam libero tempore soluta",
      "Cumque nihil impedit quo",
      "Ut labore et dolore magn"
    ],
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-blue-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Pricing</h2>
        <div className="h-1 w-16 bg-blue-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-gray-600 mb-12">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-xl p-8 shadow-sm border transition duration-300 flex flex-col ${
                plan.featured
                  ? "bg-blue-600 text-white scale-105 z-10"
                  : "bg-white text-gray-900"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-sm font-semibold px-4 py-1 rounded-full shadow">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-end justify-center mb-4">
                <span className="text-xl font-medium mr-1">$</span>
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className={`text-lg ml-1 ${plan.featured ? "text-white/70" : "text-gray-400"}`}>
                  / month
                </span>
              </div>
              <p className={`mb-6 ${plan.featured ? "text-white" : "text-gray-600"}`}>
                {plan.description}
              </p>

              <h4 className="font-semibold mb-2">Featured Included:</h4>
              <ul className="space-y-2 text-left mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle
                      className={`text-lg ${
                        plan.featured ? "text-white" : "text-blue-600"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Buy Now Button */}
              <button
                className={`mt-auto px-6 py-3 rounded-lg font-medium transition text-center ${
                  plan.featured
                    ? "bg-white text-blue-600 hover:bg-blue-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
