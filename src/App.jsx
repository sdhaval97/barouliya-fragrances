import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import WhatWeDo from './pages/WhatWeDo';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <Home />
        <About />
        <WhatWeDo />
        <Products />
        <Contact />
      </div>
    </div>
  );
}

export default App;
