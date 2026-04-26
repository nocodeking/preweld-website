import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Zap } from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'

const products = [
  {
    name: 'Bosch GWS 750-115',
    subtitle: 'Angle Grinder',
    category: 'Power Tools',
    price: 'R 1,299',
    badge: 'BEST SELLER',
    badgeColor: 'bg-emerald-500',
    image: '/product-grinder.jpg',
  },
  {
    name: 'ESAB Rebel EMP 215ic',
    subtitle: 'MIG/TIG/Stick Welder',
    category: 'Welding Machines',
    price: 'R 28,500',
    badge: 'NEW',
    badgeColor: 'bg-navy-600',
    image: '/product-welder.jpg',
  },
  {
    name: '3M Speedglas 9100XXi',
    subtitle: 'Welding Helmet',
    category: 'Safety & PPE',
    price: 'R 6,850',
    badge: 'PREMIUM',
    badgeColor: 'bg-amber-500',
    image: '/product-helmet.jpg',
  },
  {
    name: 'Lincoln NR-212 Wire',
    subtitle: 'Innershield Consumable',
    category: 'Consumables',
    price: 'R 420',
    badge: 'POPULAR',
    badgeColor: 'bg-sky-500',
    image: '/product-metalwork.jpg',
  },
]

export default function NewestProducts() {
  return (
    <section className="relative py-20 sm:py-28 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-50 border border-navy-100 rounded-full mb-5">
                <Sparkles size={15} className="text-navy-900" />
                <span className="text-xs font-bold text-navy-900 uppercase tracking-widest">
                  Newest Arrivals
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-navy-950 tracking-tight">
                Fresh Stock,{' '}
                <span className="gradient-text">Ready to Weld</span>
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-navy-900 hover:text-sky-500 font-bold transition-colors group text-sm"
            >
              View All New Arrivals
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>

        {/* Product grid */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.08}>
          {products.map((product) => (
            <StaggerItem key={product.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group bg-white border border-gray-200 hover:border-navy-300 rounded-2xl overflow-hidden transition-colors duration-300 hover:shadow-2xl hover:shadow-gray-200/60 h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 ${product.badgeColor} text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-lg`}>
                      {product.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <span className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider mb-1.5">
                    {product.category}
                  </span>
                  <h3 className="font-display text-sm sm:text-base font-bold text-navy-950 mb-0.5 group-hover:text-navy-700 transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-400 mb-3 sm:mb-4">
                    {product.subtitle}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                    <span className="text-base sm:text-xl font-black text-navy-900">
                      {product.price}
                    </span>
                    <a
                      href="#contact"
                      className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-navy-600 hover:text-navy-900 transition-colors group/link"
                    >
                      Enquire
                      <Zap size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
