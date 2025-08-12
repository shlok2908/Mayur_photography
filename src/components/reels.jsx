// src/components/Reels.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const dummyReels = [
  "https://www.instagram.com/reel/DM2mC22IJkU/",
  "https://www.instagram.com/reel/DMfQzHYS95-/",
  "https://www.instagram.com/reel/DCbMcRBoT-Y/",
  "https://www.instagram.com/reel/DDKEZT0onnd/",
];

export default function Reels() {
  return (
    <section className="py-16 bg-[#ede3d7] text-center">
      <h2 className="text-3xl md:text-4xl font-display mb-2">
        INSTAGRAM <span className="italic font-serif">reels</span>
      </h2>
      <p className="mb-8 text-2xl font-light">"A glimpse into forever."</p>

      {/* Desktop View */}
      <div className="hidden md:flex gap-6 px-4 md:px-16 pb-4 justify-center items-stretch">
        {dummyReels.map((link, i) => {
          const cleanLink = link.split("?")[0];
          const embedUrl = cleanLink.endsWith("/")
            ? cleanLink + "embed"
            : cleanLink + "/embed";

          return (
            <div
              key={i}
              className="relative min-w-[220px] max-w-[260px] aspect-[9/16] rounded-xl overflow-hidden shadow"
            >
              <iframe
                src={embedUrl}
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allow="encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </div>
          );
        })}
      </div>

      {/* Mobile Swiper */}
      <div className="block md:hidden w-full max-w-xs mx-auto relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          style={{ paddingBottom: 40 }}
        >
          {dummyReels.map((link, i) => {
            const cleanLink = link.split("?")[0];
            const embedUrl = cleanLink.endsWith("/")
              ? cleanLink + "embed"
              : cleanLink + "/embed";

            return (
              <SwiperSlide key={i}>
                <div className="relative aspect-[9/16] w-full rounded-xl overflow-hidden shadow">
                  <iframe
                    src={embedUrl}
                    className="w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allow="encrypted-media; fullscreen; picture-in-picture"
                  ></iframe>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
