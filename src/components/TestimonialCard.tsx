import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  review: string;
  rating: number;
  image: string;
  index: number;
}

export default function TestimonialCard({ name, company, review, rating, image, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'fill-[#D7B899] text-[#D7B899]' : 'text-neutral-300'}
          />
        ))}
      </div>
      <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-6 italic">"{review}"</p>
      <div className="flex items-center gap-3">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
        <div>
          <p className="font-semibold text-[#2D2D2D] dark:text-white text-sm">{name}</p>
          <p className="text-xs text-neutral-500">{company}</p>
        </div>
      </div>
    </motion.div>
  );
}
