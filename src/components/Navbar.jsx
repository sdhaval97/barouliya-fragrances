import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-br from-[#655949] via-[#7a6858] to-[#655949] sticky top-0 z-50 shadow-2xl backdrop-blur-sm border-b border-[#4a4237]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="navbar-brand">
            <img
              src="/images/logo_with_name.png"
              alt="Barouliya Fragrances"
              className="h-12 sm:h-14 drop-shadow-lg"
            />
          </div>

          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={toggleMenu}
          >
            <div className="w-8 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          <ul className="hidden md:flex gap-8">
            <li>
              <a
                href="#home"
                onClick={() => scrollToSection('home')}
                className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 hover:-translate-y-0.5 inline-block shadow-md hover:shadow-lg"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={() => scrollToSection('products')}
                className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 hover:-translate-y-0.5 inline-block shadow-md hover:shadow-lg"
              >
                Products & Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => scrollToSection('about')}
                className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 hover:-translate-y-0.5 inline-block shadow-md hover:shadow-lg"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 hover:-translate-y-0.5 inline-block shadow-md hover:shadow-lg"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'}`}>
          <ul className="flex flex-col gap-2">
            <li className="text-center">
              <a
                href="#home"
                onClick={() => scrollToSection('home')}
                className="text-white font-medium block py-3 px-4 hover:bg-white/30 rounded-lg transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li className="text-center">
              <a
                href="#products"
                onClick={() => scrollToSection('products')}
                className="text-white font-medium block py-3 px-4 hover:bg-white/30 rounded-lg transition-all duration-300"
              >
                Products & Services
              </a>
            </li>
            <li className="text-center">
              <a
                href="#about"
                onClick={() => scrollToSection('about')}
                className="text-white font-medium block py-3 px-4 hover:bg-white/30 rounded-lg transition-all duration-300"
              >
                About Us
              </a>
            </li>
            <li className="text-center">
              <a
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="text-white font-medium block py-3 px-4 hover:bg-white/30 rounded-lg transition-all duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
