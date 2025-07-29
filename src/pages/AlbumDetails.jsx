import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// Load all album images
const allAlbumImages = import.meta.glob(
  "/src/assets/albums/*/*.{jpg,jpeg,png,webp}",
  { eager: true, query: "?url", import: "default" }
);

// Load all cover images
const allCovers = import.meta.glob(
  "/src/assets/albums/*/cover.{jpg,jpeg,png,webp}",
  { eager: true, query: "?url", import: "default" }
);

// Group by album
const albumData = {};

for (const path in allAlbumImages) {
  const parts = path.split("/");
  const slug = parts[parts.length - 2];
  const image = allAlbumImages[path];

  if (!albumData[slug]) {
    albumData[slug] = {
      title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      images: [],
      cover: allCovers[`/src/assets/albums/${slug}/cover.webp`] || null,
    };
  }

  if (!path.includes("cover")) {
    albumData[slug].images.push(image);
  }
}

function AlbumDetails() {
  const { slug } = useParams();
  const album = albumData[slug];
  const coverRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  // Smooth parallax effect on scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!coverRef.current) return;
      const scrollY = window.scrollY;
      const limit = coverRef.current.offsetHeight;

      if (!ticking && scrollY <= limit) {
        window.requestAnimationFrame(() => {
          setOffsetY(scrollY / 2);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);

  // Scroll reset when album changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setOffsetY(0);
  }, [slug]);

  if (!album) {
    return (
      <div className="p-8 text-center text-xl text-gray-600">
        Album not found.
      </div>
    );
  }

  return (
    <div className="font-bodoni min-h-screen bg-[#f8f5f0] text-[#111]">
      
      {/* Cover Section with Parallax */}
      {album.cover && (
        <div ref={coverRef} className="relative w-full overflow-hidden h-[80vh]">
          <img
            src={album.cover}
            alt="Cover"
            className="w-full h-full object-cover opacity-80 transition-transform duration-75 ease-out"
            style={{ transform: `translateY(${offsetY}px)` }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <h1 className="text-white text-3xl md:text-5xl font-semibold text-center">
              {album.title}
            </h1>
          </div>
        </div>
      )}

      {/* Photo Grid */}
      <div className="px-4 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {album.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${album.title} ${idx + 1}`}
              className="w-full object-cover rounded shadow-md transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlbumDetails;
