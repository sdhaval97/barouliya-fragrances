import { motion } from 'framer-motion';

const SignatureOffering = () => {
    return (
        <section className="py-24 bg-rich-black text-white relative">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-black to-black pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-gold text-sm font-bold tracking-[0.3em] uppercase mb-4"
                        >
                            Our Signature Offering
                        </motion.h2>
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-serif mb-8 leading-tight"
                        >
                            Custom Blends & <br/><span className="italic text-gold-light">Fragrances</span>
                        </motion.h3>
                        
                        <div className="space-y-6 text-lg text-cream/70 font-light leading-relaxed">
                            <p>
                                Custom fragrance blend is a bespoke scent crafted specifically to meet an individual's unique preferences, personality, or needs. Unlike mass-produced perfumes, this blend is carefully curated by combining various essential oils, aromatic essences, and other fragrance notes in specific proportions.
                            </p>
                            <p>
                                The process often begins with a consultation to understand the desired fragrance profile, such as whether the person prefers floral, woody, citrus, or spicy notes.
                            </p>
                            <p>
                                The blending process involves layering top, middle, and base notes to create a well-rounded and harmonious scent. Top notes provide the initial impression and are often light and refreshing, while middle notes form the heart of the fragrance with more complex, lasting aromas. Base notes add depth and longevity, anchoring the scent with rich, enduring qualities.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1595123550441-d377e017de6a?q=80&w=1000" // Lab or blending image
                                alt="Custom Fragrance Blending" 
                                className="w-full h-auto rounded-sm shadow-2xl skew-y-2 opacity-90"
                            />
                            <div className="absolute inset-0 border border-gold/20 -translate-x-4 -translate-y-4 -skew-y-2" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignatureOffering;
