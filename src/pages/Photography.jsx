import { Link } from "react-router-dom";

// 📦 Load all cover images from albums folder
const coverImages = import.meta.glob(
  "/src/assets/albums/*/cover.{jpg,jpeg,png,webp}",
  { eager: true, query: "?url", import: "default" }
);

// 📦 Load all description files from albums folder
const descFiles = import.meta.glob(
  "../assets/albums/*/desc.txt",
  { eager: true, query: "?raw", import: "default" }
);

const albums = Object.entries(coverImages).map(([path, url]) => {
  const parts = path.split("/");
  const slug = parts[parts.length - 2]; // folder name = slug
  
  // Get description from desc.txt file
  const descPath = `../assets/albums/${slug}/desc.txt`;
  const description = descFiles[descPath] || "";

  return {
    slug,
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    cover: url,
    location: "Surat", // 👉 You can make this dynamic too
    description: description.trim(),
  };
});

export default function Photography() {
  return (
    <div className="bg-[#ede3d7] font-bodoni content-below-navbar">
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {albums.map((album) => (
            <Link
              key={album.slug}
              to={`/photography/${album.slug}`}
              className="group block"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Title + Location */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold leading-snug">
                  {album.title}{" "}
                  <span className="text-sm font-normal text-gray-600">
                    {album.location}
                  </span>
                </h3>
                {album.description && (
                  <p className="text-sm text-[#111]/80 mt-2 line-clamp-3">
                    {album.description}
                  </p>
                )}

                <div className="mt-4 font-semibold text-sm group-hover:underline inline-flex items-center gap-1">
                  READ MORE <span className="text-lg">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
