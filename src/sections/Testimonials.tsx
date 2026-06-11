import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const maxPage = Math.ceil(testimonials.length / perPage) - 1;

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What Our Clients Say" subtitle="Testimonials" />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {visible.map((t, i) => (
                <TestimonialCard
                  key={t.id}
                  name={t.name}
                  company={t.company}
                  review={t.review}
                  rating={t.rating}
                  image={t.image}
                  index={i}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {maxPage > 0 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="p-2 rounded-lg bg-[#4E342E]/10 text-[#4E342E] dark:text-[#D7B899] disabled:opacity-30 hover:bg-[#4E342E]/20 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: maxPage + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === page ? 'bg-[#4E342E] dark:bg-[#D7B899]' : 'bg-neutral-300 dark:bg-neutral-600'}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
                disabled={page === maxPage}
                className="p-2 rounded-lg bg-[#4E342E]/10 text-[#4E342E] dark:text-[#D7B899] disabled:opacity-30 hover:bg-[#4E342E]/20 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
