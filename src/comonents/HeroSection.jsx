// components/HeroSection.jsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import StatsSection from './StatsSection';

export default function HeroSection() {
  return (
    <section className="bg-[#f6f9fc] py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="mb-4 flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full w-max text-sm font-medium">
            <span className="text-xl">⚙️</span> Working for your success
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Maecenas Vitae <br /> Consectetur Led{' '}
            <span className="text-blue-600">Vestibulum Ante</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
            Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full">
              Get Started
            </button>
            <button className="flex items-center gap-2 text-gray-700 font-medium">
              ▶️ Play Video
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <Image
            src="/hero-illustration.png"
            alt="Hero Illustration"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          {/* Overlay box */}
          <div className="absolute bottom-5 right-5 bg-white shadow-lg rounded-xl p-4 flex-col items-center gap-4 w-[300px]">
            <div className="flex -space-x-1 overflow-hidden mb-4">
              <Image src="/avatar-1.png" width={32} height={32} className="rounded-full border" alt="User 1" />
              <Image src="/avatar-2.png" width={32} height={32} className="rounded-full border" alt="User 2" />
              <Image src="/avatar-3.png" width={32} height={32} className="rounded-full border" alt="User 3" />
              <Image src="/avatar-4.png" width={32} height={32} className="rounded-full border" alt="User 4" />
              <Image src="/avatar-5.png" width={32} height={32} className="rounded-full border" alt="User 4" />
              <span className="bg-blue-500 text-white text-xs px-2 py-1 flex justify-center items-center rounded-full font-semibold">12+</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">12,000+ lorem ipsum dolor sit amet consectetur adipiscing elit</p>
            </div>
          </div>
        </motion.div>
      </div>
      <StatsSection/>
    </section>
  );
}
