import { motion } from 'framer-motion'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'
import { Award, Star } from 'lucide-react'

const brandGroups = [
  {
    category: 'Premium Welding',
    brands: [
      { name: 'ESAB', color: 'from-yellow-500 to-amber-600', text: 'text-white' },
      { name: 'Lincoln Electric', color: 'from-red-600 to-red-700', text: 'text-white' },
      { name: 'Fronius', color: 'from-red-500 to-orange-600', text: 'text-white' },
      { name: 'Kemppi', color: 'from-orange-500 to-orange-600', text: 'text-white' },
    ],
  },
  {
    category: 'Power Tools',
    brands: [
      { name: 'Bosch', color: 'from-blue-600 to-blue-700', text: 'text-white' },
      { name: 'Makita', color: 'from-teal-500 to-teal-600', text: 'text-white' },
      { name: 'DeWalt', color: 'from-amber-500 to-yellow-600', text: 'text-black' },
      { name: 'Gedore', color: 'from-blue-800 to-blue-900', text: 'text-white' },
    ],
  },
  {
    category: 'Safety & Gas',
    brands: [
      { name: '3M', color: 'from-red-500 to-red-600', text: 'text-white' },
      { name: 'Honeywell', color: 'from-red-600 to-red-700', text: 'text-white' },
      { name: 'Afrox', color: 'from-blue-700 to-indigo-800', text: 'text-white' },
      { name: 'BOC', color: 'from-blue-500 to-sky-600', text: 'text-white' },
    ],
  },
  {
    category: 'Specialist',
    brands: [
      { name: 'Hypertherm', color: 'from-gray-700 to-gray-800', text: 'text-white' },
      { name: 'Uvex', color: 'from-lime-600 to-green-700', text: 'text-white' },
      { name: 'Weldclass', color: 'from-gray-600 to-gray-700', text: 'text-white' },
      { name: 'Certilas', color: 'from-slate-600 to-slate-700', text: 'text-white' },
    ],
  },
]

export default function Brands() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.020]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #040964 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-5 shadow-sm">
              <Award size={15} className="text-navy-900" />
              <span className="text-xs font-bold text-navy-900 uppercase tracking-widest">
                Authorised Dealer Network
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-navy-950 tracking-tight mb-4">
              We Only Stock The{' '}
              <span className="relative inline-block">
                <span className="gradient-text">Best</span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-navy-900 to-sky-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{ originX: 0 }}
                />
              </span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Proud authorised dealers for the world's most respected welding, tool,
              and safety brands — with full manufacturer warranties on every product.
            </p>
          </div>
        </ScrollReveal>

        {/* Brand grid by category */}
        <div className="space-y-10 sm:space-y-14">
          {brandGroups.map((group, gi) => (
            <ScrollReveal key={group.category} delay={gi}>
              <div>
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <Star size={14} className="text-navy-900" />
                  <h3 className="font-display text-xs sm:text-sm font-bold text-navy-500 uppercase tracking-widest">
                    {group.category}
                  </h3>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {group.brands.map((brand) => (
                    <motion.div
                      key={brand.name}
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative bg-gradient-to-br ${brand.color} rounded-xl sm:rounded-2xl p-5 sm:p-7 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-default overflow-hidden group min-h-[80px] sm:min-h-[100px]`}
                    >
                      {/* Shine overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-white/5 rounded-bl-2xl" />
                      <span className={`font-display text-lg sm:text-2xl lg:text-3xl font-black ${brand.text} relative z-10 tracking-tight`}>
                        {brand.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom trust line */}
        <ScrollReveal delay={4}>
          <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-center">
            <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-600">
              <span className="font-bold text-navy-900">18+</span> Premium Brands
            </div>
            <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-600">
              <span className="font-bold text-navy-900">100%</span> Genuine Products
            </div>
            <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-600">
              Full <span className="font-bold text-navy-900">Manufacturer Warranty</span>
            </div>
            <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-600">
              <span className="font-bold text-navy-900">No</span> Grey Imports
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
