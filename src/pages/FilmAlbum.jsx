import React from "react";
import { useParams, Link } from "react-router-dom";

// Dummy Film Data
const films = [
  {
    slug: "yashvi-karan-wedding-teaser",
    title: "Yashvi Karan Wedding Teaser",
    location: "Surat",
    date: "Dec 14, 2024",
    description:
      "Enveloped in petals of commitment, the varmala ceremony is a joyous expression of love—a magnificent beginning to a shared journey of dreams and laughter.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://dummyimage.com/1280x720/000/fff&text=Wedding+Teaser",
  },
  {
    slug: "yashvi-karan-boho-night",
    title: "Yashvi Karan Boho Night",
    location: "Surat",
    date: "Dec 12, 2024",
    description:
      "As the sun sets and the stars begin to twinkle, tonight we gather in the spirit of freedom and creativity.",
    video: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://dummyimage.com/1280x720/111/fff&text=Boho+Night",
  },
  {
    slug: "riki-sabrina",
    title: "Riki Sabrina",
    location: "Bali",
    date: "Dec 10, 2024",
    description:
      "Riki and Sabrina's Bali prewedding video teaser is a breathtaking glimpse into their love story.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://dummyimage.com/1280x720/222/fff&text=Riki+Sabrina",
  },
  {
    slug: "sanjay-vini",
    title: "Sanjay x Vini",
    location: "Mumbai",
    date: "Nov 20, 2024",
    description:
      "Sanjay and Vini’s wedding celebration full of joy and vibrant moments.",
    video: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://dummyimage.com/1280x720/333/fff&text=Sanjay+Vini",
  },
];

export default function FilmAlbum() {
  const { album } = useParams();
  const film = films.find((f) => f.slug === album);

  if (!film) {
    return (
      <main className="pt-[64px] min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-display mb-4">Film not found</h1>
        <Link to="/films" className="text-blue-600 underline">
          Back to Films
        </Link>
      </main>
    );
  }

  // All other films except current one
  const suggestions = films.filter((f) => f.slug !== album);

  return (
    <main className="min-h-screen bg-[#ede3d7] text-black pt-[64px] px-4">
      <div className="max-w-5xl mx-auto">
        {/* Main Video */}
        <div className="w-full aspect-video overflow-hidden rounded-xl shadow-lg mb-8">
          <video
            src={film.video}
            controls
            poster={film.thumbnail}
            className="w-full h-full object-cover bg-black"
          />
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

        {/* Prev / Next Navigation */}
        <div className="flex justify-between items-center mb-12 text-lg font-display">
          <div>
            {films.findIndex((f) => f.slug === album) > 0 && (
              <Link
                to={`/films/${
                  films[films.findIndex((f) => f.slug === album) - 1].slug
                }`}
                className="hover:underline"
              >
                ← {films[films.findIndex((f) => f.slug === album) - 1].title}
              </Link>
            )}
          </div>
          <div>
            {films.findIndex((f) => f.slug === album) < films.length - 1 && (
              <Link
                to={`/films/${
                  films[films.findIndex((f) => f.slug === album) + 1].slug
                }`}
                className="hover:underline"
              >
                {films[films.findIndex((f) => f.slug === album) + 1].title} →
              </Link>
            )}
          </div>
        </div>

        {/* Suggestions */}
        <h2 className="text-center text-2xl md:text-4xl font-display mb-8">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {suggestions.map((s, i) => (
            <div key={i} className="flex flex-col">
              <div className="w-full aspect-video overflow-hidden rounded-xl shadow-md mb-4">
                <video
                  src={s.video}
                  controls
                  poster={s.thumbnail}
                  className="w-full h-full object-cover"
                />
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
