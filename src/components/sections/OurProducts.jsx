import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: "Midnight Oudh",
        price: "$120",
        image: "https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&w=800", // Placeholder
        category: "Signature Collection"
    },
    {
        id: 2,
        name: "Royal Rose",
        price: "$95",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800", // Placeholder
        category: "Floral Notes"
    },
    {
        id: 3,
        name: "Amber Essence",
        price: "$110",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800", // Placeholder
        category: "Oriental Series"
    }
];

const OurProducts = () => {
    return (
        <section id="products" className="py-24 bg-cream">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-gold-dark text-sm font-bold tracking-[0.3em] uppercase mb-4"
                    >
                        Collection
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-serif text-rich-black"
                    >
                        Curated Elegance
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative cursor-pointer"
                        >
                            <div className="aspect-[4/5] bg-white overflow-hidden relative shadow-sm">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-rich-black/10 group-hover:bg-rich-black/20 transition-colors duration-300" />
                                
                                {/* Add to Cart / View Button */}
                                <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <button className="w-full bg-white text-rich-black py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold hover:text-white transition-colors duration-300">
                                        View Details
                                    </button>
                                </div>
                            </div>
                            
                            <div className="text-center mt-6">
                                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{product.category}</p>
                                <h4 className="text-xl font-serif text-rich-black mb-1">{product.name}</h4>
                                <p className="text-gold-dark font-medium">{product.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurProducts;
