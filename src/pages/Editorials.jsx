import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// 🔥 Auto-import all images inside /src/assets/editorials/
const editorialImports = import.meta.glob(
  "/src/assets/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true, query: "?url", import: "default" }
);

// Convert object → array of image URLs
const editorialImages = Object.values(editorialImports);

export default function Editorials() {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    768: 2,
    500: 2,
  };

  const slides = editorialImages.map((src) => ({
    src: `${src}?auto=format&fit=max&q=95`,
  }));

  return (
    <div className="bg-[#ede3d7] min-h-screen px-4 content-below-navbar">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="font-display mb-12 text-4xl">
          Editorials that blend innovation with artistry.
        </h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Our editorial work blends high-fashion elegance with heartfelt storytelling.
          <br />
          Each project is a celebration of style, vision, and the moments that make it uniquely yours.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {editorialImages.map((img, index) => (
            <div
              key={index}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md"
              onClick={() => {
                setPhotoIndex(index);
                setOpen(true);
              }}
            >
              <img
                src={`${img}?w=800&auto=format&fit=crop&q=90`}
                alt={`Editorial ${index}`}
                loading="lazy"
                className="w-full transition-transform duration-500"
              />
            </div>
          ))}
        </Masonry>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={photoIndex}
        slides={slides}
        animation={{ fade: 300 }}
      />
    </div>
  );
}
