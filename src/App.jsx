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
      <Home />
      <About />
      <WhatWeDo />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
