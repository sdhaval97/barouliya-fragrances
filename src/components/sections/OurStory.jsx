import { motion } from 'framer-motion';

const OurStory = () => {
    return (
        <section id="story" className="py-24 md:py-32 bg-rich-black text-cream overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-gold text-sm font-bold tracking-[0.3em] uppercase mb-4">Our Legacy</h2>
                        <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                            Crafting exceptional fragrances for <span className="text-gold-light italic">five generations</span>.
                        </h3>
                        <p className="text-cream/70 text-lg leading-relaxed mb-6 font-light">
                            From the royal courts of Rajasthan to the global stage, Barouliya Fragrancia sits at the intersection of timeless tradition and modern artistry.
                        </p>
                        <p className="text-cream/70 text-lg leading-relaxed mb-8 font-light">
                            We believe that a scent is more than just a fragrance—it is a memory, an emotion, and a journey. Our commitment to sustainable sourcing and zero-waste manufacturing ensures that every bottle captures the purest essence of nature.
                        </p>
                        
                        <div className="flex gap-12 mt-12 border-t border-white/10 pt-8">
                            <div>
                                <h4 className="text-3xl font-serif text-gold">100+</h4>
                                <p className="text-sm text-cream/50 tracking-widest uppercase mt-2">Years of Legacy</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif text-gold">50+</h4>
                                <p className="text-sm text-cream/50 tracking-widest uppercase mt-2">Unique Blends</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <div className="absolute inset-0 border border-gold/30 translate-x-4 translate-y-4 z-0" />
                            <img
                                src="/images/Kannauj-Perfume-Making-PradeepGaurs-Shutterstock_2048x2048.png"
                                alt="Perfumery Art"
                                className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
