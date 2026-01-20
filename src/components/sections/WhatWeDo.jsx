import { motion } from 'framer-motion';

const WhatWeDo = () => {
    return (
        <section className="py-24 bg-white text-rich-black relative overflow-hidden">
             {/* Decorative Elements */}
             <div className="absolute top-10 right-10 opacity-20">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 0L61 39H100L68 61L79 100L50 78L21 100L32 61L0 39H39L50 0Z" fill="#D4AF37"/>
                </svg>
             </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
                             <img 
                                src="https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=1000" 
                                alt="Applying Fragrance" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-5xl md:text-6xl font-serif mb-10 text-rich-black">
                            What <span className="italic font-light">We Do</span>
                        </h2>
                        
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                            <p>
                                Fragrance has the power to magnetize the senses and drive them to new dimensions. Fragrance has the power to alter moods, evoke distant memories, raise spirits, and boost self-confidence.
                            </p>
                            <p>
                                We at <span className="font-semibold text-rich-black">Barouliya Fragrancia</span> create fragrances to imbibe soul to the products.
                            </p>
                            <p>
                                Our team of perfumers, with their intense R&D efforts, create cutting-edge fragrances and customize them to consumer’s satisfaction.
                            </p>
                            <p>
                                After the olfactive evaluation by the experts, the product is run under the GC and only after the results the product is dispatched with utmost satisfaction of the quality of the product.
                            </p>
                            <p>
                                Our fragrances are known for their attractive aroma, longer shelf life, and well composition. Our palette consists of a varied range of fragrances to cater personal care, home care, fabric care, air care, and many more industries.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
