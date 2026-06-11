import { motion } from 'framer-motion';
import { Droplets, Bug, Shield, Heart, Zap, Sparkles, Leaf, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const advantages = [
  { icon: Droplets, title: 'Waterproof', color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' },
  { icon: Bug, title: 'Borer Resistant', color: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' },
  { icon: Shield, title: 'Termite Resistant', color: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400' },
  { icon: Heart, title: 'Long Life', color: 'bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400' },
  { icon: Zap, title: 'High Strength', color: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400' },
  { icon: Sparkles, title: 'Smooth Finish', color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' },
  { icon: Leaf, title: 'Eco-Friendly', color: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' },
  { icon: CheckCircle, title: 'Quality Tested', color: 'bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400' },
];

export default function ProductAdvantages() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Product Advantages" subtitle="Built to Last" />
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-6">
          {advantages.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="flex flex-col items-center text-center p-3 sm:p-6 rounded-lg sm:rounded-2xl bg-neutral-50 dark:bg-neutral-700/50 hover:shadow-lg transition-shadow"
            >
              <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl ${a.color} flex items-center justify-center mb-2 sm:mb-3`}>
                <a.icon size={20} className="sm:w-[26px] sm:h-[26px]" />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm text-[#2D2D2D] dark:text-white">{a.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
