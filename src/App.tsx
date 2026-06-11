import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import WhyChoose from './sections/WhyChoose';
import Products from './sections/Products';
import ProductAdvantages from './sections/ProductAdvantages';
import Applications from './sections/Applications';
import Statistics from './sections/Statistics';
import Gallery from './sections/Gallery';
import ManufacturingProcess from './sections/ManufacturingProcess';
import Testimonials from './sections/Testimonials';
import Dealers from './sections/Dealers';
import Catalogue from './sections/Catalogue';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import { useTheme } from './hooks/useTheme';
import { companyInfo } from './data/companyInfo';

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#4E342E] hover:bg-[#3E2723] text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${companyInfo.whatsapp}?text=Hello%20Akruti%20Plywood,%0A%0AI%20am%20interested%20in%20your%20plywood%20products%20and%20would%20like%20a%20quotation.%0A%0APlease%20contact%20me.%0A%0AThank%20you.`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </motion.a>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="font-sans text-[#2D2D2D] dark:text-white bg-white dark:bg-neutral-950 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Products />
        <ProductAdvantages />
        <Applications />
        <Statistics />
        <Gallery />
        <ManufacturingProcess />
        <Testimonials />
        <Dealers />
        <Catalogue />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
