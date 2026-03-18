
// import Image from "next/image";
// import voxaCardImg from "../../assets/voxa-card-img.jpg";
// import LightGallery from "../../components/LightGallery";
// import img1 from "../../assets/images/voxa/BeachCameraUpdate-PP.jpeg";
// import img2 from "../../assets/images/voxa/Cinema-PP.jpeg";
// import img3 from "../../assets/images/voxa/DogPark-PP.jpeg";
// // import img4 from "../../assets/images/voxa/FronElevationDay.jpg";
// import img5 from "../../assets/images/voxa/GolfShotUpdate-PP.jpeg";
// import img6 from "../../assets/images/voxa/OutdoorKidsArea-PP.jpeg";
// import img7 from "../../assets/images/voxa/PantheonJVT_EntranceRoadShot-PP.jpeg";
// import img8 from "../../assets/images/voxa/YogaShot-PP.jpeg";
// import img9 from "../../assets/images/voxa/JVT-1BHK-LIVING-1-adjusted.jpg";
// import img10 from "../../assets/images/voxa/JVT-1BHK-LIVING-2.jpg";
// import img11 from "../../assets/images/voxa/JVT-1BHK-MASTER-BEDROOM.jpg";
// import img12 from "../../assets/images/voxa/JVT-1BHK-MASTER-BATHROOM.jpg";
// import img13 from "../../assets/images/voxa/JVT-1BHK-MASTER-BATHROOM.jpg";
// import img14 from "../../assets/images/voxa/JVT-2BHK-LIVING-adjusted.jpg";
// import img15 from "../../assets/images/voxa/JVT-Gym.jpg";
// import img16 from "../../assets/images/voxa/JVT-PENTHOUSE-MAIN-MASTER-BEDROOM-2.jpg";
// import img17 from "../../assets/images/voxa/JVT-PENTHOUSE-MAIN-MASTER-BEDROOM-1-adjusted.jpg";
// import img18 from "../../assets/images/voxa/JVT-PENTHOUSE-FOURTH-BEDROOM.jpg";
// import img19 from "../../assets/images/voxa/JVT-PENTHOUSE-LIVING-KITCHEN-DINING-OPEN-SPACE-1.jpg";
// import img20 from "../../assets/images/voxa/JVT-PENTHOUSE-LIVING-KITCHEN-DINING-OPEN-SPACE-2.jpg";
// import img21 from "../../assets/images/voxa/JVT-PENTHOUSE-LIVING-KITCHEN-DINING-OPEN-SPACE-5.jpg";
// import img22 from "../../assets/images/voxa/JVT-PENTHOUSE-MASTER-BATHROOM.jpg"
// import img23 from "../../assets/images/voxa/JVT-PENTHOUSE-SECOND-BEDROOM.jpg";
// import img24 from "../../assets/images/voxa/JVT-PENTHOUSE-THIRD-BEDROOM.jpg";
// import img25 from "../../assets/images/voxa/JVT-STUDIO-1.jpg";
// import img26 from "../../assets/images/voxa/LobbyCloseup-Voxa-PP.jpeg";
// import img27 from "../../assets/images/voxa/LobbyMain-Voxa-PP.jpeg";
// import img28 from "../../assets/images/voxa/LobbyOverview-VOXA-PP.jpeg";
// import img29 from "../../assets/images/voxa/OutdoorKidsArea-PP.jpeg";
// import img30 from "../../assets/images/voxa/PantheonJVT_EntranceRoadShot-PP.jpeg"


// type Property = {
//   id: string;
//   name: string;
//   location: string;
//   price: string;
//   image: string; // hero image
//   beds?: number;
//   baths?: number;
//   sqft?: number;
//   type?: "sale" | "rent";
//   category?: string;
//   city?: string;
// };

// const voxa: Property = {
//   id: "voxa-pantheon-jvt",
//   name: "VOXA by Pantheon",
//   location: "JVT, Dubai",
//   price: "AED 799,900",
//   image: voxaCardImg.src,
//   beds: 3,
//   baths: 3,
//   sqft: 1293.39,
//   type: "sale",
//   category: "Apartment",
//   city: "Dubai",
// };

