import React from 'react';
import { Link } from 'react-router-dom';

const heroVideo = 'https://www.w3schools.com/html/mov_bbb.mp4';

const albums = [
  {
    slug: 'wedding-trailer',
    title: 'Wedding Trailer',
    cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
  {
    slug: 'insta-cut',
    title: 'Insta Cut',
    cover: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  },
  {
    slug: 'special-ceremonies',
    title: 'Special Ceremonies',
    cover: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
  },
  {
    slug: 'pre-wedding',
    title: 'Pre Wedding Trailer',
    cover: 'https://images.unsplash.com/photo-1465101178521-c3a6088bfa3d',
  },
  {
    slug: 'teaser',
    title: 'Teaser',
    cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
];

export default function Films() {
  return (
    <main className="min-h-screen bg-offwhite text-black pt-[64px] px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Video */}
        <div className="w-full aspect-video overflow-hidden shadow-lg mb-10">
          <video
            src={heroVideo}
            controls
            autoPlay
            muted
            loop
            className="w-full h-full object-cover bg-black"
            poster="https://dummyimage.com/1280x720/000/fff&text=Films+Hero+Video"
          />
        </div>

        {/* Custom Album Grid */}
        <div className="grid grid-cols-2 grid-rows-3 gap-4 mb-12" style={{gridTemplateRows: 'repeat(3, 140px)'}}>
          {/* Top left */}
          <Link to="/films/wedding-trailer" className="relative group rounded-tl-2xl overflow-hidden shadow-lg cursor-pointer">
            <img src={albums[0].cover} alt={albums[0].title} className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-2">
              <span className="text-white font-display text-base md:text-lg drop-shadow-lg group-hover:underline">{albums[0].title}</span>
            </div>
          </Link>
          {/* Top right (tall, rounded top-right) */}
          <Link to="/films/insta-cut" className="relative group row-span-2 rounded-tr-[48px] overflow-hidden shadow-lg cursor-pointer">
            <img src={albums[1].cover} alt={albums[1].title} className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-2">
              <span className="text-white font-display text-base md:text-lg drop-shadow-lg group-hover:underline">{albums[1].title}</span>
            </div>
          </Link>
          {/* Middle left */}
          <Link to="/films/special-ceremonies" className="relative group rounded-bl-2xl overflow-hidden shadow-lg cursor-pointer">
            <img src={albums[2].cover} alt={albums[2].title} className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-2">
              <span className="text-white font-display text-base md:text-lg drop-shadow-lg group-hover:underline">{albums[2].title}</span>
            </div>
          </Link>
          {/* Bottom right (wide, rounded bottom-right) */}
          <Link to="/films/pre-wedding" className="relative group col-span-2 rounded-b-2xl overflow-hidden shadow-lg cursor-pointer row-span-1 col-span-1">
            <img src={albums[4].cover} alt={albums[4].title} className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-2">
              <span className="text-white font-display text-base md:text-lg drop-shadow-lg group-hover:underline">{albums[4].title}</span>
            </div>
          </Link>
      
        </div>
      </div>
    </main>
  );
}