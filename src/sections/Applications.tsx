import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const applications = [
  { title: 'Home Interiors', image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Modular Kitchens', image: 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Office Furniture', image: 'https://images.pexels.com/photos/3807685/pexels-photo-3807685.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Commercial Buildings', image: 'https://images.pexels.com/photos/3791384/pexels-photo-3791384.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Hotels', image: 'https://images.pexels.com/photos/2599752/pexels-photo-2599752.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Retail Stores', image: 'https://images.pexels.com/photos/2647805/pexels-photo-2647805.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Doors & Windows', image: 'https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Luxury Interiors', image: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export default function Applications() {
  return (
    <section id="applications" className="py-20 lg:py-28 bg-[#F5F0E6] dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Applications" subtitle="Where We Excel" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {applications.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>{app.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