// /** Images: adjust number to match what you place in /public/images/voxa */
// const galleryImages: string[] = [
//     img1.src,
//     img2.src,
//     img3.src,    
//     // img4.src,
//     img5.src,
//     img6.src,
//     img7.src,
//     img8.src,
//     img9.src,
//     img10.src,
//     img11.src,
//     img12.src,
//     img13.src,
//     img14.src,
//     img15.src,
//     img16.src,
//     img17.src,
//     img18.src,
//     img19.src,
//     img20.src,
//     img21.src,
//     img22.src,
//     img23.src,
//     img24.src,    
//     img25.src,
//     img26.src,    
//     img27.src,
//     img28.src,
//     img29.src,
//     img30.src
// ];

// export const dynamic = "force-dynamic";

// export default function VoxaPage() {

//   return (
//     <main className="min-h-screen bg-black text-white">
//       {/* HERO */}
//       <section
//         className="relative bg-neutral-900/60"
//         aria-labelledby="voxa-heading"
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="relative aspect-3/1 w-full overflow-hidden rounded-b-2xl">
//             <Image
//               src={voxa.image}
//               alt={`${voxa.name} hero`}
//               fill
//               priority
//               className="object-cover object-center brightness-75"
//             />
//             <div className="absolute inset-0 flex items-center">
//               <div className="container mx-auto px-6">
//                 <div className="max-w-4xl">
//                   <h1
//                     id="voxa-heading"
//                     className="text-4xl md:text-6xl font-serif font-semibold text-white drop-shadow"
//                   >
//                     {voxa.name}
//                   </h1>
//                   <p className="mt-3 text-neutral-300 text-sm md:text-base">
//                     {voxa.location} •{" "}
//                     <span className="font-medium">{voxa.category}</span>
//                   </p>

//                   <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
//                     <div className="rounded-lg bg-[#0b0b0b]/70 border border-neutral-800 p-4">
//                       <p className="text-xs text-neutral-400">Starting price</p>
//                       <p className="text-2xl font-semibold text-[#cbb58b]">
//                         {voxa.price}
//                       </p>
//                     </div>

//                     <div className="rounded-lg bg-[#0b0b0b]/70 border border-neutral-800 p-4 flex gap-6">
//                       <div className="text-sm">
//                         <div className="text-neutral-400 text-xs">Beds</div>
//                         <div className="font-medium">{voxa.beds}</div>
//                       </div>
//                       <div className="text-sm">
//                         <div className="text-neutral-400 text-xs">Baths</div>
//                         <div className="font-medium">{voxa.baths}</div>
//                       </div>
//                       <div className="text-sm">
//                         <div className="text-neutral-400 text-xs">Size</div>
//                         <div className="font-medium">{voxa.sqft} sqft</div>
//                       </div>
//                     </div>

//                     <div className="ml-auto flex gap-3">
//                       <a
//                         href="#contact"
//                         className="inline-flex items-center gap-2 rounded-md bg-[#cbb58b] px-4 py-2 text-black font-medium shadow"
//                       >
//                         📩 Enquire
//                       </a>
//                       <a
//                         href="/brochures/voxa-brochure.pdf"
//                         className="inline-flex items-center gap-2 rounded-md border border-neutral-700 px-4 py-2 text-sm text-neutral-200"
//                       >
//                         📄 Download Brochure
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CONTENT */}
//       <section className="container mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left / Main */}
//           <article className="lg:col-span-2 space-y-8">
//             {/* Summary */}
//             <div className="prose prose-invert max-w-none text-neutral-300">
//               <h2 className="text-2xl">Project Overview</h2>
//               <p>
//                 <strong>VOXA by Pantheon, at JVT, Dubai</strong>
//               </p>
//               <p>
//                 ▶️ <strong>Connectivity</strong> 💫
//                 <br />
//                 🔸 5min Mall of Emirates &nbsp;|&nbsp; 🔸 20min Downtown Dubai
//                 &nbsp;|&nbsp; 🔸 30min Dubai Airport &nbsp;|&nbsp; 🔸 25min JBR
//               </p>

//               <p>
//                 24+ Amenities in the project. Plus{" "}
//                 <strong>Pet friendly Park 🐶</strong> and an{" "}
//                 <strong>Artificial beach 🏝️</strong>.
//               </p>

//               <p>
//                 🙌 <strong>Payment plan 65/35%</strong>
//                 <br />
//                 ✨ 20% DP + 4% dld
//                 <br />
//                 ✨ 40% - during construction (flexible; monthly/quarterly
//                 options)
//                 <br />
//                 ✨ 5% - on handover
//                 <br />✨ 35% - post handover payment plan for 3 years
//               </p>

