import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
    >
      <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#4E342E]/10 dark:bg-[#D7B899]/10 flex items-center justify-center">
        <Icon size={28} className="text-[#4E342E] dark:text-[#D7B899]" />
      </div>
      <h3 className="font-bold text-[#2D2D2D] dark:text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
