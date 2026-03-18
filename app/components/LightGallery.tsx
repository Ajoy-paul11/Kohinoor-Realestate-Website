// "use client";

// import Image from "next/image";
// import { useCallback, useEffect, useState } from "react";

// type Props = {
//   images: string[]; // array of public path strings ("/images/voxa/01.jpg")
// };

// export default function LightGallery({ images }: Props) {
//   const [open, setOpen] = useState(false);
//   const [index, setIndex] = useState(0);

//   const openAt = useCallback((i: number) => {
//     setIndex(i);
//     setOpen(true);
//   }, []);

//   const close = useCallback(() => setOpen(false), []);
//   const prev = useCallback(() => setIndex((s) => (s === 0 ? images.length - 1 : s - 1)), [images.length]);
//   const next = useCallback(() => setIndex((s) => (s === images.length - 1 ? 0 : s + 1)), [images.length]);

//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (!open) return;
//       if (e.key === "Escape") close();
//       if (e.key === "ArrowLeft") prev();
//       if (e.key === "ArrowRight") next();
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [open, close, prev, next]);

//   return (
//     <div>
//       {/* Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//         {images.map((src, i) => (
//           <button
//             key={i}
//             onClick={() => openAt(i)}
//             className="relative block w-full h-40 md:h-48 overflow-hidden rounded-lg"
//             aria-label={`Open image ${i + 1}`}
//           >
//             <img src={src} alt={`VOXA ${i + 1}`} className="object-cover" />
//           </button>
//         ))}
//       </div>

//       {/* Lightbox */}
//       {open && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
//           role="dialog"
//           aria-modal="true"
//         >
//           <button
//             onClick={close}
//             className="absolute top-6 right-6 text-white text-xl p-2"
//             aria-label="Close"
//           >
//             ✕
//           </button>

//           <button
//             onClick={prev}
//             className="absolute left-4 md:left-8 text-white text-3xl p-2"
//             aria-label="Previous"
//           >
//             ‹
//           </button>

//           <div className="max-w-275 w-full max-h-[90vh]">
//             <div className="relative aspect-video w-full">
//               <img src={images[index]} alt={`VOXA ${index + 1}`} className="object-contain" />
//             </div>

//             <div className="mt-4 flex items-center justify-between text-sm text-neutral-300">
//               <div>
//                 {index + 1} / {images.length}
//               </div>
//               <div className="flex gap-3">
//                 <a
//                   href={images[index]}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="underline"
//                 >
//                   Open original
//                 </a>
//                 <button
//                   onClick={() => {
//                     const a = document.createElement("a");
//                     a.href = images[index];
//                     a.download = `voxa-${String(index + 1).padStart(2, "0")}.jpg`;
//                     document.body.appendChild(a);
//                     a.click();
//                     a.remove();
//                   }}
//                 >
//                   Download
//                 </button>
//               </div>
//             </div>
//           </div>

//           <button
//             onClick={next}
//             className="absolute right-4 md:right-8 text-white text-3xl p-2"
//             aria-label="Next"
//           >
//             ›
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useCallback, useEffect, useState } from "react";

type Props = {
  images: string[];
  initialCount?: number;
};

export default function LightGallery({ images, initialCount = 6 }: Props) {
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = showAll ? images : images.slice(0, initialCount);
  const remaining = images.length - initialCount;

  const openAt = useCallback((i: number) => setLightboxIndex(i), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((s) => (s === null || s === 0 ? images.length - 1 : s - 1)),
    [images.length]
  );
  const next = useCallback(
    () => setLightboxIndex((s) => (s === null || s === images.length - 1 ? 0 : s + 1)),
    [images.length]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      {/* ── GRID ── */}
      <div className="grid grid-cols-3 gap-1 md:gap-1.5">
        {visible.map((src, i) => {
          const isLast = !showAll && i === initialCount - 1 && remaining > 0;
          return (
            <button
              key={i}
              onClick={() => isLast ? setShowAll(true) : openAt(i)}
              className={`group relative overflow-hidden hover:cursor-pointer ${
                i === 0 ? " row-span-2" : ""
              } `}
              style={i === 0 ? { aspectRatio: "unset", height: "auto" } : {}}
              aria-label={isLast ? `Show ${remaining} more images` : `View image ${i + 1}`}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />

              {/* "Show more" tile */}
              {isLast && (
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-1">
                  <span className="text-white text-3xl font-light">+{remaining}</span>
                  <span className="text-neutral-300 text-xs tracking-widest uppercase">more photos</span>
                </div>
              )}

              {/* Zoom icon on hover */}
              {!isLast && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15zM10.5 7.5v6m-3-3h6" />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Show All / Show Less toggle */}
      {images.length > initialCount && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="group inline-flex items-center gap-2 border border-neutral-700 hover:border-[#cbb58b] text-neutral-400 hover:text-[#cbb58b] text-sm px-5 py-2.5 rounded-md transition-colors duration-200"
          >
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            {showAll ? "Show less" : `View all ${images.length} photos`}
          </button>
        </div>
      )}

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.93)" }}
          role="dialog"
          aria-modal="true"
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 z-10 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-5 z-10 text-sm text-neutral-500 font-mono tracking-widest">
            {String(lightboxIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-4 md:left-8 z-10 text-neutral-400 hover:text-white transition-colors p-2"
            aria-label="Previous"
          >
            <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Main image */}
          <div className="mx-20 max-w-5xl w-full max-h-[85vh] flex items-center justify-center">
            <img
              key={lightboxIndex}
              src={images[lightboxIndex]}
              alt={`VOXA ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
              style={{ animation: "lb-in 0.2s ease" }}
            />
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-4 md:right-8 z-10 text-neutral-400 hover:text-white transition-colors p-2"
            aria-label="Next"
          >
            <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Filmstrip thumbnails */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 px-6 overflow-x-auto">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className={`shrink-0 w-12 h-8 rounded overflow-hidden transition-all duration-200 ${
                  i === lightboxIndex
                    ? "ring-1 ring-[#cbb58b] opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <style>{`@keyframes lb-in { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }`}</style>
        </div>
      )}
    </>
  );
}