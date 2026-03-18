import Image from "next/image";
import central1 from "../../assets/central-1.webp";
import LightGallery from "../../components/LightGallery";
import img1 from "../../assets/images/central/central-1.webp";
import img2 from "../../assets/images/central/central2.webp";
import img3 from "../../assets/images/central/central3.webp";
import img4 from "../../assets/images/central/central4.webp";
import img5 from "../../assets/images/central/central5.webp";
import img6 from "../../assets/images/central/central6.webp";
import Link from "next/link";

type Property = {
  id: string;
  name: string;
  location: string;
  price: string;
  image: string;
  beds?: number;
  baths?: number;
  sqft?: number;
  type?: "sale" | "rent";
  category?: string;
  city?: string;
};

const central: Property = {
  id: "sobha-central",
  name: "Sobha Central",
  location: "Sheikh Zayed Road, Dubai",
  price: "AED 1,390,000",
  image: central1.src,
  beds: 2,
  baths: 2,
  sqft: 495,
  type: "sale",
  category: "Apartment",
  city: "Dubai",
};

const galleryImages: string[] = [
  img1.src,
  img2.src,
  img3.src,
  img4.src,
  img5.src,
  img6.src,
];

export default function MoonlightPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white pt-20">
      {/* ── HERO: Title + meta bar ── */}
      <section className="border-b border-neutral-800/60">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-6">
          {/* Breadcrumb */}
          <p className="text-xs text-neutral-500 tracking-widest uppercase mb-4">
            Properties &nbsp;/&nbsp; Dubai &nbsp;/&nbsp; Al Jaddaf
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white leading-tight">
                {central.name}
              </h1>
              <p className="mt-2 text-neutral-400 text-sm tracking-wide">
                Al Jaddaf · Dubai · {central.category}
              </p>
            </div>

            {/* Price + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <div className="text-right">
                <p className="text-xs text-neutral-500 uppercase tracking-widest">
                  Starting from
                </p>
                <p className="text-3xl font-semibold text-[#cbb58b]">
                  {central.price}
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-[#cbb58b] hover:bg-[#b9a075] text-black text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
                >
                  Enquire
                </Link>
                <Link
                  href="/VOXA_BROCHURE.pdf" 
                  target="_blank"
                  className="inline-flex items-center gap-2 border border-neutral-700 hover:border-neutral-500 text-neutral-300 text-sm px-4 py-2.5 rounded-md transition-colors"
                >
                  Brochure
                </Link>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            {[
              { label: "Building", value: "2 Rooms" },
              { label: "Floors", value: "3" },
              { label: "Total units", value: "1225" },
              { label: "Developer", value: "Sobha Realty" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-neutral-500 text-xs uppercase tracking-widest">
                  {label}
                </span>
                <span className="w-px h-3 bg-neutral-700" />
                <span className="text-neutral-200">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY (hero position) ── */}
      <section className="max-w-7xl mx-auto px-6 pt-6 pb-2">
        <LightGallery images={galleryImages} initialCount={6} />
      </section>

      {/* ── CONTENT ── */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left / Main */}
          <article className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <div className="prose prose-invert max-w-none text-neutral-300 prose-headings:text-white prose-a:text-[#cbb58b]">
              <h2 className="text-2xl font-serif">Project Overview</h2>

              <p>
                <strong>Sobha Central</strong> is a landmark mixed-use
                development by <strong>Sobha Realty</strong>, rising along the
                prestigious <strong>Sheikh Zayed Road, Dubai</strong>. Offering
                elegantly designed
                <strong> 1 & 2 bedroom apartments</strong> starting from{" "}
                <strong>495 sq. ft.</strong> and priced from
                <strong> AED 1.39M onwards</strong>, the project promises
                stunning panoramic views of
                <strong> Dubai Marina</strong>,{" "}
                <strong>Bluewaters Island</strong>, and{" "}
                <strong>Ain Dubai</strong> — bringing skyline and sea view
                living to your doorstep.
              </p>
              <p>
                Spread across <strong>9.3 acres</strong>, the development
                features six iconic towers rising up to
                <strong> G + 75 storeys</strong> with{" "}
                <strong>1,225 units</strong>, anchored by a
                <strong> 4-acre master-planned urban park</strong>. Thoughtfully
                curated amenities include mini golf, cricket, football, private
                lift, prayer hall, and cinema — every detail crafted to elevate
                the city lifestyle. With handover scheduled for{" "}
                <strong>December 2029</strong>, Sobha Central stands as a symbol
                of modern luxury and architectural brilliance along Dubai's most
                coveted corridor.
              </p>

              <div className="not-prose grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
                {[
                  { icon: "🎬", title: "Cinema", sub: "Private screening" },
                  { icon: "⚽", title: "Football Area", sub: "Sports court" },
                  { icon: "🏋️", title: "Gym", sub: "Fitness center" },
                  {
                    icon: "🧘",
                    title: "Indoor & Outdoor Yoga",
                    sub: "Yoga area",
                  },
                  { icon: "🎭", title: "Indoor Theatre", sub: "Entertainment" },
                  { icon: "♨️", title: "Jacuzzi", sub: "Relaxation pool" },
                  {
                    icon: "🏃",
                    title: "Jogging Track",
                    sub: "Running circuit",
                  },
                  { icon: "🌊", title: "Kids Pool", sub: "Safe splash zone" },
                  { icon: "🏊", title: "Lap Pool", sub: "Fitness swimming" },
                  { icon: "🛟", title: "Leisure Pool", sub: "Resident access" },
                  {
                    icon: "🏛️",
                    title: "MultiPurpose Hall",
                    sub: "Events & gatherings",
                  },
                  {
                    icon: "🧖",
                    title: "Steam & Sauna",
                    sub: "Wellness retreat",
                  },
                ].map(({ icon, title, sub }) => (
                  <div
                    key={title}
                    className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center"
                  >
                    <div className="text-2xl mb-1">{icon}</div>
                    <div className="text-sm font-medium text-white">
                      {title}
                    </div>
                    <div className="text-xs text-neutral-500 mt-0.5">{sub}</div>
                  </div>
                ))}
              </div>

              {/* <h3 className="text-lg font-semibold mt-6">Location</h3>
              <p>
                Situated in <strong>Business Bay</strong> — Dubai's central business and lifestyle
                district — Aquarise places residents within minutes of the city's most coveted
                destinations.
              </p>
              <div className="not-prose flex flex-wrap gap-3 mt-2 mb-6">
                {[
                  ["Burj Khalifa", "5 min"],
                  ["Dubai Mall", "7 min"],
                  ["DIFC", "10 min"],
                  ["Dubai Airport", "20 min"],
                ].map(([place, time]) => (
                  <div key={place} className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm">
                    <span className="text-[#cbb58b] font-semibold">{time}</span>
                    <span className="text-neutral-400">{place}</span>
                  </div>
                ))}
              </div> */}

              <h3 className="text-lg font-semibold">Indicative Pricing</h3>
              <div className="not-prose overflow-hidden rounded-lg border border-neutral-800 mt-2">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-neutral-900 text-neutral-400 text-xs uppercase tracking-widest">
                      <th className="text-left px-4 py-3">Unit type</th>
                      <th className="text-left px-4 py-3">Starting price</th>
                      <th className="text-left px-4 py-3">Size</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800">
                    {[
                      ["Studio", "On request", "On request"],
                      ["1 BR", "On request", "On request"],
                      ["2 BR", "1,390,000 AED", "495 sqft"],
                      ["3 BR", "On request", "On request"],
                      ["4 BR", "On request", "On request"],
                    ].map(([type, price, size]) => (
                      <tr
                        key={type}
                        className="text-neutral-300 hover:bg-neutral-900/50 transition-colors"
                      >
                        <td className="px-4 py-3 font-medium">{type}</td>
                        <td className="px-4 py-3 text-[#cbb58b]">{price}</td>
                        <td className="px-4 py-3 text-neutral-500">{size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Quick Facts */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h4 className="text-base font-semibold uppercase tracking-widest text-neutral-400 mb-4">
                Quick Facts
              </h4>
              <dl className="space-y-3 text-sm">
                {[
                  ["Project", central.name],
                  ["Developer", "Sobha Realty"],
                  ["Location", "Sheikh Zayed Road, Dubai"],
                  ["Building type", "2 Rooms Apartments"],
                  ["Buildings", "3"],
                  ["Total units", "1225"],
                  ["Property size", "495 ft²"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between gap-4 border-b border-neutral-800 pb-2 last:border-0 last:pb-0"
                  >
                    <dt className="text-neutral-500">{label}</dt>
                    <dd className="text-neutral-200 text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Features */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h4 className="text-base font-semibold uppercase tracking-widest text-neutral-400 mb-4">
                Features
              </h4>
              <ul className="space-y-2 text-sm text-neutral-300">
                {[
                  "Cinema",
                  "Football Area",
                  "Gym",
                  "Indoor & Outdoor Yoga Area",
                  "Indoor Theatre",
                  "Jacuzzi",
                  "Jogging Track",
                  "Kids Pool",
                  "Lap Pool",
                  "Leisure Pool",
                  "MultiPurpose Hall",
                  "Steam & Sauna",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cbb58b] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div
              id="contact"
              className="bg-[#cbb58b]/5 border border-[#cbb58b]/20 rounded-xl p-6"
            >
              <h4 className="text-base font-semibold text-[#cbb58b] mb-1">
                Interested?
              </h4>
              <p className="text-sm text-neutral-400 mb-4">
                Our sales team will get back to you within 24 hours.
              </p>
              <Link
                href="/contact-us"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#cbb58b] hover:bg-[#b9a075] text-black font-semibold text-sm px-4 py-3 rounded-md transition-colors"
              >
                📩 Contact Us
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
