"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 border-t border-gray-200 pt-16 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Flex: Logo Left, Content Right */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Logo Block (Top-Left) */}
          <div className="md:w-1/4">
            <a href="#hero" className="block h-16 overflow-hidden mb-10">
              <img
                src="/logo.png"
                alt="HireX Logo"
                className="h-50 w-auto -mt-16"
              />
            </a>
            <p className="text-sm mt-3">📍 Based in Bangalore</p>
            <p className="mt-2">
              {/* <span className="font-semibold">Phone:</span> +1 5589 55488 55 */}
            </p>
            <p>
              <span className="font-semibold">Email:</span> contact@hirex.in
            </p>
            <div className="flex gap-3 mt-4">
              {[FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="p-2 border border-gray-300 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    aria-label="Social Media"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Other Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 text-sm w-full">
            {/* Useful Links */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 text-base uppercase tracking-wide">
                Useful Links
              </h3>
              <ul className="space-y-2">
                {[
                  { name: "Home", href: "#hero" },
                  { name: "About us", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Terms of service", href: "#" },
                  { name: "Privacy policy", href: "#" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div className="col-span-2">
              <h3 className="font-semibold mb-4 text-gray-900 text-base uppercase tracking-wide">
                Our Services
              </h3>
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
                  <li
                    key={idx}
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-14 border-t pt-5 text-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-700">theHRx</span>. All rights
            reserved.
          </p>
          <p className="mt-1">
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
      </div>
    </footer>
  );
}
