"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">
        {/* Brand & Contact */}
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">HireX</h2>
          <p>📍 Based in Bangalore</p>
          {/* <p>New York, NY 535022</p> */}
          <p className="mt-3">
            <span className="font-semibold">Phone:</span> +1 5589 55488 55
          </p>
          <p>
            <span className="font-semibold">Email:</span> 📧 contact@hirex.in
          </p>
          <div className="flex gap-3 mt-5">
            {[FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="p-2 border border-gray-300 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Useful Links</h3>
          <ul className="space-y-2">
            {["Home", "About us", "Services", "Terms of service", "Privacy policy"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="md:col-span-2">
          <h3 className="font-semibold mb-4 text-gray-900">Our Services</h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {[
              "Recruitment Services",
              "Talent Acquisition",
              "HR Operations",
              "Payroll",
              "HRMS Implementation",
              "Performance Management",
              "Learning & Development",
              "Policy Drafting",
              "Compliance Services",
              "Org Policy Design",
            ].map((service, idx) => (
              <li key={idx} className="hover:text-blue-600 transition-colors duration-200">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-14 border-t pt-4 text-center text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">HireX</span>. All Rights Reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://hillbornsolutions.com"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hillborn Solutions
          </a>
        </p>
      </div>
    </footer>
  );
}
