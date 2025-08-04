import React from 'react';
import { Link } from 'react-router-dom';

// Swiper imports for carousels
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Automatically import all images from the gallery folder
const galleryImages = Object.values(
  import.meta.glob('../assets/gallery/*/cover.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })
);

const dummyReels = [
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1465101178521-c3a6088bfa3d',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
];



export default function Home() {
  return (
    <main className="pb-0">
      {/* Hero Video Section */}
      <section className="w-full flex justify-center items-center pt-[64px] pb-8">
        <video
          className="w-full h-[60vh]  object-cover"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>

    {/* Gallery Grid Section */}
<section className="pb-16 text-center">
  <h1 className="text-3xl md:text-4xl font-display mb-12">
    Here is a curated collection of our weddings
  </h1>

  <div className="flex flex-wrap justify-center gap-6 px-4">
    {[
      {
        src: "https://unsplash.it/400/500?image=1005",
        name: "Amisha & Priyesh",
        location: "Dubai, UAE",
      },
      {
        src: "https://unsplash.it/400/500?image=1027",
        name: "Kit & Shlok",
        location: "Jaipur, India",
      },
      {
        src: "https://unsplash.it/400/500?image=1035",
        name: "Riya & Aarav",
        location: "Udaipur, India",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="group relative w-[300px] h-[400px] shadow-md overflow-hidden"
      >
        {/* Background Image */}
        <img
          src={item.src}
          alt={item.name}
          className="object-cover w-full h-full"
        />
      {/* Hover Card */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="bg-white/80 w-[85%] h-[75%] flex flex-col items-center justify-center text-center shadow-md">
            <h3 className="text-xl font-display text-black tracking-wide leading-tight">
              {item.name}
            </h3>
            <p className="text-sm font-semibold text-neutral-800 mt-2">
              {item.location}
            </p>
          </div>
        </div>
      </div>
      ))}
      </div>

  {/* Button */}
  <Link
  to="/photography"
  className="mt-8 inline-block px-8 py-3 bg-black text-white rounded-xl font-display text-lg tracking-wide hover:bg-gray-900 transition"
>
  SEE MORE
</Link>
</section>


      {/* Instagram Reels Section */}
      <section className="py-16 bg-[#ededed] text-center">
        <h2 className="text-3xl md:text-4xl font-display mb-2">
          INSTAGRAM <span className="italic font-serif">reels</span>
        </h2>
        <p className="mb-8 text-lg font-light">
          We splatter the moments in a brief frame of time, call it a teaser if you may
        </p>

        {/* Desktop: show all reels in a row */}
        <div className="hidden md:flex gap-6 px-4 md:px-16 pb-4 justify-center items-stretch">
          {dummyReels.map((src, i) => (
            <div
              key={i}
              className="relative min-w-[220px] max-w-[260px] aspect-[9/16] bg-gray-300 rounded-xl overflow-hidden shadow"
            >
              <img src={src} alt="Reel" className="object-cover w-full h-full" />
              <button className="absolute inset-0 flex items-center justify-center">
                <span className="bg-black/60 rounded-full p-3">
                  <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Mobile: Swiper carousel */}
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
            {dummyReels.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative aspect-[9/16] w-full bg-gray-200 rounded-xl overflow-hidden shadow">
                  <img src={src} alt="Reel" className="object-cover w-full h-full" />
                  <button className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black/60 rounded-full p-3">
                      <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}
