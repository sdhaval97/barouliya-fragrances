const WhatWeDo = () => {
  const capabilities = [
    {
      icon: "🧪",
      title: "R&D Excellence",
      description: "State-of-the-art laboratory with expert perfumers crafting innovative formulations"
    },
    {
      icon: "🔬",
      title: "Quality Testing",
      description: "Rigorous GC analysis and olfactive evaluation ensuring premium standards"
    },
    {
      icon: "🎨",
      title: "Custom Solutions",
      description: "Bespoke fragrances tailored to your brand's unique identity and vision"
    },
    {
      icon: "🌱",
      title: "Sustainable Process",
      description: "Zero-waste methodology from raw materials to final product"
    }
  ];

  return (
    <section id="what-we-do" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#C9A86A] text-sm font-medium tracking-wider uppercase">Our Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#2B3D4F] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Crafting Scents That Inspire
          </h2>
          <div className="h-px w-24 bg-[#C9A86A] mx-auto mb-8"></div>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
            We transform emotions into fragrances. Each creation is a carefully orchestrated blend of art and science,
            designed to captivate and create lasting impressions.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {capabilities.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-serif text-[#2B3D4F] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-[#C9A86A] opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Industry Applications */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-lg">
          <h3 className="text-3xl font-serif text-[#2B3D4F] mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Industries We Serve
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {['Personal Care', 'Beauty', 'Home Care', 'Fabric Care', 'Air Care', 'Fine Fragrance', 'Specialty'].map((industry, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-gradient-to-br from-[#FAF8F5] to-[#F5E6D3] hover:shadow-md transition-all duration-300">
                <p className="text-sm font-medium text-[#2B3D4F]">{industry}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-[#6B7280] mb-6">
            Ready to create something extraordinary together?
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center gap-3 bg-[#2B3D4F] text-white px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <span className="relative z-10">Start a Conversation</span>
            <svg className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
