import React, { useState, useEffect } from "react";

// Dynamically import all MP4 files from assets/reels
const reelVideos = import.meta.glob("../assets/reels/*.mp4", { eager: true });

export default function Reels() {
  const videos = Object.values(reelVideos).map((video) => video.default);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <div className="w-full text-center py-6">
      <h2 className="text-4xl font-bold mb-6">
        INSTAGRAM <span className="italic font-serif">reels</span>
      </h2>
      <p className="mb-8 text-2xl font-light">"A glimpse into forever."</p>

      {/* Mobile Carousel */}
      <div className="md:hidden relative w-full px-4"> {/* px-4 adds side space */}
        <div className="max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg">
          <video
            key={currentIndex}
            src={videos[currentIndex]}
            controls
            loop
            muted
            playsInline
            className="w-full aspect-[9/16] object-cover"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() =>
            setCurrentIndex(
              (prev) => (prev - 1 + videos.length) % videos.length
            )
          }
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % videos.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          ›
        </button>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid gap-6 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-4">
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            controls
            loop
            muted
            playsInline
            className="w-full aspect-[9/16] rounded-lg shadow-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
}