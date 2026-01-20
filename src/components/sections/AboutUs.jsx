import { motion } from 'framer-motion';

const values = [
    { title: "Sustainably Sourced", description: "Ethical harvesting practices that respect nature." },
    { title: "Master Craftsmanship", description: "Blended by expert perfumers with decades of experience." },
    { title: "Pure Ingredients", description: "No synthetics, just the pure essence of botanicals." }
];

const AboutUs = () => {
    return (
        <section id="about" className="py-24 bg-rich-black text-cream relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    <div className="lg:w-1/2">
                        <motion.h2 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-gold text-sm font-bold tracking-[0.3em] uppercase mb-4"
                        >
                            Our Values
                        </motion.h2>
                        <motion.h3 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-5xl font-serif mb-8 leading-tight"
                        >
                            <span className="italic text-gold">Values</span> & Origins
                        </motion.h3>
                        
                        <div className="space-y-6 text-cream/80 font-light leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                Rooted in the rich heritage of Rajasthan’s royal perfumers and the timeless traditions of Kannauj’s legendary attars, our company was founded by <strong className="text-white">Rajesh Barouliya</strong> and <strong className="text-white">Jyoti Barouliya</strong> to carry forward a five-generation legacy of excellence in fragrance craftsmanship. Combining centuries-old artistry with modern innovation, we specialize in creating high-quality fragrance oils that capture the essence of luxury, nature, and timeless beauty—"A Scent Sent from Heaven."
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                At the heart of our philosophy is a <strong className="text-white">zero-waste business model</strong>, ensuring that every ingredient is utilized responsibly while maintaining the highest standards of purity and sustainability. Our entire production process is carefully vetted to eliminate waste at every stage, from raw material selection to final formulation, ensuring ethical sourcing and eco-conscious manufacturing.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                With a growing global presence, our fragrances are trusted by brands, businesses, and connoisseurs worldwide. From the classic attars of Kannauj to contemporary aromatic formulations, we provide bespoke solutions to international markets, blending heritage with modern preferences.
                            </motion.p>
                             <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                As we continue our journey, we remain dedicated to preserving our roots while evolving with the ever-changing world of perfumery—crafting scents that leave a lasting impression.
                            </motion.p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                         <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                         >
                            <img 
                                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000" 
                                alt="Perfumery Process" 
                                className="w-full h-auto rounded-sm shadow-2xl opacity-80 hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/40 z-[-1]" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-gold/40 z-[-1]" />
                         </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
