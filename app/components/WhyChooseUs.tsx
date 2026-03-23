"use client";

import { Brain, Gem, HouseHeart, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const features = [
  {
    id: 1,
    headline: "Premium Real Estate Consulting",
    description:
      "Personalized advisory for investors seeking long-term value in the luxury market.",
    icon: HouseHeart,
  },
  {
    id: 2,
    headline: "Unmatched Craftsmanship",
    description:
      "Attention to detail, from interiors to textures, ensuring perfection in every inch.",
    icon: Wrench,
  },
  {
    id: 3,
    headline: "Prime Luxury Locations",
    description:
      "Exclusive neighborhoods for prestige, privacy, and beauty — every sunrise feels curated.",
    icon: Gem,
  },
  {
    id: 4,
    headline: "Sustainable Innovation",
    description:
      "Luxury with smart systems, energy efficiency, and timeless materials.",
    icon: Brain,
  },
];

function WhyChooseUs() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div className=" flex gap-12 pt-18 pb-24 px-6 mx-auto w-full bg-black">
      <div className=" flex flex-col lg:flex-row h-full w-full gap-12 mx-auto max-w-350">
        <div ref={ref} className=" flex pt-6">
          <div className=" flex flex-col h-full w-full mx-auto">
            <div className=" flex flex-col gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className=" lg:w-[30%] p-1.5 border-b border-[#d8bc30] self-start max-w-full"
              >
                <h2 className=" text-base font-normal uppercase tracking-[4px]">
                  Why Choose Us
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className=" md:w-[81%] max-w-full "
              >
                <h2 className=" text-3xl md:text-4xl lg:text-5xl font-normal">
                  Where Vision, Craft, and Luxury Align
                </h2>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=" flex flex-col h-full"
        >
          <div className=" flex flex-col h-full w-full mx-auto gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className=" w-full max-w-full p-6 bg-[#121212] border border-[#1E1E1E] rounded-lg flex flex-col gap-6"
              >
                <div className=" flex gap-2 items-center text-left flex-row-reverse">
                  <span className=" h-15 w-15 bg-[#242424] rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className=" text-[#d8bc30] h-9 w-9" />
                  </span>
                  <div className=" w-full grow text-left">
                    <h3 className=" text-xl md:text-2xl font-normal mb-4">
                      {" "}
                      {feature.headline}
                    </h3>
                    <p className=" text-sm md:text-lg font-normal">
                      {" "}
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
