'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const TABS = [
  {
    label: 'Modisit',
    title: 'Voluptatem dignissimos provident',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    features: [
      'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit.',
      'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
    ],
    image: '/graph.png', // Replace with actual image
  },
  {
    label: 'Praesenti',
    title: 'Sed ut perspiciatis unde omnis',
    description:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    features: [
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.',
      'Sed quia consequuntur magni dolores eos qui ratione voluptatem.',
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
    ],
    image: '/call.png',
  },
  {
    label: 'Explica',
    title: 'Nisi ut aliquid ex ea commodi',
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    features: [
      'Excepteur sint occaecat cupidatat non proident.',
      'Sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam.',
    ],
    image: '/talk.png',
  },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { label, title, description, features, image } = TABS[activeTab];

  return (
    <section className="py-20 px-4 md:px-10 bg-white text-center">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Features</h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto my-2 rounded"></div>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>

      {/* Tab Toggle Buttons */}
      <div className="inline-flex mb-16 bg-gray-100 rounded-full p-1 shadow-sm">
        {TABS.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
              activeTab === index
                ? 'bg-blue-600 text-white shadow'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 text-left">
        {/* Text Content */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{title}</h3>
          <div className="h-1 w-16 bg-blue-600 mb-4 rounded"></div>
          <p className="text-gray-700 italic mb-6">{description}</p>

          <ul className="space-y-4">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="text-blue-600 w-5 h-5 mt-1" />
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Content */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={image}
            width={600}
            height={400}
            alt={label + ' Feature Illustration'}
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
