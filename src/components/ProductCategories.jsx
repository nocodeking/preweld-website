import {
  Zap, Flame, Scissors, ShieldCheck, Wrench, Drill,
  ArrowRight, Package,
} from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'

const categories = [
  {
    icon: Zap, name: 'Welding Machines',
    description: 'MIG, TIG, ARC, and multi-process welders from top brands.',
    count: '120+', tags: ['MIG', 'TIG', 'ARC'],
    color: 'bg-navy-900', light: 'bg-navy-50',
  },
  {
    icon: Flame, name: 'Gases & Cylinders',
    description: 'Oxygen, argon, acetylene, CO₂, nitrogen, and mixed gases.',
    count: '45+', tags: ['Oxygen', 'Argon', 'Acetylene'],
    color: 'bg-sky-500', light: 'bg-sky-50',
  },
  {
    icon: Scissors, name: 'Cutting Equipment',
    description: 'Plasma cutters, oxy-fuel sets, and CNC cutting solutions.',
    count: '80+', tags: ['Plasma', 'Oxy-Fuel'],
    color: 'bg-navy-700', light: 'bg-navy-50',
  },
  {
    icon: ShieldCheck, name: 'Safety & PPE',
    description: 'Complete PPE range — helmets, gloves, boots, respirators.',
    count: '200+', tags: ['Helmets', 'Gloves', 'Boots'],
    color: 'bg-emerald-600', light: 'bg-emerald-50',
  },
  {
    icon: Wrench, name: 'Consumables',
    description: 'Wire, electrodes, rods, tips, nozzles, and shielding cups.',
    count: '500+', tags: ['Wire', 'Electrodes'],
    color: 'bg-gray-700', light: 'bg-gray-50',
  },
  {
    icon: Drill, name: 'Hand & Power Tools',
    description: 'Angle grinders, drills, and accessories from Bosch, Gedore.',
    count: '300+', tags: ['Grinders', 'Drills'],
    color: 'bg-navy-800', light: 'bg-navy-50',
  },
]

export default function ProductCategories() {
  return (
    <section id="products" className="relative py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 sm:mb-18">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-5 shadow-sm">
                <Package size={15} className="text-navy-900" />
                <span className="text-xs font-bold text-navy-900 uppercase tracking-widest">Product Range</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-navy-950 tracking-tight">
                Everything You Need,{' '}
                <span className="gradient-text">In Stock</span>
              </h2>
              <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl">
                From welding machines to safety gear — we stock Gauteng's most comprehensive range.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-navy-900 hover:text-sky-500 font-bold transition-colors group text-sm flex-shrink-0"
            >
              View Full Catalogue
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" staggerDelay={0.08}>
          {categories.map((cat) => (
            <StaggerItem key={cat.name}>
              <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-navy-200 cursor-pointer h-full overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-900 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`w-12 h-12 ${cat.light} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <cat.icon size={22} className="text-navy-900" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy-950 mb-2 group-hover:text-navy-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{cat.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cat.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 rounded-md text-[10px] font-bold text-gray-500 uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    <span className="text-navy-900 font-bold">{cat.count}</span> products
                  </span>
                  <span className="flex items-center gap-1 text-sm text-navy-900 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                    Browse <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
