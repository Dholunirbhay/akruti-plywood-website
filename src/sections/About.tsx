import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { companyInfo } from '../data/companyInfo';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F0E6] dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Akruti Plywood" subtitle="Our Story" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/5702677/pexels-photo-5702677.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Manufacturing facility"
              className="rounded-2xl shadow-xl w-full h-80 lg:h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4E342E] rounded-2xl flex items-center justify-center shadow-lg hidden lg:flex">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#D7B899]" style={{ fontFamily: "'Playfair Display', serif" }}>10+</p>
                <p className="text-xs text-neutral-300 mt-1">Years of<br />Excellence</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">{companyInfo.about.intro}</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#4E342E] dark:text-[#D7B899] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{companyInfo.about.mission}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#4E342E] dark:text-[#D7B899] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Our Vision</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{companyInfo.about.vision}</p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {companyInfo.about.values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white dark:bg-neutral-800 rounded-xl p-3 sm:p-4 shadow-sm"
                >
                  <h4 className="font-semibold text-xs sm:text-sm text-[#4E342E] dark:text-[#D7B899] mb-1">{v.title}</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2 sm:line-clamp-none">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
