import React from "react";
import { Link } from "react-router-dom";
import films from "../data/filmsData.json"; // import from JSON

export default function Films() {
  return (
    <main className="min-h-screen bg-[#ede3d7] pt-[64px] px-4">
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
                {film.videoType === "youtube" ? (
                  <iframe
                    src={film.video}
                    title={film.title}
                    frameBorder="0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <video
                    src={film.video}
                    controls
                    poster={film.thumbnail}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Text Content */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg md:text-xl font-medium">{film.title}</h3>
                <span className="text-sm italic">{film.location}</span>
              </div>

              {/* Description */}
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
