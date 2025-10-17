// app/page.js
export default function HomePage() {
  return (
     <main>
{/* ───── HERO SECTION ───── */}
      <section
        className="relative h-screen flex items-center justify-end"
        style={{
          backgroundImage: "url('/rug-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-3xl px-6 lg:px-12 mr-8 lg:mr-16 text-left">
          <h1 className="text-white text-5xl lg:text-7xl font-heading mb-6">
            Timeless Rugs, Modern Interiors
          </h1>
          <p className="text-white text-lg lg:text-xl mb-6 max-w-xl leading-relaxed">
            Handcrafted with passion and heritage — for homes that appreciate elegance.
          </p>

          <div className="mt-4">
            <a
              href="/collections"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg transition"
            >
              Explore Collection
            </a>
          </div>
        </div>
      </section>

  
      {/* ───── PRODUCT CARDS (CodePen style) ───── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-8">Featured Rugs</h3>

          {/* cards-grid uses the CodePen-like styles in globals.css */}
          <div className="cards-grid">
            <a href="/collections/rug-1" className="card" aria-label="Plush Ice Blue Rug">
              <div className="content">
                <div className="title">Plush Ice Blue Rug</div>
                <div className="copy">$290</div>
                <button className="btn" type="button">View</button>
              </div>
            </a>

            <a href="/collections/rug-2" className="card" aria-label="Mystery Rug">
              <div className="content">
                <div className="title">Mystery Rug</div>
                <div className="copy">$195</div>
                <button className="btn" type="button">View</button>
              </div>
            </a>

            <a href="/collections/rug-3" className="card" aria-label="Mirage Blue & Cream Rug">
              <div className="content">
                <div className="title">Mirage Blue & Cream Rug</div>
                <div className="copy">$390</div>
                <button className="btn" type="button">View</button>
              </div>
            </a>

            <a href="/collections/rug-4" className="card" aria-label="Pebbles Cream Rug">
              <div className="content">
                <div className="title">Pebbles Cream Rug</div>
                <div className="copy">$290</div>
                <button className="btn" type="button">View</button>
              </div>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}