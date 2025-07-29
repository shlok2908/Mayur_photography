export default function StorySection() {
  return (
    <section className="py-20 px-6 bg-white/5">
      <h2 className="text-3xl font-display mb-8">Latest Stories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Story cards go here */}
        <div className="bg-white/10 p-6 rounded-lg">Story 1</div>
        <div className="bg-white/10 p-6 rounded-lg">Story 2</div>
        <div className="bg-white/10 p-6 rounded-lg">Story 3</div>
      </div>
    </section>
  );
}
