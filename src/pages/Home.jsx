const Home = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-b from-white to-[#FAF8F5]">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2000"
            alt="Luxury Fragrance"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 text-6xl text-[#C9A86A] opacity-10 animate-pulse">✦</div>
        <div className="absolute bottom-32 left-16 text-4xl text-[#C9A86A] opacity-10 animate-pulse" style={{ animationDelay: '1s' }}>✦</div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-[#2B3D4F] mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Barouliya Fragrancia
          </h1>

          <p className="text-xl sm:text-2xl text-[#6B7280] mb-8 font-light italic">
            Where heritage meets innovation
          </p>

          <button
            onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center gap-3 bg-[#2B3D4F] text-white px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 mb-12"
          >
            <span className="relative z-10">Explore Our Fragrances</span>
            <svg className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2B3D4F] to-[#3d5268] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          <div className="h-px w-24 bg-[#C9A86A] mx-auto my-8"></div>

          <p className="text-lg sm:text-xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional fragrances for five generations. From the royal courts of Rajasthan
            to global markets, we bring you the art of perfumery perfected over time.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#C9A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="text-xl font-serif mb-2 text-[#2B3D4F]" style={{ fontFamily: "'Playfair Display', serif" }}>
              5 Generations
            </h3>
            <p className="text-[#6B7280] text-sm">
              Legacy of perfumery excellence from Rajasthan & Kannauj
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-serif mb-2 text-[#2B3D4F]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Zero Waste
            </h3>
            <p className="text-[#6B7280] text-sm">
              Sustainable practices, ethical sourcing, eco-conscious manufacturing
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-serif mb-2 text-[#2B3D4F]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Global Reach
            </h3>
            <p className="text-[#6B7280] text-sm">
              Trusted by brands and connoisseurs worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