//               <p>
//                 ✅ Possible to block unit for{" "}
//                 <strong>10-15 days with 20k AED</strong>
//               </p>

//               <p>
//                 Available 2 options for view:
//                 <br />
//                 🔸 Marina view
//                 <br />
//                 🔸 Golf course view
//               </p>

//               <p>
//                 ▶️ Completion: <strong>Q4 2028</strong>
//                 <br />✨ Service charge: <strong>19 AED / sqft</strong>
//               </p>

//               <div className="mt-4">
//                 <h3 className="text-lg font-semibold">Indicative pricing</h3>
//                 <ul className="list-disc ml-6 mt-2">
//                   <li>Studios from 799,900 AED — 389.12 sqft</li>
//                   <li>1BHK from 1,179,900 AED — 673.07 sqft</li>
//                   <li>2BHK from 1,579,900 AED — 780.06 sqft</li>
//                   <li>3BHK from 2,529,900 AED — 1293.39 sqft</li>
//                 </ul>
//               </div>

//               <p>🏙 Fully furnished apartments with Smart home systems ✨️</p>

//               <p>
//                 📍 <strong>Voxa Project by Pantheon on JVT</strong>
//                 &nbsp;
//                 <a
//                   className="text-[#cbb58b] underline"
//                   href="https://maps.app.goo.gl/Pq9aCN6ReB9WQ5b5A?g_st=ic"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   View on map
//                 </a>
//               </p>

//               <p className="mt-2">
//                 ✨ 360° project view: &nbsp;
//                 <a
//                   className="text-[#cbb58b] underline"
//                   href="https://storage.net-fs.com/hosting/5993079/77/"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   360° walkthrough
//                 </a>
//               </p>
//             </div>

//             {/* Amenities / Highlights */}
//             <div className="bg-[#0d0d0d] border border-neutral-800 rounded-lg p-6">
//               <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-neutral-300">
//                 <div className="p-3 border border-neutral-800 rounded">
//                   <div className="font-medium">24+ Amenities</div>
//                   <div className="text-xs text-neutral-400">
//                     Pools • Gyms • Spa
//                   </div>
//                 </div>
//                 <div className="p-3 border border-neutral-800 rounded">
//                   <div className="font-medium">Pet-friendly park</div>
//                   <div className="text-xs text-neutral-400">Dogs welcome</div>
//                 </div>
//                 <div className="p-3 border border-neutral-800 rounded">
//                   <div className="font-medium">Artificial beach</div>
//                   <div className="text-xs text-neutral-400">Private shore</div>
//                 </div>
//                 <div className="p-3 border border-neutral-800 rounded">
//                   <div className="font-medium">Smart home</div>
//                   <div className="text-xs text-neutral-400">
//                     Fully furnished
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Gallery (client) */}
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Gallery</h3>
//               <LightGallery images={galleryImages} />
//             </div>
//           </article>

//           {/* Right / Sidebar */}
//           <aside className="space-y-6">
//             <div className="bg-[#0b0b0b] rounded-lg border border-neutral-800 p-6">
//               <h4 className="text-lg font-semibold">Quick Facts</h4>
//               <dl className="mt-3 text-sm text-neutral-300 space-y-2">
//                 <div>
//                   <dt className="text-neutral-400">Project</dt>
//                   <dd>{voxa.name}</dd>
//                 </div>
//                 <div>
//                   <dt className="text-neutral-400">Location</dt>
//                   <dd>{voxa.location}</dd>
//                 </div>
//                 <div>
//                   <dt className="text-neutral-400">Completion</dt>
//                   <dd>Q4 2028</dd>
//                 </div>
//                 <div>
//                   <dt className="text-neutral-400">Service charge</dt>
//                   <dd>19 AED / sqft</dd>
//                 </div>
//               </dl>
//             </div>

//             <div className="bg-[#0b0b0b] rounded-lg border border-neutral-800 p-6">
//               <h4 className="text-lg font-semibold">Payment Plan</h4>
//               <ul className="text-sm text-neutral-300 mt-3 space-y-2">
//                 <li>20% DP + 4% dld</li>
//                 <li>40% during construction (flexible)</li>
//                 <li>5% on handover</li>
//                 <li>35% post-handover (up to 3 years)</li>
//                 <li>Block unit for 10–15 days with 20k AED</li>
//               </ul>
//             </div>

