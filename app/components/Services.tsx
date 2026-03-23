"use client";

import { Gem, Handshake, LampWallUp } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

function Services() {
  return (
    <div className=" flex flex-col w-full gap-12 pt-18 pb-24 px-6 mx-auto relative bg-black">
      <div className=" flex flex-col w-full items-center bg-black">
        <div className=" flex flex-col items-center gap-6 h-full w-full mx-auto">
          <div className=" w-[40%] lg:w-[15%] max-w-full p-1.5 border-b border-[#d8bc30] text-center">
            <h2 className=" text-base font-normal uppercase tracking-[4px]">
              {" "}
              What We Offer
            </h2>
          </div>
          <div className=" lg:w-[40%] max-w-full text-center">
            <h2 className=" text-4xl lg:text-5xl font-normal">
              Bringing Vision, Value, and Luxury Together
            </h2>
          </div>
        </div>
      </div>
      <div
        className=" bg-transparent relative min-h-100 rounded-xl flex-col w-full overflow-hidden"
        //   style={{
        //     backgroundImage:
        //       'url("https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/office-g-BG69TQF.jpg")',
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //   }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60"
          style={{
            backgroundImage:
              'url("https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/office-g-BG69TQF.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className=" flex w-full h-full -mt-62 px-6 mx-auto z-10 max-w-350">
        <div className=" flex flex-col lg:flex-row h-full w-full mx-auto gap-6 py-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" bg-[#121212] w-full h-full flex min-h-62.5 flex-col justify-between gap-6 border border-[#1E1E1E] rounded-lg p-6"
          >
            <div className=" w-[90%] max-w-full">
              <div className=" text-left flex flex-col">
                <div className=" inline-block">
                  <span className=" h-15 w-15 bg-[#242424] rounded-lg flex items-center justify-center">
                    <Gem className=" text-[#d8bc30] h-9 w-9" />
                  </span>
                </div>
                <div className=" grow w-full text-left ">
                  <h3 className=" text-2xl font-normal mb-5">
                    <span>Luxury Property Development</span>
                  </h3>
                  <p>
                    Architectural masterpieces built with integrity, innovation,
                    and world-class craftsmanship.
                  </p>
                </div>
              </div>
            </div>
            <div className=" self-start max-w-full">
              <Link href="#">
                <Button variant="outline" className=" rounded-full">
                  Read More
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" bg-[#121212] w-full h-full flex min-h-62.5 flex-col -mt-16 justify-between gap-6 border border-[#1E1E1E] rounded-lg p-6"
          >
            <div className=" w-[90%] max-w-full">
              <div className=" text-left flex flex-col">
                <div className=" inline-block ">
                  <span className=" h-15 w-15 bg-[#242424] rounded-lg flex items-center justify-center">
                    {/* <i className=' block h-[1em] w-[1em] relative before:content-["\e845"] font-ele'></i> */}
                    <Handshake className=" text-[#d8bc30] h-9 w-9" />
                  </span>
                </div>
                <div className=" grow w-full text-left ">
                  <h3 className=" text-2xl font-normal mb-5">
                    <span>Premium Real Estate Consulting</span>
                  </h3>
                  <p>
                    Personalized advisory for investors seeking long-term value
                    in the luxury market.
                  </p>
                </div>
              </div>
            </div>
            <div className=" self-start max-w-full">
              <Link href="#">
                <Button variant="outline" className=" rounded-full">
                  Read More
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" bg-[#121212] w-full h-full flex min-h-62.5 flex-col justify-between gap-6 border border-[#1E1E1E] rounded-lg p-6"
          >
            <div className=" w-[90%] max-w-full">
              <div className=" text-left flex flex-col">
                <div className=" inline-block ">
                  <span className=" h-15 w-15 bg-[#242424] rounded-lg flex items-center justify-center">
                    {/* <i className=' block h-[1em] w-[1em] relative before:content-["\e845"] font-ele'></i> */}
                    <LampWallUp className=" text-[#d8bc30] h-9 w-9" />
                  </span>
                </div>
                <div className=" grow w-full text-left ">
                  <h3 className=" text-2xl font-normal mb-5">
                    <span>Interior & Spatial Design</span>
                  </h3>
                  <p>
                    Curated interiors that blend modern minimalism with timeless
                    refinement.
                  </p>
                </div>
              </div>
            </div>
            <div className=" self-start max-w-full">
              <Link href="#">
                <Button variant="outline" className=" rounded-full">
                  Read More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
