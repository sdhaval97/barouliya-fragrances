import Navbar from './components/Navbar';
import HomeBanner from './components/sections/HomeBanner';
import OurStory from './components/sections/OurStory';
import OurProducts from './components/sections/OurProducts';
import AboutUs from './components/sections/AboutUs';
import BrandsTrusted from './components/sections/BrandsTrusted';
import ContactUs from './components/sections/ContactUs';

function App() {
  return (
    <div className="w-full overflow-x-hidden bg-rich-black text-cream">
      <Navbar />
      <main>
        <HomeBanner />
        <OurStory />
        <OurProducts />
        <AboutUs />
        <BrandsTrusted />
        <ContactUs />
      </main>
    </div>
  );
}

export default App;
