import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { scrollTo } from '../utils/scroll';
import { companyInfo } from '../data/companyInfo';

const navLinks = ['Home', 'About', 'Products', 'Applications', 'Gallery', 'Testimonials', 'FAQ', 'Contact'];

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (link: string) => {
    scrollTo(link.toLowerCase());
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button onClick={() => handleNav('Home')} className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-[#4E342E] flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>A</span>
            </div>
            <span className="text-xl font-bold text-[#4E342E] dark:text-[#D7B899]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {companyInfo.name}
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNav(link)}
                className="px-3 py-2 text-sm font-medium text-[#2D2D2D] dark:text-neutral-200 hover:text-[#4E342E] dark:hover:text-[#D7B899] transition-colors rounded-md hover:bg-[#D7B899]/10"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => handleNav('Contact')}
              className="ml-2 px-5 py-2 bg-[#4E342E] hover:bg-[#3E2723] text-white rounded-lg text-sm font-semibold transition-all hover:shadow-lg"
            >
              Get Quote
            </button>
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg text-[#4E342E] dark:text-[#D7B899] hover:bg-[#D7B899]/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-[#4E342E] dark:text-[#D7B899] hover:bg-[#D7B899]/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-[#4E342E] dark:text-[#D7B899] hover:bg-[#D7B899]/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-t border-[#D7B899]/20"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNav(link)}
                  className="block w-full text-left px-4 py-3 text-[#2D2D2D] dark:text-neutral-200 hover:bg-[#D7B899]/10 hover:text-[#4E342E] dark:hover:text-[#D7B899] rounded-lg transition-colors font-medium"
                >
                  {link}
                </button>
              ))}
              <button
                onClick={() => handleNav('contact')}
                className="block w-full mt-2 px-4 py-3 bg-[#4E342E] hover:bg-[#3E2723] text-white rounded-lg text-center font-semibold transition-all"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
