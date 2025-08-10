import React from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogData.json";

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
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blog Info */}
        <div className="mb-12">
          <p className="text-sm tracking-wide text-black mb-4">{blogPost.date}</p>
          <h1 className="text-3xl md:text-5xl font-display mb-6">
            {blogPost.title}
          </h1>
          <div className="prose prose-lg max-w-none">
            {blogPost.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-base text-gray-800 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        <h2 className="text-center text-2xl md:text-4xl font-display mb-8">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {suggestions.map((post, i) => (
            <div key={i} className="flex flex-col">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm tracking-wide text-black mb-2">{post.date}</p>
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
      </div>
    </main>
  );
}
