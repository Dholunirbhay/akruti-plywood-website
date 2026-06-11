import { motion } from 'framer-motion';
import { ChevronDown, Shield, Award, Truck } from 'lucide-react';
import { scrollTo } from '../utils/scroll';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Plywood background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D]/90 via-[#4E342E]/80 to-[#4E342E]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 lg:py-32">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#D7B899] font-semibold uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4"
          >
            Akruti Plywood
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Premium Plywood Solutions For Modern Spaces
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-sm sm:text-lg text-neutral-300 leading-relaxed mb-6 sm:mb-8"
          >
            Delivering durable, termite-resistant and high-quality plywood products trusted by homeowners, architects and builders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <button
              onClick={() => scrollTo('products')}
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-[#D7B899] hover:bg-[#C9A87E] text-[#2D2D2D] font-semibold rounded-lg transition-all hover:shadow-xl text-sm sm:text-base"
            >
              Explore Products
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-white/40 text-white hover:border-white font-semibold rounded-lg transition-all text-sm sm:text-base"
            >
              Get Free Quote
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-3 sm:gap-6 mt-8 sm:mt-12"
          >
            {[
              { icon: Shield, label: 'Termite Resistant' },
              { icon: Award, label: 'Certified Quality' },
              { icon: Truck, label: 'Timely Delivery' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 sm:gap-2 text-neutral-300">
                <Icon size={16} className="text-[#D7B899] sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-white/60" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
