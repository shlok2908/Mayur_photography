import { useParams } from "react-router-dom";
import { useEffect } from "react";

// Load all album images
const allAlbumImages = import.meta.glob(
  "/src/assets/albums/*/*.{jpg,jpeg,png,webp}",
  { eager: true, query: "?url", import: "default" }
);

// Load all cover images (not displayed, but can be used if needed)
const allCovers = import.meta.glob(
  "/src/assets/albums/*/cover.{jpg,jpeg,png,webp}",
  { eager: true, query: "?url", import: "default" }
);

// Organize albums
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

  // Scroll reset on album change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!album) {
    return (
      <div className="p-8 text-center text-xl text-gray-600">
        Album not found.
      </div>
    );
  }

  return (
    <div className="font-bodoni min-h-screen bg-[#ede3d7] content-below-navbar">

      {/* Album Title */}
      <div className="w-full py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">{album.title}</h1>
      </div>

      {/* Photo Masonry Grid */}
      <div className="px-4 pb-12 max-w-6xl mx-auto">
        <div className="columns-2 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {album.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${album.title} ${idx + 1}`}
              className="w-full mb-4 break-inside-avoid duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlbumDetails;
