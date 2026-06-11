import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { companyInfo } from '../data/companyInfo';

const contactCards = [
  { icon: MapPin, title: 'Address', detail: companyInfo.address },
  { icon: Phone, title: 'Phone', detail: companyInfo.phone },
  { icon: Mail, title: 'Email', detail: companyInfo.email },
  { icon: Clock, title: 'Working Hours', detail: companyInfo.workingHours },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" subtitle="Contact Us" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {contactCards.map((card) => (
                <div key={card.title} className="bg-[#F5F0E6] dark:bg-neutral-700/50 rounded-xl p-3 sm:p-5 flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-[#4E342E] flex items-center justify-center">
                    <card.icon size={16} className="text-[#D7B899] sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-sm text-[#4E342E] dark:text-[#D7B899]">{card.title}</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 sm:mt-1 leading-relaxed">{card.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="rounded-xl overflow-hidden h-64 lg:h-80">
  
              <iframe
  src="https://www.google.com/maps?q=Akruti%20Plywood%20India&output=embed"
  width="100%"
  height="320"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
></iframe>


          </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#F5F0E6] dark:bg-neutral-700/30 rounded-2xl p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-[#4E342E] dark:text-[#D7B899] mb-4 sm:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
