"use client";

import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "../components/ui/button";
import  { useRouter } from "next/navigation";

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  type: "sale" | "rent";
  category: string;
  city: string;
  projectUrl?: string;
}

interface PropertyCardProps {
  property: Property;
  index: number;
}

const PropertyCard = ({ property, index }: PropertyCardProps) => {
  const router = useRouter();
  return (
    <motion.div
      onClick={() => router.push(`/properties/${property.projectUrl}`)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className=" relative w-full md:w-1/2 min-h-125 flex items-end overflow-hidden cursor-pointer"
      style={{
        backgroundImage: `url(${property.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/40 to-black/90 z-0" />

      {/* CONTENT */}
      <div className=" relative flex flex-col md:flex-row h-full p-3 lg:p-10 w-full items-end justify-end gap-8 lg:gap-0">
      <div className="absolute inset-0 bg-transparent z-0"></div>
        <div className=" flex flex-col flex-wrap w-full">
          <div className=" max-w-full ">
            <div className=" flex items-center">
              <div className=" inline-block mb-2">
                <span className="">
                  <MapPin
                    className=" text-[#d8bc30] inline-block mr-2"
                    size={16}
                  />
                </span>
              </div>
              <div className=" grow w-full">
                <h3 className=" text-xs lg:text-sm font-normal mb-2 text-[#d8bc30]">
                  <span>{property.location}</span>
                </h3>
              </div>
            </div>
          </div>
          <div className=" max-w-full">
            <h2 className=" text-2xl lg:text-3xl font-normal">{property.name}</h2>
          </div>
          <div className=" flex flex-col ">
            <div className=" mt-5 max-w-full">
              <ul className=" flex list-none bg-transparent p-0 flex-wrap">
                <li className=" mr-2 lg:mr-6 flex items-center">
                  <span className=" flex">
                    <Bed
                      className=" text-[#d8bc30] inline-block mr-2"
                      size={16}
                    />
                  </span>
                  <span className=" text-base font-normal">
                    {property.beds}
                  </span>
                </li>
                <li className=" mx-2 lg:mx-6 flex items-center">
                  <span className=" flex">
                    <Bath
                      className=" text-[#d8bc30] inline-block mr-2"
                      size={16}
                    />
                  </span>
                  <span className=" text-base font-normal">
                    {property.baths}
                  </span>
                </li>
                <li className=" flex mx-2">
                  <span >
                    <Square
                      className=" text-[#d8bc30] inline-block mr-2"
                      size={16}
                    />
                  </span>
                  <span className=" text-base font-normal">
                    {property.sqft}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex md:flex-col items-center justify-between lg:items-end gap-6 w-full md:-mr-2 lg:mr-0">
          <div className=" max-w-full text-center lg:text-right">
            <h2 className=" text-xl lg:text-3xl font-normal"> {property.price}</h2>
          </div>
          <div className=" text-right">
            <Button className=" px-2 py-3 lg:px-4 lg:py-6 bg-linear-to-r from-[#d8bc30] to-[#d8bc30] hover:from-[#d8bc30]/70 hover:to-[#d8bc30]/70 text-white text-sm lg:text-base font-normal tracking-wide rounded-xl transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 hover:scale-[1.02]">
              View Property
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
