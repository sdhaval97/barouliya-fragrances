const Products = () => {
  const products = [
    {
      id: 1,
      name: "Luxury Eau de Parfum",
      category: "Premium Collection",
      description: "Long-lasting fragrance with floral and woody notes",
      price: "From $80"
    },
    {
      id: 2,
      name: "Fresh Cologne",
      category: "Daily Wear",
      description: "Light and refreshing scent perfect for everyday use",
      price: "From $45"
    },
    {
      id: 3,
      name: "Oriental Oud",
      category: "Exclusive Collection",
      description: "Rich and exotic oud-based fragrance",
      price: "From $120"
    },
    {
      id: 4,
      name: "Floral Bouquet",
      category: "Women's Collection",
      description: "Elegant blend of rose, jasmine, and lily",
      price: "From $65"
    },
    {
      id: 5,
      name: "Sporty Fresh",
      category: "Men's Collection",
      description: "Energetic and invigorating scent for active lifestyle",
      price: "From $55"
    },
    {
      id: 6,
      name: "Gift Sets",
      category: "Special Occasions",
      description: "Beautifully packaged fragrance collections",
      price: "From $90"
    }
  ];

  const services = [
    {
      icon: "🎯",
      title: "Personalized Consultation",
      description: "Get expert advice to find your perfect scent"
    },
    {
      icon: "🎁",
      title: "Gift Wrapping",
      description: "Complimentary elegant gift wrapping service"
    },
    {
      icon: "💝",
      title: "Custom Orders",
      description: "Special orders for exclusive fragrances"
    },
    {
      icon: "🔄",
      title: "Exchange Policy",
      description: "Hassle-free exchange within 7 days"
    }
  ];

  return (
    <section id="products" className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
            Products & Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Explore our exquisite collection of fragrances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-gradient-to-br from-gray-50 to-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
              <div className="text-5xl mb-4">🌸</div>
              <span className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {product.category}
              </span>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {product.name}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {product.description}
              </p>
              <div className="text-xl font-bold text-indigo-600 mb-4">
                {product.price}
              </div>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t-2 border-gray-200">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100 hover:border-indigo-600"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
