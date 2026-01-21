import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        
        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('email', formData.email);
            data.append('message', formData.message);

            await fetch("https://script.google.com/macros/s/AKfycbzqGQqg_1LRTI4I12DN56bQ3PrJk4DmwY21uDwiaKkyMGMd_ELNU2IIf_Q8BjvUnquq0w/exec", {
                method: "POST",
                body: data,
                mode: "no-cors"
            });

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

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
                    onSubmit={handleSubmit}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                            <input 
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name" 
                                required
                                className="w-full bg-transparent border-b border-cream/20 text-cream py-4 focus:outline-none focus:border-gold transition-colors duration-300 placeholder-white/30"
                            />
                        </div>
                        <div className="group">
                            <input 
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address" 
                                required
                                className="w-full bg-transparent border-b border-cream/20 text-cream py-4 focus:outline-none focus:border-gold transition-colors duration-300 placeholder-white/30"
                            />
                        </div>
                    </div>
                    
                    <div className="group">
                        <textarea 
                            rows="4" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message" 
                            required
                            className="w-full bg-transparent border-b border-cream/20 text-cream py-4 focus:outline-none focus:border-gold transition-colors duration-300 resize-none placeholder-white/30"
                        />
                    </div>

                    <div className="text-center mt-12">
                        <button 
                            type="submit"
                            disabled={status === 'submitting'}
                            className="bg-gold text-rich-black px-12 py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                        
                        {status === 'success' && (
                            <p className="mt-4 text-green-400 text-sm tracking-wider">Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="mt-4 text-red-400 text-sm tracking-wider">Something went wrong. Please try again.</p>
                        )}
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

                        <a 
                            href="https://www.facebook.com/barouliyafragrancia#" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-gold transition-colors" 
                            aria-label="Facebook"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a 
                            href="https://in.linkedin.com/company/barouliyafragrancia" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-gold transition-colors" 
                            aria-label="LinkedIn"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default ContactUs;
