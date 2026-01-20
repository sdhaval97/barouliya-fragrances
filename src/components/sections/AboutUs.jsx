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
                            The Art of <span className="italic text-gray-400">Pure Perfumery</span>
                        </motion.h3>
                        
                        <div className="space-y-8">
                            {values.map((value, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                    className="flex gap-6 border-l-2 border-gold/30 pl-6 hover:border-gold transition-colors duration-300"
                                >
                                    <div>
                                        <h4 className="text-xl font-serif text-white mb-2">{value.title}</h4>
                                        <p className="text-gray-400 font-light leading-relaxed">{value.description}</p>
                                    </div>
                                </motion.div>
                            ))}
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
