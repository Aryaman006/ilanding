"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const faqs = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
    answer: "",
  },
  {
    question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    answer: "",
  },
  {
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer: "",
  },
  {
    question: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
    answer: "",
  },
  {
    question: "Perspiciatis quod quo quos nulla quo illum ullam?",
    answer: "",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        {/* Left Column */}
        <div className="relative">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Have a question? Check out the FAQ
          </h2>
          <p className="text-gray-600 mb-6">
            Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet
            adipiscing sem neque sed ipsum.
          </p>
          <div className="absolute top-20 left-0 bottom-0 w-32 h-32 md:w-40 md:h-40">
            <svg
              fill="none"
              viewBox="0 0 100 100"
              className="w-full h-full text-blue-500"
            >
              <path
                d="M10,90 C20,50 60,50 90,80"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
              />
              <path
                d="M90,80 L85,70 M90,80 L80,75"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`transition-all duration-300 rounded-xl bg-white overflow-hidden shadow ${
                openIndex === i ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between font-medium text-gray-800 hover:text-blue-600"
              >
                {faq.question}
                {openIndex === i ? (
                  <FaChevronDown className="ml-2 text-blue-500" />
                ) : (
                  <FaChevronRight className="ml-2 text-gray-400" />
                )}
              </button>
              {openIndex === i && faq.answer && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
