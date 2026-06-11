import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryBtn: string;
  secondaryBtn?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
}

export default function CTASection({ title, subtitle, primaryBtn, secondaryBtn, onPrimary, onSecondary }: CTASectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        {title}
      </h2>
      <p className="text-sm sm:text-base text-neutral-300 mb-6 sm:mb-8 max-w-xl mx-auto">{subtitle}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <button
          onClick={onPrimary}
          className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#D7B899] hover:bg-[#C9A87E] text-[#2D2D2D] font-semibold rounded-lg transition-all hover:shadow-lg text-sm sm:text-base"
        >
          {primaryBtn}
        </button>
        {secondaryBtn && (
          <button
            onClick={onSecondary}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-white/30 text-white hover:border-white rounded-lg font-semibold transition-all text-sm sm:text-base"
          >
            {secondaryBtn} <ArrowRight size={14} className="sm:w-4 sm:h-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
