import React from "react";
import { Link } from "react-router-dom";

// Load all blog cover images
const blogCovers = import.meta.glob(
  "/src/assets/blogs/*/cover.{jpg,jpeg,png,webp}",
  { eager: true, query: "?url", import: "default" }
);

// Load all description files
const blogDescs = import.meta.glob(
  "/src/assets/blogs/*/desc.txt",
  { eager: true, query: "?raw", import: "default" }
);

// Prepare dynamic blog posts
const blogPosts = Object.entries(blogCovers).map(([path, cover]) => {
  const parts = path.split("/");
  const slug = parts[parts.length - 2];

  const descriptionPath = `/src/assets/blogs/${slug}/desc.txt`;
  const description = blogDescs[descriptionPath] || "";

  // Optional: first line of desc as excerpt
  const excerpt = description.split("\n")[0] || "";

  return {
    slug,
    cover,
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    excerpt,
  };
});

export default function BlogGrid() {
  return (
    <section className="bg-[#ede3d7] py-16 content-below-navbar">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-16">
        {blogPosts.map((post, index) => (
          <div key={index}>
            <img 
              src={post.cover} 
              alt={post.title} 
              className="w-full h-64 object-cover" 
            />
            <h2 className="text-2xl md:text-3xl font-serif font-light text-black mt-4">
              {post.title}
            </h2>
            <p className="text-black mt-2 text-sm leading-relaxed">
              {post.excerpt}
            </p>
            <Link 
              to={`/blog/${post.slug}`}
              className="font-semibold mt-4 cursor-pointer inline-block hover:underline"
            >
              READ MORE &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
