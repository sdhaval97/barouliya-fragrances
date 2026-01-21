import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const productCategories = [
    {
        id: "personal-care",
        label: "Personal Care",
        image: "/images/pc.jpeg",
        items: ["Handwash", "Hand Sanitizer", "Wet Wipes", "Hair Oil", "Shampoo", "Hair Conditioner", "Body Wash", "Toilet Soap"]
    },
    {
        id: "beauty-care",
        label: "Beauty Care",
        image: "/images/Natural%20Beauty_%20Transform%20Your%20Skin%20with%20Organic%20Creams.jpeg",
        items: ["Body Lotion", "Face Cream", "Facial Scrub", "Makeup Preparation", "Nail Polish Remover", "Talcum Powder", "Hair Gel & Cream", "Shaving Preparation"]
    },
    {
        id: "fabric-care",
        label: "Fabric Care",
        image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=800",
        items: ["Detergent Cake", "Detergent Powder", "Laundry Soap", "Fabric Softener", "Liquid Detergent", "Laundry Detergent Strip", "Detergent Pods"]
    },
    {
        id: "home-care",
        label: "Home Care",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800",
        items: ["Dishwash Paste/Powder", "Dishwash Bar", "Dishwash Liquid", "Disinfectants", "Household Cleaner"]
    },
    {
        id: "fine-fragrances",
        label: "Fine Fragrances",
        image: "/images/Download%20free%20image%20of%20Serum%20skincare%20packaging%20mockup%20bottle%20cosmetics%20perfume_%20by%20Benjamas%20about%20aesthetic%2C%20sea%2C%20water%2C%20nature%2C%20and%20sunlight%2014569514.jpeg",
        items: ["Deodorant", "Roll-On", "Eau De Parfum", "Eau De Toilette", "Eau De Cologne", "Attar", "Elixir", "Solid Perfume"]
    },
    {
        id: "air-care",
        label: "Air Care",
        image: "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?q=80&w=800",
        items: ["Scented Candles", "Room Freshener", "Incense Stick", "Reed Diffuser", "Car Freshener", "Potpourri And Scented Beads", "Dhoop Batti", "Sambhrani Cups", "Automatic Spray Diffuser", "Aerosol Air Freshener"]
    },
    {
        id: "others",
        label: "Others",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800",
        items: ["Scented Papers", "Aroma For Wall Paints", "Scented Pen Inks", "Scented Artificial Flowers"]
    }
];

const OurProducts = () => {
    const [activeTab, setActiveTab] = useState(productCategories[0].id);

    const activeCategory = productCategories.find(c => c.id === activeTab);

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
                        Curated Categories
                    </motion.h3>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {productCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                                activeTab === category.id 
                                ? 'bg-rich-black text-gold border-rich-black shadow-lg scale-105' 
                                : 'bg-transparent text-gray-500 border-gray-300 hover:border-gold hover:text-gold'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-sm shadow-xl overflow-hidden min-h-[600px]"
                    >
                        <div className="flex flex-col md:flex-row h-full">
                            {/* Image Side */}
                            <div className="w-full md:w-2/5 relative h-[300px] md:h-auto flex-shrink-0">
                                <img 
                                    src={activeCategory.image} 
                                    alt={activeCategory.label} 
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                                    <h4 className="text-3xl font-serif text-white">{activeCategory.label}</h4>
                                </div>
                            </div>

                            {/* Items Grid Side */}
                            <div className="w-full md:w-3/5 p-8 md:p-12 bg-white">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {activeCategory.items.map((item, index) => (
                                        <motion.div 
                                            key={index}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex items-center gap-4 p-4 rounded-lg border border-gold/30 bg-cream/20 transition-all duration-300 group cursor-default"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center transition-colors duration-300">
                                                <span className="font-serif italic font-bold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <span className="text-rich-black font-light text-lg transition-colors">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default OurProducts;
