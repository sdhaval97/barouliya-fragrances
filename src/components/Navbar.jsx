import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    // Mobile navigation update

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
                isScrolled ? 'bg-rich-black backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="flex justify-between items-center">
                    {/* Desktop Logo (Left Aligned) */}
                    <div 
                        className="hidden md:flex items-center gap-3 cursor-pointer" 
                        onClick={() => scrollToSection('home')}
                    >
                         <img 
                            src="/images/logo_without_name.png" 
                            alt="Barouliya Logo" 
                            className="h-14 w-auto object-contain drop-shadow-md"
                         />
                         <h1 className="text-xl md:text-2xl font-serif font-bold text-gold tracking-[0.2em]">BAROULIYA FRAGRANCIA</h1>
                    </div>

                    {/* Mobile Logo (Centered) */}
                    <div 
                        className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer w-full flex justify-center"
                        onClick={() => scrollToSection('home')}
                    >
                         <img 
                            src="/images/logo.png" 
                            alt="Barouliya Fragrancia" 
                            className="h-16 w-auto object-contain drop-shadow-md" 
                         />
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
                    </ul>
                </div>
            </div>
        </motion.nav>

        {/* Mobile Floating Menu (Bottom Right) */}
        <div className="md:hidden fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="bg-rich-black/95 backdrop-blur-xl border border-gold/20 rounded-2xl p-6 shadow-2xl mb-2 w-56 origin-bottom-right"
                    >
                        <ul className="flex flex-col gap-4 text-center">
                            {navLinks.map((link) => (
                                <li key={link.id} className="border-b border-white/5 last:border-0 pb-3 last:pb-0">
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-lg font-serif text-cream hover:text-gold transition-colors duration-300"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                className="bg-gold text-rich-black w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors duration-300 focus:outline-none"
                onClick={toggleMenu}
            >
                <div className="w-6 flex flex-col gap-1.5 items-center justify-center">
                    <span className={`block h-0.5 bg-rich-black rounded transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                    <span className={`block h-0.5 bg-rich-black rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-6'}`}></span>
                    <span className={`block h-0.5 bg-rich-black rounded transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`}></span>
                </div>
            </button>
        </div>
    );
};

export default Navbar;
