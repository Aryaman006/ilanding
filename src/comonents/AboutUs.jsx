'use client';
import { CheckCircle, Phone } from 'lucide-react';
import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h4 className="text-blue-600 font-semibold uppercase mb-2">More About Us</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            HireX
          </h2>
          <p className="text-gray-600 mb-6">
            HireX is a full-spectrum HR consultancy helping businesses scale with the right people, processes, and platforms.
We partner with startups, SMEs, and enterprises to deliver:
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              'Strategic Hiring',
              'HR Consulting',
              'Consectetur adipiscing elit',
              'End-to-End Compliance',
              'Agile HR Technology Solutions',
              // 'Ut enim ad minim veniam',
            ].map((text, i) => (
              <div key={i} className="flex items-center space-x-2">
                <CheckCircle className="text-blue-600 w-5 h-5" />
                <span className="text-gray-800">{text}</span>
              </div>
            ))}
          </div>

          {/* Author & Call */}
          {/* <div className="flex items-center gap-6 mt-8 flex-wrap">
            <div className="flex items-center gap-4">
              <Image
                src="/avatar-1.png"
                width={56}
                height={56}
                alt="CEO"
                className="rounded-full"
              />
              <div>
                <h5 className="text-lg font-semibold text-gray-800">Mario Smith</h5>
                <p className="text-blue-600 text-sm">CEO & Founder</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white shadow-md rounded-xl px-5 py-3">
              <Phone className="text-blue-600 w-5 h-5" />
              <div>
                <p className="text-sm text-gray-600">Call us anytime</p>
                <p className="font-bold text-gray-800">+123 456-789</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* Right Images */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/img-2.png"
              width={600}
              height={400}
              alt="Office Background"
              className="rounded-3xl w-full"
            />
          </div>
          <div className="absolute top-8 left-8 rounded-xl overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/img1.png"
              width={240}
              height={240}
              alt="Portrait"
              className="w-60 h-auto"
            />
          </div>
          <div className="absolute bottom-6 right-6 bg-blue-600 text-white px-6 py-4 rounded-xl text-center shadow-lg">
            <h3 className="text-3xl font-bold">
              15<span className="text-white text-2xl">+</span>
            </h3>
            <p className="text-sm">Years of experience in business service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
