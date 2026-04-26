import { Sparkles, ArrowRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const products = [
  {
    name: 'Bosch GWS 750-115 Angle Grinder',
    category: 'Power Tools',
    price: 'R 1,299',
    badge: 'NEW',
  },
  {
    name: 'ESAB Rebel EMP 215ic MIG/TIG/Stick',
    category: 'Welding Machines',
    price: 'R 28,500',
    badge: 'NEW',
  },
  {
    name: '3M Speedglas Welding Helmet 9100XXi',
    category: 'Safety & PPE',
    price: 'R 6,850',
    badge: 'NEW',
  },
  {
    name: 'Lincoln Electric Innershield NR-212 Wire',
    category: 'Consumables',
    price: 'R 420',
    badge: 'NEW',
  },
]

export default function NewestProducts() {
  return (
    <section className="relative py-20 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-50 border border-navy-100 rounded-full mb-4">
                <Sparkles size={14} className="text-navy-900" />
                <span className="text-xs font-semibold text-navy-900 uppercase tracking-wider">Newest Products</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
                Fresh Stock,{' '}
                <span className="gradient-text">Ready to Weld</span>
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-navy-900 hover:text-sky-500 font-semibold transition-colors group"
            >
              View All New Arrivals
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i + 1}>
              <div className="group bg-gray-50 border border-gray-100 hover:border-navy-200 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full flex flex-col">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="px-2 py-0.5 bg-navy-900 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {product.badge}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-400">{product.category}</span>
                </div>
                <div className="aspect-[4/3] bg-gray-100 border border-gray-100 rounded-xl mb-3 sm:mb-4 overflow-hidden">
                  <img
                    src="/product-welder.jpg"
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-xs sm:text-sm font-bold text-navy-950 mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-navy-700 transition-colors flex-grow">
                  {product.name}
                </h3>
                <p className="text-base sm:text-lg font-bold text-navy-900">{product.price}</p>
                <a
                  href="#contact"
                  className="mt-3 sm:mt-4 block w-full text-center px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-gray-200 hover:border-navy-300 hover:bg-navy-50 text-navy-900 text-xs sm:text-sm font-semibold rounded-lg transition-all"
                >
                  Enquire
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
