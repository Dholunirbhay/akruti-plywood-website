import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

export default function Catalogue() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-neutral-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D7B899]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#4E342E]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#4E342E] to-[#2D2D2D] dark:from-neutral-900 dark:to-neutral-950 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(215,184,153,.3) 20px, rgba(215,184,153,.3) 40px)' }} />
          </div>

          <div className="relative z-10">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-[#D7B899]/20 flex items-center justify-center">
              <FileText size={22} className="text-[#D7B899] sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Download Our Catalogue
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 max-w-lg mx-auto mb-6 sm:mb-8">
              Get access to our complete product catalogue featuring detailed specifications, finishes, and application guides.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="/catalogue.pdf"
                download
                   className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#D7B899] hover:bg-[#C9A87E] text-[#2D2D2D] font-semibold rounded-lg transition-all hover:shadow-lg text-sm sm:text-base"
              >
                <Download size={16} className="sm:w-[18px] sm:h-[18px]" /> Download Catalogue
              </a>
              <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-white/30 text-white hover:border-white font-semibold rounded-lg transition-all text-sm sm:text-base">
                <FileText size={16} className="sm:w-[18px] sm:h-[18px]" /> Request Price List
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
