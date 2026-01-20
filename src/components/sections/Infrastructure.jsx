import { motion } from 'framer-motion';

const Infrastructure = () => {
    return (
        <section className="py-24 bg-white text-rich-black overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                     <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                         <div className="relative rounded-sm overflow-hidden shadow-2xl">
                             <img 
                                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000" // Lab equipment placeholder
                                alt="R&D Laboratory" 
                                className="w-full h-full object-cover"
                            />
                             {/* Overlay for depth */}
                             <div className="absolute inset-0 bg-gradient-to-r from-rich-black/10 to-transparent" />
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-4 text-gold">Infrastructure</h2>
                        <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-rich-black">
                            Creation & <span className="italic text-gold-dark">R&D Laboratory</span>
                        </h3>
                        
                        <div className="space-y-6 text-lg text-gray-700 font-light leading-relaxed">
                            <p>
                                As one of the oldest and most distinguished fragrance creators and manufacturers in the country, we are committed to excellence, innovation, and tradition. Our state-of-the-art facility is designed to uphold the highest standards of quality, ensuring that every fragrance we produce meets the expectations of both heritage and modern craftsmanship.
                            </p>
                            <p>
                                At the heart of our operations lies our advanced <span className="font-semibold text-rich-black">Creation and R&D Laboratory</span>. This laboratory is equipped with cutting-edge instruments such as a gas chromatograph, digital refractometer, digital polarimeter, oil bath, and an array of specialized equipment. Each tool plays a crucial role in refining our formulations and maintaining consistency across batches.
                            </p>
                             <p className="bg-cream/50 p-6 border-l-4 border-gold text-base italic">
                                "Our laboratory is operated by a highly skilled perfumer with a doctorate in the field, whose expertise ensures that every fragrance is crafted with precision and creativity."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Infrastructure;
