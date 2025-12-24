import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Home />
      <Products />
      <About />
      <Contact />
    </div>
  );
}

export default App;
