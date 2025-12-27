const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#C9A86A] text-sm font-medium tracking-wider uppercase">Our Story</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#2B3D4F] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Five Generations of Excellence
          </h2>
          <div className="h-px w-24 bg-[#C9A86A] mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/Kannauj-Perfume-Making-PradeepGaurs-Shutterstock_2048x2048.png"
                alt="Kannauj Traditional Perfume Making"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F5E6D3] rounded-lg -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <p className="text-lg text-[#4B5563] leading-relaxed">
              From the <span className="font-semibold text-[#2B3D4F]">royal courts of Rajasthan</span> to the
              <span className="font-semibold text-[#2B3D4F]"> legendary ateliers of Kannauj</span>, our family has been
              crafting exceptional fragrances for over five generations.
            </p>

            <p className="text-lg text-[#4B5563] leading-relaxed">
              Founded by Rajesh and Jyoti Barouliya, we bridge centuries of traditional artistry with cutting-edge
              innovation, creating fragrances that tell stories and evoke emotions.
            </p>

            <p className="text-lg text-[#4B5563] leading-relaxed">
              Every drop we create carries the essence of our heritage—a testament to the timeless art of perfumery
              passed down through generations.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="relative group">
            <div className="aspect-square rounded-lg overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1587556930530-67a4de636386?q=80&w=800"
                alt="Sustainability"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-serif mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Sustainability</h3>
                <p className="text-sm opacity-90">Zero-waste philosophy</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-square rounded-lg overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1596704017254-9b121068ec31?q=80&w=800"
                alt="Quality"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-serif mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Quality</h3>
                <p className="text-sm opacity-90">Rigorous testing & refinement</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-square rounded-lg overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800"
                alt="Innovation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-serif mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Innovation</h3>
                <p className="text-sm opacity-90">Modern meets traditional</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-br from-[#F5E6D3] to-[#FAF8F5] rounded-xl p-12 text-center">
          <div className="text-6xl text-[#C9A86A] mb-6">"</div>
          <blockquote className="text-2xl sm:text-3xl font-serif text-[#2B3D4F] mb-6 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            Every fragrance we create is a bridge between past and present,
            tradition and innovation, nature and artistry.
          </blockquote>
          <div className="h-px w-16 bg-[#C9A86A] mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
