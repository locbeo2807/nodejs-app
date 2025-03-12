import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8 px-6 shadow-[0_0_15px_2px_rgba(255,0,127,0.5)]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* ✅ Column 1: Brand & Description */}
        <div>
          <h2 className="text-3xl font-extrabold text-neonPink">LB E-Shop</h2>
          <p className="text-gray-300 mt-2">
            Your one-stop shop for futuristic deals and premium accessories.
          </p>
        </div>

        {/* ✅ Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-neonBlue mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-neonPink transition">Home</a></li>
            <li><a href="/products" className="hover:text-neonPink transition">Products</a></li>
            <li><a href="/contact" className="hover:text-neonPink transition">Contact</a></li>
            <li><a href="/signup" className="hover:text-neonPink transition">Sign Up</a></li>
          </ul>
        </div>

        {/* ✅ Column 3: Social Media & Newsletter */}
        <div>
          <h3 className="text-xl font-bold text-neonBlue mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-neonPink hover:scale-110 transition">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="text-neonPink hover:scale-110 transition">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="text-neonPink hover:scale-110 transition">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="text-neonPink hover:scale-110 transition">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>

          {/* ✅ Newsletter */}
          <div className="mt-4">
            <h3 className="text-xl font-bold text-neonBlue mb-2">Newsletter</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-md text-black focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-neonPink px-4 py-2 rounded-md text-white">
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Copyright */}
      <div className="text-center text-gray-400 mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} LB E-Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
