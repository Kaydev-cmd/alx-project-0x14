import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171D22] text-white py-10 px-6 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        {/* Footer Logo */}
        <h2 className="text-xl md:text-4xl font-semibold mb-4 md:mb-0">
          Cine<span className="text-[#E2D609]">Seek</span>
        </h2>

        <nav className="flex-1 flex justify-center space-x-6 mb-4 md:mb-0">
          <Link
            href="/"
            className="text-[#E2D609] text-lg transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/movies"
            className="text-[#E2D609] text-lg transition-colors duration-300"
          >
            Movies
          </Link>
          <Link
            href="/contact"
            className="text-[#E2D609] text-lg transition-colors duration-300"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="text-[#E2D609] text-lg transition-colors duration-300"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
