// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Reels from "../components/reels";

// Import all albums with cover image
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
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()), // Default name formatting
    cover,
  };
});

// Choose your featured albums + custom location
const featuredData = [
  { slug: "wedding", location: "Dubai, UAE" },
  { slug: "kit-shlok", location: "Jaipur, India" },
  { slug: "riya-aarav", location: "Udaipur, India" },
];

// Filter + order albums based on featuredData
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

export default function Home() {
  return (
    <main className="bg-[#ede3d7] min-h-screen pb-0 content-below-navbar">
      {/* Hero Video Section */}
      <section className="w-full flex justify-center items-center pb-8">
        <video
          className="w-full h-[60vh] object-cover"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>

      {/* Gallery Grid Section */}
      <section className="pb-16 text-center">
        <h1 className="font-display mb-12 text-3xl">
          "Every glance, every tear, every laugh — preserved forever in our
          frames."
        </h1>

        
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {featuredAlbums.map((item, i) => (
          <Link
            key={i}
            to={`/photography/${item.slug}`} // ✅ matches your App.jsx route
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

      {/* Instagram Reels Section */}
      <Reels />
    </main>
  );
}
