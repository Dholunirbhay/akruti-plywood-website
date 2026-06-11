import SectionHeading from '../components/SectionHeading';
import GalleryCard from '../components/GalleryCard';
import { galleryItems } from '../data/gallery';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Gallery" subtitle="Visual Showcase" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.id} title={item.title} category={item.category} image={item.image} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
