// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Reels from "../components/reels";

// ✅ Import all albums dynamically
const albums = Object.entries(
  import.meta.glob("../assets/albums/*/cover.{jpg,jpeg,png,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  })
).map(([path, cover]) => {
  const slug = path.split("/")[3]; // "../assets/album/<slug>/cover.jpg"
  return {
    slug,
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    cover,
  };
});

// ✅ Featured albums data
const featuredData = [
  { slug: "DIPPAN & DHIRAL", location: "Udaipur, India" },
  { slug: "LIZA & KARAN", location: "Goa, India" },
  { slug: "HARSH & TULSI", location: "Anand, India" },
];

// ✅ Map featured albums with images
const featuredAlbums = featuredData
  .map((item) => {
    const album = albums.find((a) => a.slug === item.slug);
    if (!album) return null;
    return {
      ...album,
      location: item.location,
    };
  })
  .filter(Boolean);

// ✅ Import hero images dynamically and sort in ascending order
const heroImports = import.meta.glob("../assets/hero/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});
const heroImages = Object.entries(heroImports)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, image]) => image);

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#ede3d7] min-h-screen pb-0 content-below-navbar">

{/* ✅ Centered 16:9 Hero Slideshow */}
<div className="w-full max-w-[1200px] mx-auto aspect-[16/9] overflow-hidden relative flex justify-center items-center py-2 sm:py-0">
  {heroImages.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Slide ${index}`}
      className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
        index === currentIndex ? "opacity-100" : "opacity-0"
      }`}
    />
  ))}
</div>


      {/* ✅ Gallery Grid Section */}
      <section className="pb-16 text-center">
        <h1 className="font-display mb-12 text-3xl mt-6 md:mt-8">
          "Every glance, every tear, every laugh — preserved forever in our
          frames."
        </h1>

        <div className="flex flex-wrap justify-center gap-6 px-4">
          {featuredAlbums.map((item, i) => (
            <Link
              key={i}
              to={`/photography/${item.slug}`}
              className="group relative w-[300px] h-[400px] shadow-md overflow-hidden"
            >
              <img
                src={item.cover}
                alt={item.name}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-beige/80 w-[85%] h-[75%] flex flex-col items-center justify-center text-center shadow-md">
                  <h3 className="text-xl font-display tracking-wide leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-sm font-semibold text-neutral-800 mt-2">
                    {item.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Button */}
        <Link
          to="/photography"
          className="mt-8 inline-block px-8 py-3 bg-[#5C6443] text-[#ede3d7] rounded-xl font-display text-lg tracking-wide hover:opacity-90 transition"
        >
          SEE MORE
        </Link>
      </section>

      {/* ✅ Instagram Reels Section */}
      <Reels />
    </main>
  );
}
