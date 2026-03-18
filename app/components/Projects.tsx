import React from "react";
import PropertyCard from "./PropertyCard";
import voxaImg from "../assets/voxa-card-img.jpg";
import aquariseImg from "../assets/aquarise1.webp";
import moonlightImg from "../assets/moonlight1.jpg";
import centralImg from "../assets/central-1.webp";

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

const properties: Property[] = [
  {
    id: 1,
    name: "VOXA by Pantheon",
    location: "JVT, Dubai",
    price: "AED 799,900",
    image: voxaImg.src,
    beds: 3,
    baths: 3,
    sqft: 1293.39,
    type: "sale",
    category: "Apartment",
    city: "Dubai",
    projectUrl: "voxa",
  },
  {
    id: 2,
    name: "Binghatti Aquarise",
    location: "Business Bay, Dubai",
    price: "AED 1,000,000",
    image: aquariseImg.src,
    beds: 4,
    baths: 4,
    sqft: 434,
    type: "sale",
    category: "Apartment",
    city: "Dubai",
    projectUrl: "aquarise",
  },
  {
    id: 3,
    name: "Binghatti Moonlight",
    location: "Al Jaddaf, Dubai, Dubai",
    price: "AED 1,430,000",
    image: moonlightImg.src,
    beds: 3,
    baths: 3,
    sqft: 926,
    type: "rent",
    category: "Apartment",
    city: "Dubai",
    projectUrl: "moonlight",
  },
  {
    id: 4,
    name: "Sobha Central",
    location: "Sheikh Zayed Road, Dubai",
    price: "AED 1,390,000",
    image: centralImg.src,
    beds: 2,
    baths: 2,
    sqft: 495,
    type: "sale",
    category: "Apartment",
    city: "Dubai",
    projectUrl: "central",
  },
];

function Projects() {
  return (
    <div className=" flex flex-col w-full h-full gap-12 bg-black pt-18 pb-24 px-6 mx-auto">
      <div className=" flex flex-col gap-12 max-w-350 w-full h-full mx-auto grow shrink basis-auto">
        <div className=" flex flex-col gap-6 lg:flex-row h-full w-full basis-auto justify-between">
          <div className=" self-start max-w-full w-[5%] pb-1.5 border-b border-[#d8bc30]">
            <h2 className=" text-base font-normal uppercase tracking-[4px]">
              {" "}
              Featured Property
            </h2>
          </div>
          <div className=" max-w-full w-full md:w-[60%] lg:w-[35%]">
            <h2 className=" text-4xl md:text-5xl font-normal">
              Redefining Modern Elegance, One Home at a Time
            </h2>
          </div>
          <div className=" self-end max-w-full w-full md:w-[45%] lg:w-[24%]">
            <p className=" mb-4 text-xl font-normal">
              Our portfolio is art and prestige. From penthouses to villas, each
              residence embodies luxury.
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row flex-wrap h-full w-full ">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
