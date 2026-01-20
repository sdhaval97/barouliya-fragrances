import Navbar from './components/Navbar';
import HomeBanner from './components/sections/HomeBanner';
import OurStory from './components/sections/OurStory';
import WhatWeDo from './components/sections/WhatWeDo';
import OurProducts from './components/sections/OurProducts';
import SignatureOffering from './components/sections/SignatureOffering';
import EncapFragrance from './components/sections/EncapFragrance';
import Infrastructure from './components/sections/Infrastructure';
import OurValues from './components/sections/OurValues';
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
        <WhatWeDo />
        <OurProducts />
        <SignatureOffering />
        <EncapFragrance />
        <Infrastructure />
        <OurValues />
        <AboutUs />
        <BrandsTrusted />
        <ContactUs />
      </main>
    </div>
  );
}

export default App;
