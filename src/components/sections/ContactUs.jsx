import { motion } from 'framer-motion';

const ContactUs = () => {
    return (
        <section id="contact" className="py-24 bg-rich-black relative">
             <div className="container mx-auto px-6 max-w-4xl">
                 <div className="text-center mb-16 flex flex-col items-center">
                    <img 
                        src="/images/logo_with_name.png" 
                        alt="Barouliya Fragrancia" 
                        className="h-24 md:h-32 w-auto object-contain mb-8 bg-white/5 rounded-lg p-2" 
                    />
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-gold text-sm font-bold tracking-[0.3em] uppercase mb-4"
                    >
                        Contact
                    </motion.h2>
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-serif text-cream"
                    >
                        Begin Your Journey
                    </motion.h3>
                </div>

                <motion.form 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full bg-transparent border-b border-cream/20 text-cream py-4 focus:outline-none focus:border-gold transition-colors duration-300 placeholder-white/30"
                            />
                        </div>
                        <div className="group">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full bg-transparent border-b border-cream/20 text-cream py-4 focus:outline-none focus:border-gold transition-colors duration-300 placeholder-white/30"
                            />
                        </div>
                    </div>
                    
                    <div className="group">
                        <textarea 
                            rows="4" 
                            placeholder="Message" 
                            className="w-full bg-transparent border-b border-cream/20 text-cream py-4 focus:outline-none focus:border-gold transition-colors duration-300 resize-none placeholder-white/30"
                        />
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-gold text-rich-black px-12 py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-white transition-colors duration-300">
                            Send Message
                        </button>
                    </div>
                </motion.form>
                
                <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-cream/50 text-sm font-light border-t border-cream/10 pt-10">
                    <p>&copy; 2026 Barouliya Fragrancia. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gold transition-colors">Instagram</a>
                        <a href="#" className="hover:text-gold transition-colors">Facebook</a>
                        <a href="#" className="hover:text-gold transition-colors">Twitter</a>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default ContactUs;
