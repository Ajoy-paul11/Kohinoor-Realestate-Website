"use client";

import { motion } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";
import { Button } from "../components/ui/button";
import heroImage from "../assets/hero-home.jpg";
import PropertySearch from "./PropertySearch";
import { useRouter } from "next/navigation";

const Hero = () => {
  const projectsCount = useCountUp({ end: 160, suffix: "+" });
  const yearsCount = useCountUp({ end: 17, suffix: "+" });
  const satisfactionCount = useCountUp({ end: 98, suffix: "%" });
  const router = useRouter();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen text-white overflow-hidden"
    >
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage.src}
          alt="Luxury modern home"
          className="w-full h-full object-cover"
        />
        {/* Refined gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-6 lg:px-16 w-full min-h-screen flex flex-col justify-center">
        <div className="max-w-350 mx-auto w-full">
          {/* Hero Text Section */}
          <div className="mb-16 flex flex-col gap-12 pt-18">
            {/* Top Line: "Welcome to" + "Kohinoor" */}
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 lg:gap-16 mb-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className=" lg:pt-2.5"
              >
                <h2 className="text-lg md:text-xl lg:text-3xl font-extralight tracking-[0.15em] text-center uppercase text-white/90">
                  Welcome to
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                <h1 className="text-6xl md:text-7xl xl:text-[11rem] font-extralight tracking-[-0.02em] text-center leading-[0.9] text-[#d8bc30]">
                  Kohinoor
                </h1>
              </motion.div>
            </div>

            {/* Bottom Line: "Realestate" + "Luxury Marketplace" */}
            <div className="flex flex-col md:flex-row justify-center md:items-end gap-8 lg:gap-12 -mt-4 lg:-mt-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className=" md:pl-5"
              >
                <h1 className="text-6xl md:text-7xl xl:text-[11rem] font-extralight tracking-[-0.02em] text-center leading-[0.9] text-white">
                  Realestate
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center md:items-end lg:pb-4"
              >
                <h2 className="text-lg md:text-xl lg:text-3xl font-extralight tracking-[0.15em] uppercase text-center md:text-right text-white/90 whitespace-nowrap">
                  Luxury Marketplace
                </h2>
              </motion.div>
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <Button
              onClick={() => router.push("/properties")}
              className="bg-linear-to-r from-[#d8bc30]/80 to-[#d8bc30]/80 hover:from-[#d8bc30]/70 hover:to-[#d8bc30]/70 text-white px-10 py-5 text-base font-normal tracking-wide rounded-md transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 hover:scale-[1.02]"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push("/contact-us")}
              className=" bg-transparent hover:bg-white hover:text-black text-white px-10 py-5 text-base font-normal tracking-wide rounded-md transition-all duration-300 backdrop-blur-sm hover:scale-[1.02]"
            >
              Contact Us
            </Button>
          </motion.div>

          {/* Search Bar */}
          <PropertySearch />

          {/* Stats Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-3 gap-16 lg:gap-24 max-w-4xl"
          >
            <div ref={projectsCount.ref} className="group cursor-default">
              <div className="text-6xl md:text-7xl lg:text-8xl font-extralight text-white mb-3 transition-all duration-500 group-hover:text-amber-400 group-hover:scale-105">
                {projectsCount.displayValue}
              </div>
              <p className="text-xs md:text-sm lg:text-base text-white/60 font-light tracking-[0.2em] uppercase">
                Projects Completed
              </p>
            </div>
            
            <div ref={yearsCount.ref} className="group cursor-default">
              <div className="text-6xl md:text-7xl lg:text-8xl font-extralight text-white mb-3 transition-all duration-500 group-hover:text-amber-400 group-hover:scale-105">
                {yearsCount.displayValue}
              </div>
              <p className="text-xs md:text-sm lg:text-base text-white/60 font-light tracking-[0.2em] uppercase">
                Years Experience
              </p>
            </div>
            
            <div ref={satisfactionCount.ref} className="group cursor-default">
              <div className="text-6xl md:text-7xl lg:text-8xl font-extralight text-white mb-3 transition-all duration-500 group-hover:text-amber-400 group-hover:scale-105">
                {satisfactionCount.displayValue}
              </div>
              <p className="text-xs md:text-sm lg:text-base text-white/60 font-light tracking-[0.2em] uppercase">
                Client Satisfaction
              </p>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
