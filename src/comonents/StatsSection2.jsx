// components/StatsSection.tsx
'use client';

import CountUp from 'react-countup';

const stats = [
  { value: 232, label: 'Clients' },
  { value: 521, label: 'Projects' },
  { value: 1453, label: 'Hours Of Support' },
  { value: 32, label: 'Workers' },
];

export default function StatsSection2() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-4xl font-bold text-slate-800">
              <CountUp end={stat.value} duration={2} />
            </div>
            <div className="h-1 w-6 mx-auto bg-blue-600 my-2 rounded" />
            <div className="text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
