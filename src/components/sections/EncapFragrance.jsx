import { motion } from 'framer-motion';

const EncapFragrance = () => {
    const uses = [
        { id: "01", title: "Extended Release", desc: "The fragrance is released gradually over time, making the scent last longer throughout the day." },
        { id: "02", title: "Protection of Ingredients", desc: "Encapsulation helps protect the sensitive fragrance ingredients from external factors like air, light, and heat." },
        { id: "03", title: "Controlled Activation", desc: "The scent is often activated by specific triggers, such as friction from the skin or changes in temperature or humidity." },
        { id: "04", title: "Enhanced Performance", desc: "Because the fragrance is released over time, encapsulated perfumes can maintain their intensity for longer, reducing the need for frequent reapplication." },
         { id: "05", title: "Versatility", desc: "This technology can be used in various products, including personal fragrances, laundry detergents, air fresheners, and skincare products." }
    ];

    return (
        <section className="py-24 bg-cream relative">
           {/* Section Header */}
           <div className="container mx-auto px-6 mb-16">
               <div className="flex flex-col md:flex-row items-end justify-between border-b border-rich-black/10 pb-8">
                   <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="md:w-2/3"
                    >
                       <h2 className="text-gold-dark text-sm font-bold tracking-[0.3em] uppercase mb-4">Our New Project</h2>
                       <h3 className="text-4xl md:text-5xl font-serif text-rich-black leading-tight">
                           ENCAP <span className="italic font-light">Fragrance</span>
                       </h3>
                   </motion.div>
                   <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="md:w-1/3 mt-6 md:mt-0 text-right"
                   >
                       <p className="text-lg text-gray-600 font-light italic">"Innovation that lasts."</p>
                   </motion.div>
               </div>
               
               <div className="mt-12 text-lg text-gray-700 font-light leading-relaxed max-w-4xl">
                   <p>
                       <span className="font-semibold">ENCAP fragrance</span> or Encapsulated perfumes are a type of fragrance technology where the perfume molecules are enclosed within tiny capsules, usually made of a biodegradable polymer or other materials. These capsules protect the fragrance until they are activated, typically through physical action like rubbing, pressing, or spraying. When the capsules break open, they release the scent in a controlled manner, offering a longer-lasting fragrance experience compared to traditional perfumes.
                   </p>
               </div>
           </div>

           {/* Uses Grid */}
           <div className="container mx-auto px-6">
                <h4 className="text-3xl font-serif text-rich-black mb-10">Uses of Encap</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {uses.map((use, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-sm shadow-sm border-t-2 border-transparent hover:border-gold transition-all duration-300"
                        >
                            <span className="text-4xl font-serif text-gold/40 block mb-4">{use.id}</span>
                            <h5 className="text-xl font-serif text-rich-black mb-3">{use.title}</h5>
                            <p className="text-gray-600 font-light text-sm leading-relaxed">{use.desc}</p>
                        </motion.div>
                    ))}
                </div>
           </div>
        </section>
    );
};

export default EncapFragrance;
