import { motion } from 'framer-motion';
import { TreePine, FlaskConical, Cog, ClipboardCheck, Package, Truck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const steps = [
  { icon: TreePine, title: 'Raw Material Selection', description: 'Sourcing the finest timber from certified sustainable forests.' },
  { icon: FlaskConical, title: 'Treatment Process', description: 'Chemical treatment for termite, borer, and moisture resistance.' },
  { icon: Cog, title: 'Precision Manufacturing', description: 'Advanced machinery ensures consistent quality and dimensions.' },
  { icon: ClipboardCheck, title: 'Quality Testing', description: 'Multi-point inspection at every stage of production.' },
  { icon: Package, title: 'Packaging', description: 'Careful packaging to protect products during transit.' },
  { icon: Truck, title: 'Delivery', description: 'Reliable logistics network ensuring timely delivery nationwide.' },
];

export default function ManufacturingProcess() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F0E6] dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Manufacturing Process" subtitle="Quality at Every Step" />

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-[#D7B899]/30" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-[#4E342E] flex items-center justify-center shadow-lg relative z-10">
                  <step.icon size={20} className="text-[#D7B899] sm:w-6 sm:h-6" />
                </div>
                <p className="text-xs text-[#8D6E63] dark:text-[#D7B899] font-semibold mb-1">Step {i + 1}</p>
                <h3 className="font-bold text-[#2D2D2D] dark:text-white text-xs sm:text-sm mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed hidden sm:block">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
