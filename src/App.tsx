import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Framework from './components/Framework';
import Customization from './components/Customization';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('shadow-sm');
        } else {
          navbar.classList.remove('shadow-sm');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Framework />
      <Customization />
      <About />
      <Contact />
    </div>
  );
}

export default App;