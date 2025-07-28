// app/components/Footer.tsx
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 pt-16 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* Brand & Contact */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">iLanding</h2>
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p className="mt-2">
            <span className="font-semibold">Phone:</span> +1 5589 55488 55
          </p>
          <p>
            <span className="font-semibold">Email:</span> info@example.com
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="p-2 border rounded-full hover:bg-blue-600 hover:text-white transition">
              <FaXTwitter />
            </a>
            <a href="#" className="p-2 border rounded-full hover:bg-blue-600 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 border rounded-full hover:bg-blue-600 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 border rounded-full hover:bg-blue-600 hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About us</a></li>
            <li><a href="#" className="hover:text-blue-600">Services</a></li>
            <li><a href="#" className="hover:text-blue-600">Terms of service</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy policy</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Web Design</a></li>
            <li><a href="#" className="hover:text-blue-600">Web Development</a></li>
            <li><a href="#" className="hover:text-blue-600">Product Management</a></li>
            <li><a href="#" className="hover:text-blue-600">Marketing</a></li>
            <li><a href="#" className="hover:text-blue-600">Graphic Design</a></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Hic solutasetp</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Molestiae accusamus iure</a></li>
            <li><a href="#" className="hover:text-blue-600">Excepturi dignissimos</a></li>
            <li><a href="#" className="hover:text-blue-600">Suscipit distinctio</a></li>
            <li><a href="#" className="hover:text-blue-600">Dilecta</a></li>
            <li><a href="#" className="hover:text-blue-600">Sit quas consectetur</a></li>
          </ul>
        </div>

        {/* Links Column 4 */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Nobis illum</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Ipsam</a></li>
            <li><a href="#" className="hover:text-blue-600">Laudantium dolorum</a></li>
            <li><a href="#" className="hover:text-blue-600">Dinera</a></li>
            <li><a href="#" className="hover:text-blue-600">Trodelas</a></li>
            <li><a href="#" className="hover:text-blue-600">Flexo</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t pt-4 text-center text-xs text-gray-500">
        <p>
          © Copyright <span className="font-semibold">iLanding</span>. All Rights Reserved
        </p>
        <p>
          Designed by <a href="https://hillbornsolutions.com" className="text-blue-600 hover:underline">Hillborn Solutions</a>
        </p>
      </div>
    </footer>
  );
}
