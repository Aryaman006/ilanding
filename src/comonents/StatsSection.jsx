'use client';
import {
  Trophy,
  Briefcase,
  LineChart,
  BadgeCheck,
} from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: <Trophy className="w-6 h-6 text-blue-600" />,
      title: '3x Won Awards',
      subtitle: 'Vestibulum ante ipsum',
    },
    {
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      title: '6.5k Faucibus',
      subtitle: 'Nullam quis ante',
    },
    {
      icon: <LineChart className="w-6 h-6 text-blue-600" />,
      title: '80k Mauris',
      subtitle: 'Etiam sit amet orci',
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-blue-600" />,
      title: '6x Phasellus',
      subtitle: 'Vestibulum ante ipsum',
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#f6f9fc]">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-md p-8 md:p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              {stat.icon}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{stat.title}</h4>
              <p className="text-sm text-gray-500">{stat.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
