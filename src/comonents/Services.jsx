// app/components/ServicesSection.tsx
"use client";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaHeartbeat, FaLaptopCode, FaChartBar } from "react-icons/fa";

const services = [
  {
    icon: <FaHeartbeat size={24} className="text-blue-500" />,
    title: "Nesciunt Mete",
    desc: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
  },
  {
    icon: <FaProjectDiagram size={24} className="text-blue-500" />,
    title: "Eosle Commodi",
    desc: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
  },
  {
    icon: <FaLaptopCode size={24} className="text-blue-500" />,
    title: "Ledo Markt",
    desc: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
  },
  {
    icon: <FaChartBar size={24} className="text-blue-500" />,
    title: "Asperiores Commodit",
    desc: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-blue-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Services</h2>
        <div className="h-1 w-16 bg-blue-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-gray-600 mb-12">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mr-4">
                {service.icon}
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-1">{service.desc}</p>
                <a
                  href="#"
                  className="text-blue-600 font-medium inline-flex items-center mt-3 hover:underline"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
