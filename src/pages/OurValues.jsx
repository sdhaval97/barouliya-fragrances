const OurValues = () => {
  return (
    <section id="our-values" className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl sm:text-7xl font-serif text-[#2B3D4F] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Values
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left side - Content */}
          <div className="bg-[#F5E6D3] p-12 rounded-lg space-y-8">
            <h3 className="text-3xl font-serif text-[#2B3D4F] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              CRAFTING NATURE'S ELEGANCE SINCE GENERATIONS
            </h3>

            <p className="text-[#2B3D4F] leading-relaxed text-base text-justify">
              We are working with the vision to serve the industries via our high quality fragrances & perfumes that create value & profitability for our customers, who make us.
            </p>

            <p className="text-[#2B3D4F] leading-relaxed text-base text-justify">
              A natural partner of fragrances, flavors, healthcare and beauty products, the world leader in sustainable natural raw materials, Barouliya fragrancia presents exceptional creativity to brand names around the world, with the strength of an independent industrial group.
            </p>
          </div>

          {/* Right side - Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="h-80 bg-gradient-to-br from-[#D4C4B0] to-[#B8A691] rounded-lg overflow-hidden col-span-2">
              <img src="/images/values-1.jpg" alt="Premium perfume" className="w-full h-full object-cover" />
            </div>
            <div className="h-64 bg-gradient-to-br from-[#D4C4B0] to-[#B8A691] rounded-lg overflow-hidden">
              <img src="/images/values-2.jpg" alt="Fragrance bottle" className="w-full h-full object-cover" />
            </div>
            <div className="h-64 bg-gradient-to-br from-[#D4C4B0] to-[#B8A691] rounded-lg overflow-hidden">
              <img src="/images/values-3.jpg" alt="Luxury perfume" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="h-96 bg-gradient-to-br from-[#D4C4B0] to-[#B8A691] rounded-lg overflow-hidden relative">
            <img src="/images/values-bottom.jpg" alt="Leading fragrance manufacturer" className="w-full h-full object-cover" />
            {/* Decorative stars overlay */}
            <div className="absolute bottom-10 right-10 flex gap-2">
              <span className="text-5xl text-white opacity-60">✦</span>
              <span className="text-4xl text-white opacity-40 mt-8">✦</span>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className="text-[#2B3D4F] leading-relaxed text-lg text-justify">
              We are now one of the leading fragrance manufacturers in India. Over the years, we've perfected the art of delivering the ideal sensorial solution for every market.
            </p>

            {/* Decorative element */}
            <div className="flex items-center justify-end gap-3 mt-8">
              <div className="flex gap-2">
                <span className="text-5xl opacity-40 text-[#2B3D4F]">✦</span>
                <span className="text-4xl opacity-30 text-[#2B3D4F] mt-8">✦</span>
              </div>
            </div>
          </div>
        </div>

        {/* Logo at bottom */}
        <div className="mt-16 flex items-center justify-end gap-6">
          <img src="/images/logo.png" alt="Barouliya Fragrancia" className="h-16" />
          <h3 className="text-4xl font-serif text-[#2B3D4F]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Barouliya fragrancia
          </h3>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
