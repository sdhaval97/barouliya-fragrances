import { motion } from 'framer-motion';

const ContactUs = () => {
    return (
        <section id="contact" className="py-24 bg-rich-black relative">
             <div className="container mx-auto px-6 max-w-4xl">
                 <div className="text-center mb-16 flex flex-col items-center">
                    <img 
                        src="/images/logo (2).png" 
                        alt="Barouliya Fragrancia" 
                        className="h-24 md:h-32 w-auto object-contain mb-8 rounded-3xl shadow-lg" 
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

                {/* Google Maps Section */}
                <div className="mt-20">
                    <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8 shadow-2xl border border-gold/20">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15072.292298916473!2d72.9346324554199!3d19.192010400000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bc2270c4d685%3A0xf8ee412d00af6654!2sBAROULIYA%20FRAGRANCIA%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1768919165151!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Barouliya Fragrances Location"
                            className="transition-all duration-500"
                        ></iframe>
                    </div>
                    
                    <div className="text-center">
                        <a 
                            href="https://www.google.com/maps/place/BAROULIYA+FRAGRANCIA+PVT.+LTD./@19.1920104,72.9346325,14z/data=!4m6!3m5!1s0x3be7bc2270c4d685:0xf8ee412d00af6654!8m2!3d19.1920104!4d72.9346325!16s%2Fg%2F11hzdv_z_5?entry=ttu" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border border-gold text-gold px-8 py-3 rounded-full hover:bg-gold hover:text-rich-black transition-all duration-300 shadow-lg hover:shadow-gold/20"
                        >
                            <span>Open in Google Maps</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
                
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
