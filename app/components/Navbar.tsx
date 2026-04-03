"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import logo from "../../public/kohinoor.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Properties", href: "/properties" },
  { name: "Contact Us", href: "/contact-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const scrollToSection = (href: string) => {
  //   const element = document.querySelector(href);
  //   if (element) {
  //     Link(href);
  //   }
  //   setIsOpen(false);
  // };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="max-w-450 mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={logo.src}
              alt="Luxury Estates Logo"
              className=" h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <Link 
              href={"/contact-us"}
              className="btn-gold px-6"
            >
              Contact Us
            </Link>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="md:hidden py-4 border-t border-border"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                {/* <Link 
                href={"/contact"}
                className="btn-gold mt-2"
              >
                Contact Us
              </Link> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
