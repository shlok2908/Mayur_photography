import React from "react";
import { useParams, Link } from "react-router-dom";
import films from "../data/filmsData.json"; // import same JSON

export default function FilmAlbum() {
  const { album } = useParams();
  const film = films.find((f) => f.slug === album);

  if (!film) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center content-below-navbar">
        <h1 className="text-2xl font-display mb-4">Film not found</h1>
        <Link to="/films" className="text-blue-600 underline">
          Back to Films
        </Link>
      </main>
    );
  }

  const suggestions = films.filter((f) => f.slug !== album);

  return (
    <main className="min-h-screen bg-[#ede3d7] px-4 content-below-navbar">
      <div className="max-w-5xl mx-auto">
        {/* Main Video */}
        <div className="w-full aspect-video overflow-hidden rounded-xl shadow-lg mb-8">
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

        {/* Film Info */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-display mb-4">
            {film.title}
          </h1>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">{film.location}</span>{" "}
            <span className="text-gray-500">{film.date}</span>
          </p>
          <p className="text-base text-gray-800 leading-relaxed">
            {film.description}
          </p>
        </div>

        {/* Suggestions */}
        <h2 className="text-center text-2xl md:text-4xl font-display mb-8">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {suggestions.map((s, i) => (
            <div key={i} className="flex flex-col">
              <div className="w-full aspect-video overflow-hidden rounded-xl shadow-md mb-4">
                {s.videoType === "youtube" ? (
                  <iframe
                    src={s.video}
                    title={s.title}
                    frameBorder="0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <video
                    src={s.video}
                    controls
                    poster={s.thumbnail}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <Link
                to={`/films/${s.slug}`}
                className="text-lg font-medium hover:underline"
              >
                {s.title}
              </Link>
              <p className="text-sm text-gray-600">{s.location}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
