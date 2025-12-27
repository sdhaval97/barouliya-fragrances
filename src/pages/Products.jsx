const Products = () => {
  const productCategories = [
    {
      id: 1,
      category: "Personal Care",
      icon: "🧴",
      products: ["Handwash", "Hand sanitizer", "Wet wipes", "Hair oil", "Shampoo", "Hair conditioner", "Body wash", "Toilet soap"]
    },
    {
      id: 2,
      category: "Beauty Care",
      icon: "💄",
      products: ["Body lotion", "Face cream", "Facial scrub", "Makeup preparation", "Nail polish remover", "Talcum powder", "Hair gel & cream", "Shaving Preparation"]
    },
    {
      id: 3,
      category: "Fabric Care",
      icon: "👕",
      products: ["Detergent powder", "Detergent cake", "Laundry soap", "Fabric softener", "Liquid detergent"]
    },
    {
      id: 4,
      category: "Home Care",
      icon: "🏠",
      products: ["Dishwash paste/powder", "Dishwash bar", "Dishwash liquid", "Disinfectants", "Household cleaner"]
    },
    {
      id: 5,
      category: "Air Care",
      icon: "🕯️",
      products: ["Scented candles", "Room freshener", "Incense stick", "Reed diffuser"]
    },
    {
      id: 6,
      category: "Fine Fragrances",
      icon: "💎",
      products: ["Deodorant", "Roll-on", "Eau de parfum", "Eau de toilette"]
    },
    {
      id: 7,
      category: "Specialty",
      icon: "✨",
      products: ["Scented Papers", "Aroma for wall paints", "Scented pen inks", "Scented Artificial Flowers"]
    }
  ];

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#C9A86A] text-sm font-medium tracking-wider uppercase">Our Products</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#2B3D4F] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Fragrance Solutions for Every Industry
          </h2>
          <div className="h-px w-24 bg-[#C9A86A] mx-auto mb-8"></div>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
            From personal care to specialty applications, we create bespoke fragrances that elevate your products
            and captivate your customers.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-gradient-to-br from-white to-[#FAF8F5] border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-serif text-[#2B3D4F]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {category.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.products.map((product, index) => (
                  <li key={index} className="text-[#6B7280] text-sm flex items-start group/item">
                    <span className="text-[#C9A86A] mr-2 mt-1 text-xs">▪</span>
                    <span className="group-hover/item:text-[#2B3D4F] transition-colors duration-200">{product}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#2B3D4F] to-[#3d5268] p-12 text-center text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-serif mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Looking for Custom Formulations?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Our team of expert perfumers can create unique, tailor-made fragrances specifically designed for your brand.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#2B3D4F] px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
