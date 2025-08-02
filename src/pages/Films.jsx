import React from "react";
import { Link } from "react-router-dom";

const films = [
  {
    slug: "yashvi-karan-boho-night",
    title: "Yashvi Karan Boho Night",
    location: "Surat",
    description:
      "As the sun sets and the stars begin to twinkle, tonight we gather in the spirit of freedom and creativity. With Yashvi Karan leading the way, we embrace the magic of the night.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=Yashvi+Karan+Boho",
  },
  {
    slug: "yashvi-karan-wedding-teaser",
    title: "Yashvi Karan Wedding Teaser",
    location: "Surat",
    description:
      "Enveloped in petals of commitment, the varmala ceremony is a joyous expression of love—a magnificent beginning to a shared journey of dreams and laughter.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=Wedding+Teaser",
  },
  {
    slug: "riki-sabrina",
    title: "Riki Sabrina",
    location: "Bali",
    description:
      "Riki and Sabrina's Bali prewedding video teaser is a breathtaking glimpse into their love story. Set against the backdrop of a stunning beachside, the golden sands and blue waves embrace their romance.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=Riki+Sabrina",
  },
];

export default function Films() {
  return (
    <main className="min-h-screen bg-[#ede3d7] text-black pt-[64px] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-display mb-12">
          Unforgettable Moments, Timeless Films
        </h2>

        {/* Films Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {films.map((film, index) => (
            <div key={index} className="flex flex-col">
              {/* Video */}
              <div className="w-full aspect-video overflow-hidden shadow-lg mb-4">
                <video
                  src={film.video}
                  controls
                  poster={film.thumbnail}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg md:text-xl font-medium">{film.title}</h3>
                <span className="text-sm italic">{film.location}</span>
              </div>

              {/* Description with line clamp */}
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 line-clamp-3">
                {film.description}
              </p>

              <Link
                to={`/films/${film.slug}`}
                className="text-sm font-semibold uppercase tracking-wide flex items-center gap-2 hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
