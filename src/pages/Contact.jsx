import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen bg-[#F5E6D3]">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-6 mb-8">
            <img src="/images/logo_with_name.png" alt="Barouliya Fragrancia" className="h-16" />
          </div>
          <h3 className="text-4xl sm:text-5xl font-serif text-[#2B3D4F] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Contact Us
          </h3>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-2">
              <span className="text-4xl opacity-40">✦</span>
              <span className="text-3xl opacity-30 mt-6">✦</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#2B3D4F] to-[#3d5268] p-10 rounded-2xl text-white shadow-xl">
            <h3 className="text-3xl font-serif mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Let's Connect</h3>
            <p className="text-lg leading-relaxed mb-8 opacity-95">
              Whether you're looking for custom formulations or have questions about our products,
              we're here to help bring your fragrance vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="text-4xl flex-shrink-0">📍</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Location</h4>
                  <p className="leading-relaxed opacity-90">
                    Thane, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="text-4xl flex-shrink-0">✉️</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Email</h4>
                  <p className="leading-relaxed opacity-90">
                    bfpl2013@gmail.com<br />bfpl@barouliyafragrancia.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="text-4xl flex-shrink-0">🌐</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Website</h4>
                  <p className="leading-relaxed opacity-90">
                    barouliyafragrancia.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
            <form onSubmit={handleSubmit}>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h3>

              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-[#655949] focus:bg-white focus:ring-4 focus:ring-[#655949]/20 transition-all duration-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-[#655949] focus:bg-white focus:ring-4 focus:ring-[#655949]/20 transition-all duration-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+123 456 7890"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-[#655949] focus:bg-white focus:ring-4 focus:ring-[#655949]/20 transition-all duration-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-[#655949] focus:bg-white focus:ring-4 focus:ring-[#655949]/20 transition-all duration-300 resize-vertical min-h-[120px]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#4a4237] to-[#655949] text-white py-4 px-8 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>

      <footer className="bg-gradient-to-br from-[#2B3D4F] via-[#3d5268] to-[#2B3D4F] text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo and About */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/images/logo (2).png"
                  alt="Barouliya Fragrancia"
                  className="h-16 rounded-lg drop-shadow-lg"
                />
              </div>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 drop-shadow-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#what-we-do" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-300">
                    Expertise
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-300">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 drop-shadow-lg">Contact Information</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>📍 Thane, Maharashtra, India</li>
                <li>✉️ bfpl2013@gmail.com</li>
                <li>✉️ bfpl@barouliyafragrancia.com</li>
                <li>🌐 barouliyafragrancia.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm opacity-90">&copy; 2024 Barouliya Fragrancia PVT LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
