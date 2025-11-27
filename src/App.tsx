import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import Villas from './components/Villas';
import Gallery from './components/Gallery';
import Media from './components/Media';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <Villas />
      <Gallery />
      <Media />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
