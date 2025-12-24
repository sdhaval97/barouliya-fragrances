const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
            About Barouliya Fragrances
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Your trusted local fragrance destination
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#4a4237] to-[#655949] bg-clip-text text-transparent">
              Our Story
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              Barouliya Fragrances was founded with a passion for bringing the world's finest
              fragrances to our local community. We believe that the right scent can transform
              your day, boost your confidence, and create lasting memories.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              With years of experience in the fragrance industry, we've built strong relationships
              with premium brands and distributors, ensuring that every bottle we offer is authentic
              and of the highest quality.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#4a4237] to-[#655949] bg-clip-text text-transparent">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To provide our customers with an exceptional fragrance shopping experience, offering
              expert guidance, authentic products, and personalized service that helps everyone
              discover their perfect signature scent.
            </p>
          </div>
        </div>

        <div className="my-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
              <div className="text-5xl mb-4">🌟</div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-3">Authenticity</h4>
              <p className="text-gray-600 leading-relaxed">
                100% genuine fragrances from authorized distributors
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
              <div className="text-5xl mb-4">❤️</div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-3">Customer Care</h4>
              <p className="text-gray-600 leading-relaxed">
                Personalized service and expert fragrance consultation
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
              <div className="text-5xl mb-4">🎖️</div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-3">Quality</h4>
              <p className="text-gray-600 leading-relaxed">
                Premium products that meet the highest standards
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-3">Trust</h4>
              <p className="text-gray-600 leading-relaxed">
                Building lasting relationships with our community
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-lg mt-12">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Why Choose Us?
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="text-gray-700 text-lg p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:bg-gradient-to-r hover:from-[#4a4237] hover:to-[#655949] hover:text-white transition-all duration-300 hover:translate-x-2">
              ✓ Extensive collection of premium and niche fragrances
            </li>
            <li className="text-gray-700 text-lg p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:bg-gradient-to-r hover:from-[#4a4237] hover:to-[#655949] hover:text-white transition-all duration-300 hover:translate-x-2">
              ✓ Expert staff with in-depth fragrance knowledge
            </li>
            <li className="text-gray-700 text-lg p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:bg-gradient-to-r hover:from-[#4a4237] hover:to-[#655949] hover:text-white transition-all duration-300 hover:translate-x-2">
              ✓ Competitive pricing and special promotions
            </li>
            <li className="text-gray-700 text-lg p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:bg-gradient-to-r hover:from-[#4a4237] hover:to-[#655949] hover:text-white transition-all duration-300 hover:translate-x-2">
              ✓ Convenient local service and delivery
            </li>
            <li className="text-gray-700 text-lg p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:bg-gradient-to-r hover:from-[#4a4237] hover:to-[#655949] hover:text-white transition-all duration-300 hover:translate-x-2">
              ✓ Gift wrapping and special occasion packages
            </li>
            <li className="text-gray-700 text-lg p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:bg-gradient-to-r hover:from-[#4a4237] hover:to-[#655949] hover:text-white transition-all duration-300 hover:translate-x-2">
              ✓ Customer satisfaction guarantee
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
