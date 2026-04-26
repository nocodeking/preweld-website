import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Tag, Clock, Flame, ArrowRight, Phone } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const specials = [
  {
    id: 1,
    brand: 'Bosch',
    title: 'Angle Grinder Deals',
    subtitle: 'Professional-Grade Power Tools',
    description:
      'Selected Bosch angle grinders on promotion this month. Professional-grade tools at unbeatable prices with full warranty.',
    discount: 'Up to 25% OFF',
    badge: 'HOT DEAL',
    badgeColor: 'bg-red-500',
    image: '/product-grinder.jpg',
    color: 'from-red-600 to-orange-500',
  },
  {
    id: 2,
    brand: 'Gedore',
    title: 'Hand Tool Bundles',
    subtitle: 'Complete Workshop Kits',
    description:
      'Huge selection of Gedore hand tools on special. Spanners, sockets, pliers, and complete tool kits at bundle prices.',
    discount: 'Bundle & Save',
    badge: 'BUNDLE DEAL',
    badgeColor: 'bg-navy-600',
    image: '/tools-workshop.jpg',
    color: 'from-navy-700 to-sky-600',
  },
  {
    id: 3,
    brand: '3M Speedglas',
    title: 'Welding Helmet Promo',
    subtitle: 'Auto-Darkening Technology',
    description:
      '3M Speedglas 9100XXi welding helmets at special prices. True color auto-darkening — see your weld pool clearly.',
    discount: 'Limited Stock',
    badge: 'LIMITED',
    badgeColor: 'bg-amber-500',
    image: '/product-helmet.jpg',
    color: 'from-amber-500 to-yellow-500',
  },
]

export default function Specials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % specials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + specials.length) % specials.length)
  }, [])

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (d) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  }

  const item = specials[current]

  return (
    <section id="specials" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-5">
              <Flame size={15} className="text-red-500" />
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                This Month's Hot Deals
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-navy-950 tracking-tight mb-4">
              Deals You Don't Want{' '}
              <span className="text-navy-900">to Miss</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Promotions change monthly. Grab these deals before they're gone —{' '}
              <a href="tel:0123272694" className="text-navy-900 font-bold hover:text-sky-500 transition-colors underline underline-offset-2">
                call 012 327 2694
              </a>{' '}
              to confirm availability.
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Cards */}
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid md:grid-cols-2 bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50"
              >
                {/* Image side */}
                <div className="relative h-64 sm:h-80 md:h-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient overlay for mobile */}
                  <div className={`absolute inset-0 md:hidden bg-gradient-to-br ${item.color} opacity-60`} />
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1.5 ${item.badgeColor} text-white text-[11px] font-black rounded-full uppercase tracking-wider shadow-lg`}>
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className="p-6 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[11px] font-bold text-gray-600 uppercase tracking-wider">
                      {item.brand}
                    </span>
                    <span className={`px-3 py-1 ${item.badgeColor} text-white text-[10px] font-black rounded-full uppercase tracking-wider`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-navy-400 font-medium mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Price tag */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-xl">
                      <Tag size={15} className="text-red-600" />
                      <span className="text-red-600 font-black text-lg">{item.discount}</span>
                    </div>
                  </div>

                  <a
                    href="tel:0123272694"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy-900/20 group w-fit"
                  >
                    <Phone size={16} />
                    Call to Order
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-12 h-12 bg-white border border-gray-200 hover:border-navy-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group z-10"
            aria-label="Previous deal"
          >
            <ChevronLeft size={20} className="text-gray-600 group-hover:text-navy-900 transition-colors" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-12 h-12 bg-white border border-gray-200 hover:border-navy-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group z-10"
            aria-label="Next deal"
          >
            <ChevronRight size={20} className="text-gray-600 group-hover:text-navy-900 transition-colors" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {specials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1)
                  setCurrent(i)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-navy-900' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to deal ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Urgency banner */}
        <ScrollReveal>
          <div className="mt-12 flex items-center justify-center gap-3 px-6 py-4 bg-navy-50 border border-navy-100 rounded-2xl max-w-2xl mx-auto">
            <Clock size={16} className="text-navy-900 flex-shrink-0" />
            <p className="text-sm text-navy-900 font-medium">
              Limited stock — promotions valid while stocks last.{' '}
              <a href="tel:0123272694" className="font-bold underline underline-offset-2 hover:text-navy-700">
                Call to reserve yours
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
