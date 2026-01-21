import { motion } from 'framer-motion';

const HomeBanner = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-rich-black z-10" />
                <img
                    src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=2000" 
                    alt="Luxury Fragrance"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 px-4 w-full h-full flex flex-col justify-center items-center pt-20">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-16 text-center max-w-4xl mx-auto rounded-sm shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-gold/50 -translate-x-4 -translate-y-4" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-gold/50 translate-x-4 translate-y-4" />
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-gold-light uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-medium"
                    >
                        Est. 1920
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wide drop-shadow-lg"
                    >
                        BAROULIYA FRAGRANCIA <br /> <span className="text-gold font-light italic">PVT LTD</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-lg md:text-2xl text-cream/80 mb-10 font-light italic tracking-widest max-w-2xl mx-auto leading-relaxed"
                    >
                        "A scent, sent from heaven"
                    </motion.p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, backgroundColor: "#D4AF37", color: "#0A0A0A", transition: { duration: 0 } }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                            className="border border-gold text-gold px-12 py-4 rounded-sm uppercase tracking-[0.2em] text-sm font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                        >
                            Explore Collection
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, backgroundColor: "#D4AF37", color: "#0A0A0A", transition: { duration: 0 } }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-gold/10 backdrop-blur-sm border border-gold text-gold px-12 py-4 rounded-sm uppercase tracking-[0.2em] text-sm font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                        >
                            Contact Us
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}

        </section>
    );
};

export default HomeBanner;
