"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Filters = {
  city: string;
  category: string;
  type: string;
};

export default function PropertySearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<Filters>({
    city: "all",
    category: "all",
    type: "all",
  });

  useEffect(() => {
    setFilters({
      city: searchParams.get("city") ?? "all",
      category: searchParams.get("category") ?? "all",
      type: searchParams.get("type") ?? "all",
    });
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (filters.city !== "all") params.set("city", filters.city);
    if (filters.category !== "all") params.set("category", filters.category);
    if (filters.type !== "all") params.set("type", filters.type);

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="mt-2 w-full rounded-xl border border-neutral-800 bg-[#121212] p-2 md:p-6">
      <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4">
        {/* City */}
        <select
          name="city"
          value={filters.city}
          onChange={handleChange}
          className="h-12 rounded-md bg-[#1a1a1a] px-4 text-sm text-white outline-none"
        >
          <option value="all">All Cities</option>
          <option value="Dubai">Dubai</option>
        </select>

        {/* Category */}
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="h-12 rounded-md bg-[#1a1a1a] px-4 text-sm text-white outline-none"
        >
          <option value="all">All Categories</option>
          <option value="Apartment">Apartment</option>
        </select>

        {/* Type */}
        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="h-12 rounded-md bg-[#1a1a1a] px-4 text-sm text-white outline-none"
        >
          <option value="all">All Types</option>
          <option value="sale">Sale</option>
          <option value="rent">Rent</option>
        </select>

        {/* Search */}
        <button
          onClick={handleSearch}
          className="flex h-12 items-center justify-center gap-2 rounded-md cursor-pointer bg-[#d8bc30]/70 text-sm font-medium text-black transition hover:opacity-90"
        >
          🔍 Search
        </button>
      </div>
    </div>
  );
}
