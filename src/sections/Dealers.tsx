import { motion } from 'framer-motion';
import { Handshake, Building2, Ruler, Paintbrush, Hammer } from 'lucide-react';
import CTASection from '../components/CTASection';
import { scrollTo } from '../utils/scroll';

const partners = [
  { icon: Handshake, title: 'Dealers', description: 'Join our nationwide dealer network and grow your business with premium plywood products.' },
  { icon: Building2, title: 'Builders', description: 'Get reliable supply, competitive pricing, and dedicated support for all your construction projects.' },
  { icon: Ruler, title: 'Architects', description: 'Specify Akruti Plywood for projects that demand certified quality and lasting performance.' },
  { icon: Paintbrush, title: 'Interior Designers', description: 'Access our curated range of veneers and laminates to bring your design vision to life.' },
  { icon: Hammer, title: 'Contractors', description: 'Depend on timely delivery and consistent quality for every job site requirement.' },
];

export default function Dealers() {
  return (
    <section className="py-20 lg:py-28 bg-[#4E342E] dark:bg-[#2D2D2D] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <CTASection
          title="Partner With Akruti Plywood"
          subtitle="Join our growing network of dealers, builders, architects, and designers who trust our products."
          primaryBtn="Become a Partner"
          secondaryBtn="Contact Sales"
          onPrimary={() => scrollTo('contact')}
          onSecondary={() => scrollTo('contact')}
        />

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 mt-10 sm:mt-16">
          {partners.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/15 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg bg-[#D7B899]/20 flex items-center justify-center">
                <p.icon size={20} className="text-[#D7B899] sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-bold text-white text-xs sm:text-sm mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed hidden sm:block">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
