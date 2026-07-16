import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-[#D4AF37]/20">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Logo & Description */}
        <div className="flex flex-col items-center text-center mb-14">

          <img
            src={logo}
            alt="Kaksha"
            className="h-16 w-auto"
          />

          <h2 className="mt-5 text-3xl font-bold">
            Eventify
          </h2>

          <p className="text-[#D4AF37] mt-1 tracking-wider text-sm uppercase">
            Powered by Kaksha
          </p>

        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Quick Links */}
          <div>

            <h3 className="text-[#D4AF37] font-bold tracking-wide text-xl mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <NavLink
                  to="/"
                  className="text-gray-300 hover:text-[#D4AF37] transition duration-300"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/events"
                  className="text-gray-300 hover:text-[#D4AF37] transition duration-300"
                >
                  Events
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="text-gray-300 hover:text-[#D4AF37] transition duration-300"
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-300 hover:text-[#D4AF37] transition duration-300"
                >
                  Contact
                </NavLink>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-[#D4AF37] font-bold tracking-wide text-xl mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <HiOutlinePhone className="text-[#D4AF37] text-xl" />
                <span className="text-gray-300">
                  +91 8095271775
                </span>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlineEnvelope className="text-[#D4AF37] text-xl" />
                <span className="text-gray-300">
                  info@kaksha9.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <HiOutlineMapPin className="text-[#D4AF37] text-xl mt-1" />
                <span className="text-gray-300">
                  Belagavi, Karnataka
                </span>
              </div>

            </div>

          </div>

          {/* Support */}
          <div>

            <h3 className="text-[#D4AF37] font-bold tracking-wide text-xl mb-6">
              Support
            </h3>

            <ul className="space-y-4">

              <li className="text-gray-300 hover:text-[#D4AF37] cursor-pointer transition duration-300">
                FAQs
              </li>

              <li className="text-gray-300 hover:text-[#D4AF37] cursor-pointer transition duration-300">
                Privacy Policy
              </li>

              <li className="text-gray-300 hover:text-[#D4AF37] cursor-pointer transition duration-300">
                Terms & Conditions
              </li>

            </ul>

          </div>

          {/* Social */}
          <div>

            <h3 className="text-[#D4AF37] font-bold tracking-wide text-xl mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#262626] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:scale-110 transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#262626] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:scale-110 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#262626] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:scale-110 transition-all duration-300"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#262626] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:scale-110 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Copyright */}

      <div className="border-t border-[#2F2F2F]">

        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-gray-400 text-sm">

          © {new Date().getFullYear()} Eventify • Powered by Kaksha. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}