//             <div className="bg-[#0b0b0b] rounded-lg border border-neutral-800 p-6">
//               <h4 className="text-lg font-semibold">Contact</h4>
//               <p className="text-sm text-neutral-300">Sales & enquiries</p>
//               <a
//                 id="contact"
//                 href="mailto:sales@youragency.com?subject=VOXA enquiry"
//                 className="mt-3 inline-block rounded-md bg-[#cbb58b] px-4 py-2 text-black font-medium"
//               >
//                 📩 Email the Sales Team
//               </a>
//             </div>
//           </aside>
//         </div>
//       </section>
//     </main>
//   );
// }


import Image from "next/image";
import voxaCardImg from "../../assets/voxa-card-img.jpg";
import LightGallery from "../../components/LightGallery";
import img1 from "../../assets/images/voxa/AmenityBeachShot-PP.jpg";
import img2 from "../../assets/images/voxa/BeachCameraUpdate-PP.jpg";
import img3 from "../../assets/images/voxa/Cinema-PP.jpg";
import img4 from "../../assets/images/voxa/OutdoorKidsArea-PP.jpg";
import img5 from "../../assets/images/voxa/DogPark-PP.jpg";
import img6 from "../../assets/images/voxa/JVT-1BHK-LIVING-2.jpg";
import img7 from "../../assets/images/voxa/JVT-Gym.jpg";
import img8 from "../../assets/images/voxa/JVT-2BHK-LIVING-adjusted.jpg";
import img9 from "../../assets/images/voxa/JVT-PENTHOUSE-FOURTH-BEDROOM.jpg";
import img10 from "../../assets/images/voxa/JVT-PENTHOUSE-LIVING-KITCHEN-DINING-OPEN-SPACE-1.jpg";
import img11 from "../../assets/images/voxa/JVT-PENTHOUSE-LIVING-KITCHEN-DINING-OPEN-SPACE-5.jpg";
import img12 from "../../assets/images/voxa/JVT-PENTHOUSE-MAIN-MASTER-BEDROOM-2.jpg";
import img13 from "../../assets/images/voxa/JVT-PENTHOUSE-MASTER-BATHROOM.jpg";
import img14 from "../../assets/images/voxa/JVT-STUDIO-1.jpg";
import img15 from "../../assets/images/voxa/LobbyCloseup-Voxa-PP.jpg";
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

const voxa: Property = {
  id: "voxa-pantheon-jvt",
  name: "VOXA by Pantheon",
  location: "JVT, Dubai",
  price: "AED 799,900",
  image: voxaCardImg.src,
  beds: 3,
  baths: 3,
  sqft: 1293.39,
  type: "sale",
  category: "Apartment",
  city: "Dubai",
};

const galleryImages: string[] = [
  img1.src, img2.src, img3.src, img4.src, img5.src, img6.src, img7.src,
  img8.src, img9.src, img10.src, img11.src, img12.src, img13.src, img14.src,
  img15.src
];


