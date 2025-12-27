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
    <nav className="bg-gradient-to-br from-[#2B3D4F] via-[#3d5268] to-[#2B3D4F] fixed top-0 left-0 right-0 z-50 shadow-2xl backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="navbar-brand flex items-center gap-3">
            <img
              src="/images/logo (2).png"
              alt="Barouliya Fragrancia"
              className="h-14 sm:h-16 md:h-20 rounded-lg drop-shadow-lg"
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

          <ul className="hidden md:flex gap-6">
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
                href="#about"
                onClick={() => scrollToSection('about')}
                className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 hover:-translate-y-0.5 inline-block shadow-md hover:shadow-lg"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#what-we-do"
                onClick={() => scrollToSection('what-we-do')}
                className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 hover:-translate-y-0.5 inline-block shadow-md hover:shadow-lg"
              >
                Expertise
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={() => scrollToSection('products')}
                className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 hover:-translate-y-0.5 inline-block shadow-md hover:shadow-lg"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 hover:-translate-y-0.5 inline-block shadow-md hover:shadow-lg"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
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
                href="#about"
                onClick={() => scrollToSection('about')}
                className="text-white font-medium block py-3 px-4 hover:bg-white/30 rounded-lg transition-all duration-300"
              >
                About
              </a>
            </li>
            <li className="text-center">
              <a
                href="#what-we-do"
                onClick={() => scrollToSection('what-we-do')}
                className="text-white font-medium block py-3 px-4 hover:bg-white/30 rounded-lg transition-all duration-300"
              >
                Expertise
              </a>
            </li>
            <li className="text-center">
              <a
                href="#products"
                onClick={() => scrollToSection('products')}
                className="text-white font-medium block py-3 px-4 hover:bg-white/30 rounded-lg transition-all duration-300"
              >
                Products
              </a>
            </li>
            <li className="text-center">
              <a
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="text-white font-medium block py-3 px-4 hover:bg-white/30 rounded-lg transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
