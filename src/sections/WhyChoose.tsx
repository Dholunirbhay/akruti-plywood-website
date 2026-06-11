import { Shield, Droplets, Bug, HardHat, Leaf, Settings, Users, Clock } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';

const features = [
  { icon: Shield, title: 'Premium Quality', description: 'Every sheet undergoes rigorous quality checks to ensure only the finest products reach our customers.' },
  { icon: Droplets, title: 'Waterproof Technology', description: 'Advanced waterproofing treatment ensures our plywood withstands moisture and humidity without warping.' },
  { icon: Bug, title: 'Termite Resistant', description: 'Special chemical treatment provides long-lasting protection against termites and borers.' },
  { icon: HardHat, title: 'High Durability', description: 'Engineered for strength and longevity, our plywood delivers exceptional performance year after year.' },
  { icon: Leaf, title: 'Eco-Friendly Manufacturing', description: 'Sustainable sourcing and environmentally conscious manufacturing processes protect our planet.' },
  { icon: Settings, title: 'Precision Engineering', description: 'State-of-the-art machinery ensures consistent thickness, smooth finish, and perfect dimensions.' },
  { icon: Users, title: 'Trusted By Professionals', description: 'Architects, builders, and interior designers across India trust Akruti for their premium projects.' },
  { icon: Clock, title: 'Timely Delivery', description: 'Efficient logistics and dedicated supply chain ensure your materials arrive exactly when you need them.' },
];

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Why Choose Akruti Plywood" subtitle="Our Strengths" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
