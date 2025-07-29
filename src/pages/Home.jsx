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

const dummyTestimonials = [
  {
    name: 'Hiral & Nipun',
    text: 'I always believed that a team creates magic, and after looking at all the wedding pictures, I knew I made the right choice. I relive the moments over and over again!',
  },
  {
    name: 'Aayushi & Avneesh',
    text: "Team Ora’s work doesn't just capture moments; it encapsulates the very essence of our love and joy, leaving with butterflies fluttering in our hearts.",
  },
  {
    name: 'Jayati & Anurag',
    text: 'They managed to capture every moment and made every effort to go above and beyond what was necessary. Having them photograph our wedding is like having our family take pictures for us.',
  },
];

export default function Home() {
  return (
    <main className="pb-0">
      {/* Hero Video Section */}
      <section className="w-full flex justify-center items-center pt-20 pb-8">
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
          {galleryImages.map((src, i) => {
            const match = src.match(/gallery\/([^/]+)\/cover/i);
            let folderName = match ? decodeURIComponent(match[1]).replace(/-/g, ' ') : 'Gallery';
            folderName = folderName.replace(/\b\w/g, (c) => c.toUpperCase());

            const location = "Jaipur, India"; // Replace with dynamic if needed

            return (
              <div
                key={i}
                className="group relative w-[300px] h-[375px]  shadow-md"
              >
                {/* Background Image */}
                <img
                  src={src}
                  alt={folderName}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Card */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/90 p-6 text-center rounded-sm shadow-lg w-[85%]">
                    <h3 className="text-xl font-display text-black capitalize tracking-wide leading-tight">
                      {folderName}
                    </h3>
                    <p className="text-sm font-semibold text-neutral-800 mt-1">
                      {location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Button */}
        <button className="mt-8 px-8 py-3 bg-black text-white rounded-xl font-display text-lg tracking-wide hover:bg-gray-900 transition">
          SEE MORE
        </button>
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

      {/* Testimonials ("Client Love") Section */}
      <section className="bg-[#c7c9bd] min-h-[220px] py-12 flex justify-center items-center">
        <div className="w-full max-w-4xl px-4 text-center">
          {/* Heading */}
          <h2 className="font-display text-lg md:text-2xl tracking-widest uppercase font-semibold text-black mb-6">
            CLIENT <span className="font-serif italic text-2xl md:text-3xl align-middle normal-case">love</span>
          </h2>

          {/* Swiper (1 testimonial per view always) */}
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
            allowTouchMove
            className="w-full"
          >
            {dummyTestimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="text-black px-2 sm:px-8">
                  <p className="text-[15px] sm:text-[16px] font-medium leading-relaxed text-center">
                    {t.text}
                  </p>
                  <div className="mt-4 font-display text-sm sm:text-base font-semibold">
                    {t.name}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-swiper-pagination mt-6 flex justify-center gap-2" />
        </div>
      </section>


    {/* Instagram Section Start */}
<div className="w-full bg-white pt-12 pb-4 px-4 md:px-20">

  <h2 className="text-center text-xl font-medium mb-6">Follow us on Instagram</h2>

  {/* Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="aspect-square overflow-hidden rounded-md">
      <img
        src="https://unsplash.it/400/400?image=1011"
        alt="Instagram 1"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="aspect-square overflow-hidden rounded-md">
      <img
        src="https://unsplash.it/400/400?image=1025"
        alt="Instagram 2"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="aspect-square overflow-hidden rounded-md">
      <img
        src="https://unsplash.it/400/400?image=1031"
        alt="Instagram 3"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="aspect-square overflow-hidden rounded-md">
      <img
        src="https://unsplash.it/400/400?image=1050"
        alt="Instagram 4"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
  </div>

  {/* Button */}
  <div className="text-center mt-8">
    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-black text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-800 transition"
    >
      FOLLOW US
    </a>
  </div>
</div>
{/* Instagram Section End */}

    </main>
  );
}
