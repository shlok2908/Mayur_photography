import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogData.json";

export default function BlogGrid() {
  return (
    <section className="bg-[#ede3d7] py-16 content-below-navbar">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-16">
        {blogPosts.map((post, index) => (
          <div key={index}>
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-64 object-cover" 
            />
            <p className="text-sm mt-4 tracking-wide text-black">{post.date}</p>
            <h2 className="text-2xl md:text-3xl font-serif font-light text-black mt-1">
              {post.title}
            </h2>
            <p className="text-black mt-2 text-sm leading-relaxed">
              {post.excerpt}
            </p>
            <Link 
              to={`/blog/${post.slug}`}
              className=" font-semibold mt-4 cursor-pointer inline-block hover:underline"
            >
              READ MORE &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
