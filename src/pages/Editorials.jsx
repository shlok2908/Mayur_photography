import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const editorialImages = [
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
];

export default function Editorials() {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    768: 2,
    500: 2,
  };

  const slides = editorialImages.map((src) => ({ src: `${src}?auto=format&fit=max&q=95` }));

  return (
    <div className="bg-[#ede3d7] min-h-screen px-4 content-below-navbar">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="font-display mb-12 text-4xl">
          Editorials that blend innovation with artistry.
        </h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Our editorial work blends high-fashion elegance with heartfelt storytelling. Each project is a celebration of style, vision, and the moments that make it uniquely yours.
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
