import React from "react";
import {
  PhoneCall,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "../assets/logo.jpeg";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full bg-black text-white px-6 pt-20 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* BRAND */}
          <div className="flex flex-col gap-6">
            <img
              src={logo.src}
              alt="Kohinoor Real Estate"
              className="w-32 object-contain"
            />
            <p className="text-sm text-[#929292] leading-relaxed max-w-xs">
              Crafting luxury living spaces with architectural excellence and
              timeless elegance.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 justify-around">
            {/* QUICK LINKS */}
            <div className="flex flex-col gap-6 ">
              <h3 className="text-lg font-medium tracking-wide">Quick Links</h3>

              <ul className="flex flex-col gap-3 text-sm text-[#b0b0b0]">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="hover:text-white transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/properties"
                    className="hover:text-white transition"
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="hover:text-white transition"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-medium tracking-wide">Contact</h3>

              <ul className="flex flex-col gap-4 text-sm text-[#b0b0b0]">
                <li className="flex items-center gap-3">
                  <PhoneCall size={16} />
                  <span>+91 9876543210</span>
                </li>

                <li className="flex items-center gap-3">
                  <Mail size={16} />
                  <span>kohinoorrealty@gmail.com</span>
                </li>

                <li className="flex items-center gap-3">
                  <MapPin size={16} />
                  <span>Dubai, UAE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#1E1E1E] my-12"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* COPYRIGHT */}
          <p className="text-sm text-[#8a8a8a] text-center md:text-left">
            © {new Date().getFullYear()} Kohinoor. All rights reserved.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-6 text-[#b0b0b0]">
            <a href="#" className="hover:text-white transition">
              <Facebook />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
