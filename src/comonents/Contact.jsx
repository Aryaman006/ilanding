// app/components/ContactSection.tsx
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
        <div className="h-1 w-16 bg-blue-600 mx-auto my-4 rounded-full"></div>
        <p className="text-gray-600">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Left - Contact Info */}
        <div className="bg-blue-600 text-white p-10 rounded-xl shadow-md space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum
              ante ipsum primis.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-500 p-3 rounded-full">
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <h4 className="font-semibold">Our Location</h4>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-500 p-3 rounded-full">
              <FaPhoneAlt size={20} />
            </div>
            <div>
              <h4 className="font-semibold">Phone Number</h4>
              <p>+1 5589 55488 55</p>
              <p>+1 6678 254445 41</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-500 p-3 rounded-full">
              <FaEnvelope size={20} />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>info@example.com</p>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white p-10 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
          <p className="text-gray-600 mb-8">
            Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante
            ipsum primis.
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
