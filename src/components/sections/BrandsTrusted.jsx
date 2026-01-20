import { motion } from 'framer-motion';

const brands = [
    { name: "Vogue", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Vogue_logo.svg-1.png" }, // Placeholder search
    { name: "Elle", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Elle_%28magazine%29_Logo.svg" },
    { name: "Harper's Bazaar", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Harper%27s_Bazaar_logo.svg" },
    { name: "GQ", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/GQ_magazine_logo.svg" },
    { name: "Vanity Fair", logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Vanity_Fair_logo.svg" }
];

const BrandsTrusted = () => {
    return (
        <section className="py-20 bg-cream border-t border-rich-black/5">
            <div className="container mx-auto px-6 text-center">
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-gray-500 uppercase tracking-[0.2em] text-xs mb-10 font-bold"
                >
                    As Featured In
                </motion.p>
                
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {brands.map((brand, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-2xl font-serif text-rich-black">{brand.name}</h3>
                            {/* In a real scenario, use <img> tags here with the logos. For now, text is cleaner if SVGs fail */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsTrusted;
