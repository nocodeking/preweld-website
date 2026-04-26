import { useState } from 'react'
import {
  Zap, Flame, Scissors, ShieldCheck, Wrench, Drill,
  ArrowRight, Package
} from 'lucide-react'

const categories = [
  {
    icon: Zap,
    name: 'Welding Machines',
    description: 'MIG, TIG, ARC, and multi-process welders from top brands.',
    count: '120+',
    tags: ['MIG', 'TIG', 'ARC'],
    color: 'bg-navy-900',
    light: 'bg-navy-50',
  },
  {
    icon: Flame,
    name: 'Gases & Cylinders',
    description: 'Oxygen, argon, acetylene, CO₂, nitrogen, and mixed gases.',
    count: '45+',
    tags: ['Oxygen', 'Argon', 'Acetylene'],
    color: 'bg-sky-500',
    light: 'bg-sky-50',
  },
  {
    icon: Scissors,
    name: 'Cutting Equipment',
    description: 'Plasma cutters, oxy-fuel sets, and CNC cutting solutions.',
    count: '80+',
    tags: ['Plasma', 'Oxy-Fuel'],
    color: 'bg-navy-700',
    light: 'bg-navy-50',
  },
  {
    icon: ShieldCheck,
    name: 'Safety & PPE',
    description: 'Complete PPE range — helmets, gloves, boots, respirators.',
    count: '200+',
    tags: ['Helmets', 'Gloves', 'Boots'],
    color: 'bg-emerald-600',
    light: 'bg-emerald-50',
  },
  {
    icon: Wrench,
    name: 'Consumables',
    description: 'Wire, electrodes, rods, tips, nozzles, and shielding cups.',
    count: '500+',
    tags: ['Wire', 'Electrodes'],
    color: 'bg-gray-700',
    light: 'bg-gray-50',
  },
  {
    icon: Drill,
    name: 'Hand & Power Tools',
    description: 'Angle grinders, drills, and accessories from Bosch, Gedore.',
    count: '300+',
    tags: ['Grinders', 'Drills'],
    color: 'bg-navy-800',
    light: 'bg-navy-50',
  },
]

export default function ProductCategories() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <section id="products" className="relative py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full mb-4 shadow-sm">
              <Package size={14} className="text-navy-900" />
              <span className="text-xs font-semibold text-navy-900 uppercase tracking-wider">Product Range</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Everything You Need,{' '}
              <span className="gradient-text">In Stock</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-xl">
              From welding machines to safety gear — we stock Gauteng's most comprehensive range.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-navy-900 hover:text-sky-500 font-semibold transition-colors group"
          >
            View Full Catalogue
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative card-shine bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-navy-200 cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${cat.light} rounded-xl flex items-center justify-center mb-5`}>
                <cat.icon size={22} className="text-navy-900" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-navy-950 mb-2 group-hover:text-navy-700 transition-colors">
                {cat.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                {cat.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-gray-100 rounded-md text-[11px] font-semibold text-gray-600 uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom row */}
              <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                <span className="text-sm text-gray-500">
                  <span className="text-navy-900 font-bold">{cat.count}</span> products
                </span>
                <span className="flex items-center gap-1 text-sm text-navy-900 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  Browse <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
