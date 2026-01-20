import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'Story', id: 'story' },
        { name: 'Collection', id: 'products' },
        { name: 'About', id: 'about' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-rich-black/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div 
                    className="flex items-center gap-3 cursor-pointer" 
                    onClick={() => scrollToSection('home')}
                >
                     <img 
                        src="/images/logo_without_name.png" 
                        alt="Barouliya Logo" 
                        className="h-14 w-auto object-contain drop-shadow-md"
                     />
                     <h1 className="text-xl md:text-2xl font-serif font-bold text-gold tracking-[0.2em] hidden sm:block">BAROULIYA</h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => scrollToSection(link.id)}
                                className="text-cream/80 hover:text-gold text-sm uppercase tracking-widest font-medium transition-colors duration-300"
                            >
                                {link.name}
                            </button>
                        </li>
                    ))}
                    <li>
                         <button 
                            onClick={() => scrollToSection('contact')}
                            className="border border-gold text-gold hover:bg-gold hover:text-rich-black px-6 py-2 uppercase text-xs tracking-widest font-bold transition-all duration-300"
                        >
                            Contact Us
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-cream focus:outline-none z-50 relative"
                    onClick={toggleMenu}
                >
                    <div className="w-6 flex flex-col gap-1.5 items-end">
                        <span className={`block h-0.5 bg-gold rounded transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                        <span className={`block h-0.5 bg-gold rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                        <span className={`block h-0.5 bg-gold rounded transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
                    </div>
                </button>

                {/* Mobile Menu Overlay */}
                 <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-rich-black z-40 flex flex-col items-center justify-center md:hidden"
                        >
                            <ul className="flex flex-col gap-8 text-center">
                                {navLinks.map((link) => (
                                    <li key={link.id}>
                                        <button
                                            onClick={() => scrollToSection(link.id)}
                                            className="text-2xl font-serif text-cream hover:text-gold transition-colors duration-300"
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
