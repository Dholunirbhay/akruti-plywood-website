import { motion } from 'framer-motion';

interface GalleryCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
}

export default function GalleryCard({ title, category, image, index }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <p className="text-[#D7B899] text-xs font-semibold uppercase tracking-wider">{category}</p>
        <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
      </div>
    </motion.div>
  );
}
