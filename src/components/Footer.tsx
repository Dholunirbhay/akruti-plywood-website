import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { scrollTo } from '../utils/scroll';

const quickLinks = ['Home', 'About', 'Products', 'Gallery', 'Contact'];
const productLinks = [
  'Commercial Plywood',
  'Marine Plywood',
  'BWR Grade Plywood',
  'Block Board',
  'Decorative Laminates',
  'Flush Doors',
];

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] dark:bg-neutral-950 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#4E342E] flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>A</span>
              </div>
              <span className="text-xl font-bold text-[#D7B899]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {companyInfo.name}
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">{companyInfo.tagline}</p>
            <div className="flex gap-3">
              {['facebook', 'instagram', 'twitter', 'linkedin', 'youtube'].map((social) => (
                <a
                  key={social}
                  href={companyInfo.social[social as keyof typeof companyInfo.social]}
                  className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-[#4E342E] flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs uppercase font-bold text-neutral-300">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#D7B899] font-semibold mb-4 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link.toLowerCase())}
                    className="text-neutral-400 hover:text-[#D7B899] transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[#D7B899] font-semibold mb-4 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Products</h4>
            <ul className="space-y-2">
              {productLinks.map((p) => (
                <li key={p}>
                  <button
                    onClick={() => scrollTo('products')}
                    className="text-neutral-400 hover:text-[#D7B899] transition-colors text-sm"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="text-[#D7B899] font-semibold mb-4 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Contact</h4>
            <div className="space-y-3 text-sm text-neutral-400">
              <p className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" />{companyInfo.address}</p>
              <p className="flex items-center gap-2"><Phone size={16} className="shrink-0" />{companyInfo.phone}</p>
              <p className="flex items-center gap-2"><Mail size={16} className="shrink-0" />{companyInfo.email}</p>
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-medium text-neutral-300 mb-2">Newsletter</h5>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-l-lg text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-[#D7B899]"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-[#4E342E] hover:bg-[#3E2723] text-white rounded-r-lg transition-colors"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          <p>Crafted with quality & precision</p>
        </div>
      </div>
    </footer>
  );
}
