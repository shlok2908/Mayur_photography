import React from "react";

const blogPosts = [
  {
    name: "Chandni & Jainish",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    text: "Working with Oragraphy and especially with Yogi as a friend was amazing. He takes care of everything like a family member. My journey with Yogi started with a hiccup, but I was totally amazed by how the photoshoot pictures turned out. The execution was really worth it.",
  },
  {
    name: "Kit & Shlok",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    text: "Oragraphy is very professional. From the beginning, they understood our needs, and everything zoomed into focus. The pictures were creative and beautiful, making the entire experience enjoyable. I highly recommend them to anyone getting married.",
  },
  {
    name: "Amisha & Priyesh",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    text: "A couple of months before the wedding, we knew Yogi would understand our vision. The photos are stunning and the whole experience was seamless. To future brides and grooms, don’t hesitate—choose Oragraphy.",
  },
];

export default function BlogGrid() {
  return (
    <section className="bg-[#f5f0e8] py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-16">
    {/* Blog Card 1 */}
    <div>
      <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" alt="Wedding 1" className="w-full h-64 object-cover" />
      <p className="text-sm mt-4 tracking-wide text-black">13 FEB, 2025</p>
      <h2 className="text-2xl md:text-3xl font-serif font-light text-black mt-1">
        Piyush Ariva Grand Wedding Celebration
      </h2>
      <p className="text-black mt-2 text-sm leading-relaxed">
        Piyush and Ariva's ten days long wedding celebration wasn’t just a fusion of love, but a powerful tribute...
      </p>
      <p className="text-black font-semibold mt-4 cursor-pointer inline-block hover:underline">
        READ MORE &rarr;
      </p>
    </div>

    {/* Blog Card 2 */}
    <div>
      <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" alt="Wedding 2" className="w-full h-64 object-cover " />
      <p className="text-sm mt-4 tracking-wide text-black">02 JAN, 2024</p>
      <h2 className="text-2xl md:text-3xl font-serif font-light text-black mt-1">
        Parth and Yashvi’s Magical Wedding Journey
      </h2>
      <p className="text-black mt-2 text-sm leading-relaxed">
        In January 2024, we had the privilege of capturing a wedding that was as enchanting as it was personal...
      </p>
      <p className="text-black font-semibold mt-4 cursor-pointer inline-block hover:underline">
        READ MORE &rarr;
      </p>
    </div>

    {/* Add more blog cards as needed below */}
  </div>
</section>

  );
}
