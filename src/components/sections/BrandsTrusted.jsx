import { motion } from 'framer-motion';

const brands = [
    "Godrej", "Pitambari", "Lanka Veda", "Freshclean", "Cotton Mist", 
    "Pushpam Groups", "Indigo Paints", "Siddhalepa", "Asian Paints", 
    "Sapthami", "Jil Home Care", "Alaukik", "Manohar", "Mylab", 
    "Venky's", "Hatric", "Bufin", "Wonder Fresh"
];

const BrandsTrusted = () => {
    return (
        <section className="py-20 bg-white border-t border-rich-black/5">
            <div className="container mx-auto px-6 text-center">
                <motion.h2 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-gold-dark uppercase tracking-[0.2em] text-sm mb-12 font-bold"
                >
                    Our Business Partners
                </motion.h2>
                
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70">
                    {brands.map((brand, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="text-xl md:text-2xl font-serif text-gray-400 hover:text-rich-black transition-colors duration-300 cursor-default"
                        >
                            {brand}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsTrusted;
