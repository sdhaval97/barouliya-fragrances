const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#4a4237] to-[#655949] bg-clip-text text-transparent">
            Welcome to Barouliya Fragrances
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-700 font-medium mb-6">
            Discover Your Signature Scent
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Experience the art of fine fragrances with our carefully curated collection
            of premium perfumes and scents. Each fragrance tells a unique story.
          </p>
          <button
            onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#4a4237] to-[#655949] text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Explore Our Collection
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
            <p className="text-gray-600 leading-relaxed">Authentic fragrances from renowned brands</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
            <div className="text-5xl mb-4">🎁</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Gift Options</h3>
            <p className="text-gray-600 leading-relaxed">Beautiful packaging for special occasions</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Local Delivery</h3>
            <p className="text-gray-600 leading-relaxed">Fast and reliable delivery service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
