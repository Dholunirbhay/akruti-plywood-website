import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8 sm:mb-12 lg:mb-16"
    >
      <p className={`text-xs sm:text-sm font-semibold uppercase tracking-widest mb-1.5 sm:mb-2 ${light ? 'text-[#D7B899]' : 'text-[#8D6E63]'}`}>
        {subtitle}
      </p>
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${light ? 'text-white' : 'text-[#2D2D2D] dark:text-white'}`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
      <div className={`mt-3 sm:mt-4 w-12 sm:w-16 h-1 mx-auto rounded-full ${light ? 'bg-[#D7B899]' : 'bg-[#4E342E]'}`} />
    </motion.div>
  );
}
