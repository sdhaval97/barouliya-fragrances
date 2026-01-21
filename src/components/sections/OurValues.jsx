import { motion } from 'framer-motion';

const OurValues = () => {
    return (
        <section className="py-24 bg-cream text-rich-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-5xl md:text-6xl font-serif mb-12">
                            Our <span className="italic font-light">Values</span>
                        </h2>
                        
                        <div className="bg-white p-10 shadow-lg border-l-4 border-gold">
                            <h3 className="text-gold-dark text-sm font-bold tracking-[0.2em] uppercase mb-4">
                                Crafting Nature's Elegance Since Generations
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We are working with the vision to serve the industries via our high quality fragrances & perfumes that create value & profitability for our customers, who make us.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                A natural partner of fragrances, flavors, healthcare and beauty products, the world leader in sustainable natural raw materials, Barouliya Fragrancia presents exceptional creativity to brand names around the world, with the strength of an independent industrial group.
                            </p>
                        </div>

                        <div className="mt-10 text-gray-700 leading-relaxed font-light">
                            <p>
                                We are now one of the leading fragrance manufacturers in India. Over the years, we've perfected the art of delivering the ideal sensorial solution for every market.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-1/2"
                    >
                         <div className="relative rounded-lg shadow-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto">
                             <img 
                                src="/images/download (3).jpeg" 
                                alt="Perfumery Art" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OurValues;
