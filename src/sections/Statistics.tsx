import { motion } from 'framer-motion';
import { companyInfo } from '../data/companyInfo';
import { useCounter } from '../hooks/useCounter';
import { useInView } from '../hooks/useInView';

function StatItem({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCounter(value, 2000, start);
  return (
    <div className="text-center">
      <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#D7B899]" style={{ fontFamily: "'Playfair Display', serif" }}>
        {count}{suffix}
      </p>
      <p className="text-neutral-400 mt-1 sm:mt-2 text-xs sm:text-sm">{label}</p>
    </div>
  );
}

export default function Statistics() {
  const { ref, isInView } = useInView(0.3);

  return (
    <section ref={ref} className="py-20 bg-[#4E342E] dark:bg-[#2D2D2D] relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#D7B899] mb-2">Our Achievements</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Numbers That Speak
          </h2>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full bg-[#D7B899]" />
        </motion.div>

        <div className="grid grid-cols-5 gap-2 sm:gap-8">
          {companyInfo.stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} start={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
