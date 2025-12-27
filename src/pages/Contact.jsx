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
    <section id="contact" className="min-h-screen bg-white">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pb-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#4a4237] to-[#655949] p-10 rounded-2xl text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
            <p className="text-lg leading-relaxed mb-8 opacity-95">
              Have questions about our fragrances or need personalized recommendations?
              Reach out to us and our team will be happy to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="text-4xl flex-shrink-0">📍</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Visit Us</h4>
                  <p className="leading-relaxed opacity-90">
                    Local Store Address<br />City, Country
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="text-4xl flex-shrink-0">📞</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Call Us</h4>
                  <p className="leading-relaxed opacity-90">
                    +123 456 7890<br />Mon-Sat: 9AM - 8PM
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="text-4xl flex-shrink-0">✉️</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Email Us</h4>
                  <p className="leading-relaxed opacity-90">
                    info@barouliya.com<br />support@barouliya.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="text-4xl flex-shrink-0">💬</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Social Media</h4>
                  <p className="leading-relaxed opacity-90">
                    Follow us on Instagram<br />@barouliya_fragrances
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

      <footer className="bg-gradient-to-br from-[#655949] via-[#7a6858] to-[#655949] text-white shadow-2xl border-t border-[#4a4237]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
            <div>
              <img
                src="/images/logo_without_name.png"
                alt="Barouliya Fragrances"
                className="h-16 mb-4 drop-shadow-lg"
              />
              <p className="text-sm opacity-90 leading-relaxed">
                Your trusted destination for premium fragrances and exceptional service.
              </p>
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
                  <a href="#products" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-300">
                    Products & Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-300">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 drop-shadow-lg">Contact Info</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>📍 Local Store Address</li>
                <li>📞 +123 456 7890</li>
                <li>✉️ info@barouliya.com</li>
                <li>💬 @barouliya_fragrances</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 drop-shadow-lg">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg">
                  <span className="text-xl">🐦</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm opacity-90">&copy; 2024 Barouliya Fragrances. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
