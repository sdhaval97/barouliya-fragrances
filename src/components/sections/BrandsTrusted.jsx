import { motion } from 'framer-motion';

// Import logo images
import godrejLogo from '../../assets/partners/godrej_logo.jpg';
import asianPaintsLogo from '../../assets/partners/asian_paints_logo.jpg';
import indigoPaintsLogo from '../../assets/partners/indigo_paints_logo.jpg';
import pitambariLogo from '../../assets/partners/pitambari_logo.jpg';
import venkysLogo from '../../assets/partners/venkys_logo.jpg';
import jilHomeLogo from '../../assets/partners/jil_home_car_logo.jpg';
import lankaSumedhaLogo from '../../assets/partners/lanka_sumedha_logo.jpg';

const brands = [
    { name: "Godrej", logo: godrejLogo },
    { name: "Asian Paints", logo: asianPaintsLogo },
    { name: "Indigo Paints", logo: indigoPaintsLogo },
    { name: "Pitambari", logo: pitambariLogo },
    { name: "Venky's", logo: venkysLogo },
    { name: "Jil Home Care", logo: jilHomeLogo },
    { name: "Lanka Sumedha", logo: lankaSumedhaLogo },
    // Duplicate for seamless loop
    { name: "Godrej", logo: godrejLogo },
    { name: "Asian Paints", logo: asianPaintsLogo },
    { name: "Indigo Paints", logo: indigoPaintsLogo },
    { name: "Pitambari", logo: pitambariLogo },
    { name: "Venky's", logo: venkysLogo },
    { name: "Jil Home Care", logo: jilHomeLogo },
    { name: "Lanka Sumedha", logo: lankaSumedhaLogo },
];

const BrandsTrusted = () => {
    return (
        <section className="py-20 bg-white border-t border-rich-black/5 overflow-hidden">
            <div className="container mx-auto px-6 text-center mb-12">
                <motion.h2 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-gold-dark uppercase tracking-[0.2em] text-sm font-bold"
                >
                    Our Business Partners
                </motion.h2>
            </div>
            
            <div className="flex w-[200%]">
                <motion.div 
                    className="flex items-center gap-16 md:gap-24"
                    animate={{ x: "-50%" }}
                    transition={{ 
                        repeat: Infinity, 
                        ease: "linear", 
                        duration: 30 // Adjust speed here
                    }}
                >
                    {brands.map((brand, index) => (
                        <div key={index} className="flex-shrink-0 w-32 md:w-40 opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0">
                            <img 
                                src={brand.logo} 
                                alt={brand.name} 
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
                {/* Second loop for seamless effect if needed (already duplicated in array, but separate div approach is also valid. 
                    Here I duplicated the array data for simplicity with a single motion div) */}
            </div>
        </section>
    );
};

export default BrandsTrusted;