export default function VoxaPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white pt-20">

      {/* ── HERO: Title + meta bar ── */}
      <section className="border-b border-neutral-800/60">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-6">
          {/* Breadcrumb */}
          <p className="text-xs text-neutral-500 tracking-widest uppercase mb-4">
            Properties &nbsp;/&nbsp; Dubai &nbsp;/&nbsp; JVT
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white leading-tight">
                {voxa.name}
              </h1>
              <p className="mt-2 text-neutral-400 text-sm tracking-wide">
                Jumeirah Village Triangle · Dubai · {voxa.category}
              </p>
            </div>

            {/* Price + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <div className="text-right">
                <p className="text-xs text-neutral-500 uppercase tracking-widest">Starting from</p>
                <p className="text-3xl font-semibold text-[#cbb58b]">{voxa.price}</p>
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
              { label: "Completion", value: "Q4 2028" },
              { label: "Beds", value: `Studio – 3 BHK` },
              { label: "Service charge", value: "19 AED / sqft" },
              { label: "Payment plan", value: "65 / 35%" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-neutral-500 text-xs uppercase tracking-widest">{label}</span>
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
                <strong>VOXA by Pantheon</strong> is a landmark residential development
                in Jumeirah Village Triangle featuring <strong>24+ curated amenities</strong>,
                a private <strong>artificial beach</strong>, a <strong>pet-friendly park</strong>,
                and fully furnished smart-home apartments.
              </p>

              <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { icon: "🏖️", title: "Artificial Beach", sub: "Private shore" },
                  { icon: "🐶", title: "Pet Park", sub: "Dogs welcome" },
                  { icon: "🏋️", title: "24+ Amenities", sub: "Pools · Gym · Spa" },
                  { icon: "🏠", title: "Smart Home", sub: "Fully furnished" },
                ].map(({ icon, title, sub }) => (
                  <div key={title} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-1">{icon}</div>
                    <div className="text-sm font-medium text-white">{title}</div>
                    <div className="text-xs text-neutral-500 mt-0.5">{sub}</div>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold mt-6">Connectivity</h3>
              <div className="not-prose flex flex-wrap gap-3 mt-2 mb-6">
                {[
                  ["Mall of Emirates", "5 min"],
                  ["Downtown Dubai", "20 min"],
                  ["Dubai Airport", "30 min"],
                  ["JBR Beach", "25 min"],
                ].map(([place, time]) => (
                  <div key={place} className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm">
                    <span className="text-[#cbb58b] font-semibold">{time}</span>
                    <span className="text-neutral-400">{place}</span>
                  </div>
                ))}
              </div>

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
                      ["Studio", "799,900 AED", "389.12 sqft"],
                      ["1 BHK", "1,179,900 AED", "673.07 sqft"],
                      ["2 BHK", "1,579,900 AED", "780.06 sqft"],
                      ["3 BHK", "2,529,900 AED", "1,293.39 sqft"],
                    ].map(([type, price, size]) => (
                      <tr key={type} className="text-neutral-300 hover:bg-neutral-900/50 transition-colors">
                        <td className="px-4 py-3 font-medium">{type}</td>
                        <td className="px-4 py-3 text-[#cbb58b]">{price}</td>
                        <td className="px-4 py-3 text-neutral-500">{size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-6">
                ✅ Units can be reserved for 10–15 days with a <strong>20,000 AED</strong> holding deposit.
                Available views: <strong>Marina</strong> &amp; <strong>Golf Course</strong>.
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                <a href="https://maps.app.goo.gl/Pq9aCN6ReB9WQ5b5A?g_st=ic" target="_blank" rel="noreferrer">
                  📍 View on map
                </a>
                <a href="https://storage.net-fs.com/hosting/5993079/77/" target="_blank" rel="noreferrer">
                  ✨ 360° walkthrough
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Quick Facts */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h4 className="text-base font-semibold uppercase tracking-widest text-neutral-400 mb-4">Quick Facts</h4>
              <dl className="space-y-3 text-sm">
                {[
                  ["Project", voxa.name],
                  ["Location", voxa.location],
                  ["Developer", "Pantheon"],
                  ["Completion", "Q4 2028"],
                  ["Service charge", "19 AED / sqft"],
                  ["Furnishing", "Fully furnished"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4 border-b border-neutral-800 pb-2 last:border-0 last:pb-0">
                    <dt className="text-neutral-500">{label}</dt>
                    <dd className="text-neutral-200 text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Payment Plan */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h4 className="text-base font-semibold uppercase tracking-widest text-neutral-400 mb-4">Payment Plan</h4>
              <div className="space-y-3">
                {[
                  { pct: "20%", label: "Down payment + 4% DLD" },
                  { pct: "40%", label: "During construction (flexible)" },
                  { pct: "5%", label: "On handover" },
                  { pct: "35%", label: "Post-handover over 3 years" },
                ].map(({ pct, label }) => (
                  <div key={pct} className="flex items-center gap-3">
                    <span className="text-[#cbb58b] font-semibold text-lg w-12 shrink-0">{pct}</span>
                    <span className="text-neutral-400 text-sm">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-md bg-neutral-800 px-4 py-3 text-xs text-neutral-400">
                Reserve a unit for 10–15 days with <span className="text-white font-medium">20,000 AED</span>
              </div>
            </div>

            {/* Contact */}
            <div id="contact" className="bg-[#cbb58b]/5 border border-[#cbb58b]/20 rounded-xl p-6">
              <h4 className="text-base font-semibold text-[#cbb58b] mb-1">Interested?</h4>
              <p className="text-sm text-neutral-400 mb-4">Our sales team will get back to you within 24 hours.</p>
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