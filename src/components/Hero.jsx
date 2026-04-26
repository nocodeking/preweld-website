import { ArrowRight, Phone, Shield, Truck, Clock } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const trustBadges = [
  { icon: Clock, label: 'Same-Day Delivery', sub: 'Order Before 2pm' },
  { icon: Truck, label: 'Gauteng-Wide', sub: 'Direct to Site' },
  { icon: Shield, label: 'Trusted Since 1979', sub: '45+ Years' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-[88px] md:pt-[120px]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-welding.jpg"
          alt="Industrial welding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/40 rounded-full mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
              </span>
              <span className="text-emerald-300 text-xs sm:text-sm font-bold tracking-wide">
                Order Before 2pm — Same-Day Delivery
              </span>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Gas, Cutting &{' '}
              <span className="text-sky-400">Welding</span>{' '}
              Supplies
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className="text-base sm:text-lg text-white/80 max-w-lg leading-relaxed mb-8">
              Same-day delivery across Gauteng on welding machines, gas cylinders, 
              PPE, consumables and cutting equipment. Order before 2pm, get it today. 
              Trusted by workshops since 1979.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={2}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12">
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-white hover:bg-gray-100 text-navy-950 font-semibold rounded-xl transition-all duration-300 shadow-xl"
              >
                Browse Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0123272694"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 backdrop-blur-sm transition-all duration-300"
              >
                <Phone size={18} />
                012 327 2694
              </a>
            </div>
          </ScrollReveal>

          {/* Trust badges */}
          <ScrollReveal delay={3}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                    <badge.icon size={18} className="text-sky-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{badge.label}</div>
                    <div className="text-xs text-white/60">{badge.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
