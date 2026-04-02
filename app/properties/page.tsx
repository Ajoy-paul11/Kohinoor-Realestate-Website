import PropertyCard from "../components/PropertyCard";
import PropertySearch from "../components/PropertySearch";
import PropertyFilterWrapper from "../components/PropertyFilterWrapper";
import voxaImg from "../assets/voxa-card-img.jpg";
import aquariseImg from "../assets/aquarise1.webp";
import moonlightImg from "../assets/moonlight1.jpg";
import centralImg from "../assets/central-1.webp";
import skybladeImg from "../assets/skyblade.jpg";

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
    projectUrl: "/voxa",
  },
  {
    id: 2,
    name: "Binghatti Aquarise",
    location: "Chiang Mai, Thailand",
    price: "AED 1,000,000",
    image: aquariseImg.src,
    beds: 4,
    baths: 4,
    sqft: 434,
    type: "sale",
    category: "Apartment",
    city: "Dubai",
    projectUrl: "/aquarise",
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
    projectUrl: "/moonlight",
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
    projectUrl: "/central",
  },
  {
    id: 5,
  name: "Binghatti Skyblade",
  location: "Downtown Dubai, Dubai, Downtown",
  price: "AED 1,670,000",
  image: skybladeImg.src,
  beds: 3,
  baths: 3,
  sqft: 462,
  type: "sale",
  category: "Apartment",
  city: "Dubai",
  projectUrl: "/skyblade",
  }
];

type SearchParams = {
  city?: string;
  category?: string;
  type?: string;
};

export default async function PropertiesPage({}: // searchParams,
{
  // searchParams: Promise<SearchParams>;
}) {
  // const params = await searchParams;

  // const filtered = properties.filter((property) => {
  //   return (
  //     (!params.city || property.city === params.city) &&
  //     (!params.category || property.category === params.category) &&
  //     (!params.type || property.type === params.type)
  //   );
  // });

  return (
    <div>
      <div
        className=" relative flex flex-col min-h-[60vh] w-full justify-center pt-37 pb-24 px-6 mx-auto"
        style={{
          backgroundImage:
            "url('https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/cloudless-sky-NSEC2AH.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/50 to-black/30 from-0% to-60%" />
        <div className=" flex justify-center h-full w-full mx-auto max-w-full">
          <div className=" flex flex-col w-full basis-auto grow-0 shrink">
            <div className=" flex flex-col lg:flex-row w-full h-full gap-6 max-w-350 mx-auto justify-center">
              <div className=" flex flex-col items-center justify-end md:w-[38%] max-w-full">
                <div className=" max-w-full w-[51%] relative">
                  <h2 className=" text-base tracking-[4px] font-normal text-center uppercase text-white z-10">
                    Kohinoor Real-Estate
                  </h2>
                </div>
              </div>
              <div className=" flex overflow-hidden flex-col ">
                <div className=" max-w-full">
                  <div className=" -mb-4 lg:-mb-5.5 h-full w-full">
                    <div className=" max-w-full">
                      <h2 className=" text-7xl lg:text-9xl font-normal text-center z-1 relative">
                        Property List
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col w-full h-full gap-12 bg-black pt-18 pb-24 px-6 mx-auto">
        <div className=" flex flex-col gap-12 max-w-350 w-full h-full mx-auto grow shrink basis-auto">
          <PropertySearch />
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
                Our portfolio is art and prestige. From penthouses to villas,
                each residence embodies luxury.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap h-full w-full">
            {/* {filtered.length === 0 ? (
              <p className="text-neutral-400 text-lg">
                No properties found matching your criteria.
              </p>
            ) : (
                filtered.map((property) => (
                    <PropertyCard key={property.id} property={property} index={filtered.indexOf(property)}/>
                  ))
            )} */}
            <PropertyFilterWrapper properties={properties} />
          </div>
        </div>
      </div>
      <div className=" bg-black">
        <div className=" h-px w-[90%] mx-auto bg-[#d8bc30]"></div>
      </div>
    </div>
  );
}
