import React from "react";
import { useParams, Link } from "react-router-dom";

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
  const descPath = `/src/assets/blogs/${slug}/desc.txt`;
  const content = blogDescs[descPath] || "";
  const excerpt = content.split("\n")[0] || "";

  return {
    slug,
    cover,
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    content,
    excerpt,
  };
});

export default function BlogDetails() {
  const { slug } = useParams();
  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center content-below-navbar">
        <h1 className="text-2xl font-display mb-4">Blog post not found</h1>
        <Link to="/blog" className="text-blue-600 underline">
          Back to Blog
        </Link>
      </main>
    );
  }

  const suggestions = blogPosts.filter((post) => post.slug !== slug);

  return (
    <main className="min-h-screen bg-[#ede3d7] px-4 content-below-navbar">
      <div className="max-w-5xl mx-auto">
        {/* Main Blog Image */}
        <div className="w-full aspect-[16/9] overflow-hidden rounded-xl shadow-lg mb-8">
          <img
            src={blogPost.cover}
            alt={blogPost.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blog Info */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-display mb-6">
            {blogPost.title}
          </h1>
          <div className="prose prose-lg max-w-none">
            {blogPost.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-base text-gray-800 leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <>
            <h2 className="text-center text-2xl md:text-4xl font-display mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {suggestions.map((post, i) => (
                <div key={i} className="flex flex-col">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md mb-4">
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-lg font-medium hover:underline mb-2"
                  >
                    {post.title}
                  </Link>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
