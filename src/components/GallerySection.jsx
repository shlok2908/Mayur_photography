export default function GallerySection() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-display mb-8">Featured Galleries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Gallery items go here */}
        <div className="bg-white/10 h-60 flex items-center justify-center">Album 1</div>
        <div className="bg-white/10 h-60 flex items-center justify-center">Album 2</div>
        <div className="bg-white/10 h-60 flex items-center justify-center">Album 3</div>
      </div>
    </section>
  );
}
