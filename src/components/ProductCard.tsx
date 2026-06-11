import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  index: number;
}

export default function ProductCard({ name, description, image, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-6">
        <h3
          className="text-lg font-bold text-[#2D2D2D] dark:text-white mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {name}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">{description}</p>
        <button className="inline-flex items-center gap-1 text-sm font-semibold text-[#4E342E] dark:text-[#D7B899] hover:gap-2 transition-all">
          Learn More <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}
