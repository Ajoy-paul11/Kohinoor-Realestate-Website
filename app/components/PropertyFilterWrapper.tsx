"use client";

import { useSearchParams } from "next/navigation";
import PropertyCard from "./PropertyCard";

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

export default function PropertyFilterWrapper({ properties }: { properties: Property[] }) {
  const searchParams = useSearchParams();

  const city = searchParams.get("city");
  const category = searchParams.get("category");
  const type = searchParams.get("type");

  const filtered = properties.filter((property) => {
    return (
      (!city || property.city === city) &&
      (!category || property.category === category) &&
      (!type || property.type === type)
    );
  });

  return (
    <>
      {filtered.length === 0 ? (
        <p className="text-neutral-400 text-lg">
          No properties found matching your criteria.
        </p>
      ) : (
        filtered.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            index={property.id}
          />
        ))
      )}
    </>
  );
}