import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-[#F5F0E6] dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Premium Products" subtitle="Product Range" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} name={p.name} description={p.description} image={p.image} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
