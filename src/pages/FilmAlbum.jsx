import React from 'react';
import { useParams, Link } from 'react-router-dom';

const albums = [
  {
    slug: 'wedding-trailer',
    title: 'Wedding Trailer',
    subtitle: 'We splatter the moments in a brief frame of time, call it a teaser if you may. Summing up the madness and love in one breath, we can’t contain the excitement of it all and the shots are fired!',
    videos: [
      {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        title: 'Amisha & Priyesh',
        poster: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      },
    ],
  },
  {
    slug: 'special-ceremonies',
    title: 'Special Ceremonies',
    subtitle: 'We splatter the moments in a brief frame of time, call it a teaser if you may. Summing up the madness and love in one breath, we can’t contain the excitement of it all and the shots are fired!',
    videos: [
      {
        src: 'https://www.w3schools.com/html/movie.mp4',
        title: 'Kit & Shlok',
        poster: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
      },
    ],
  },
  {
    slug: 'insta-cut',
    title: 'Insta Cut',
    subtitle: 'We splatter the moments in a brief frame of time, call it a teaser if you may. Summing up the madness and love in one breath, we can’t contain the excitement of it all and the shots are fired!',
    videos: [
      {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        title: 'Rishika & Nisarg',
        poster: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
      },
    ],
  },
  {
    slug: 'pre-wedding',
    title: 'Pre - Wedding',
    subtitle: 'We splatter the moments in a brief frame of time, call it a teaser if you may. Summing up the madness and love in one breath, we can’t contain the excitement of it all and the shots are fired!',
    videos: [
      {
        src: 'https://www.w3schools.com/html/movie.mp4',
        title: 'Ameesha & Priyesh',
        poster: 'https://images.unsplash.com/photo-1465101178521-c3a6088bfa3d',
      },
    ],
  },
  {
    slug: 'teaser',
    title: 'Teaser',
    subtitle: 'We splatter the moments in a brief frame of time, call it a teaser if you may. Summing up the madness and love in one breath, we can’t contain the excitement of it all and the shots are fired!',
    videos: [
      {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        title: 'Teaser Video',
        poster: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      },
    ],
  },
];

export default function FilmAlbum() {
  const { album } = useParams();
  const albumData = albums.find(a => a.slug === album);

  if (!albumData) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-display mb-4">Album not found</h1>
        <Link to="/films" className="text-blue-600 underline">Back to Films</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-offwhite text-black py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-display mb-4 text-center">{albumData.title}</h1>
        <p className="mb-8 text-center text-lg font-light max-w-2xl mx-auto">{albumData.subtitle}</p>
        {albumData.videos.map((vid, idx) => (
          <div key={idx} className="mb-10">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-black mb-2">
              <video
                src={vid.src}
                controls
                poster={vid.poster}
                className="w-full h-64 md:h-96 object-cover bg-black"
              />
            </div>
            <div className="text-center text-xl font-display mb-2 text-black">{vid.title}</div>
          </div>
        ))}
        <Link to="/films" className="mt-4 px-6 py-2 bg-black text-white rounded-lg font-display hover:bg-gray-900 transition mx-auto block text-center">Back to Films</Link>
      </div>
    </main>
  );
} 