import { Link } from "react-router-dom";

// 📦 Load all cover images from albums folder
const coverImages = import.meta.glob(
  "/src/assets/albums/*/cover.{jpg,jpeg,png,webp}",
  { eager: true, query: "?url", import: "default" }
);

const albums = Object.entries(coverImages)
  .map(([path, url]) => {
    const parts = path.split("/");
    const slug = parts[parts.length - 2]; // folder name = slug

    return {
      slug,
      title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()), // Folder name formatted
      cover: url,
    };
  });

export default function Photography() {
  return (
    <div className="font-bodoni min-h-screen bg-[#f8f5f0] text-[#111]">
     <div className="mt-16 px-4 pt-10 lg:pt-8 pb-4 max-w-6xl mx-auto">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {albums.map((album) => (
            <Link
              key={album.slug}
              to={`/photography/${album.slug}`}
              className="relative block group overflow-hidden"
            >
              {/* Album Cover */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay with Title */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <h2 className="text-white text-lg font-semibold tracking-wide text-center px-2">
                  {album.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
