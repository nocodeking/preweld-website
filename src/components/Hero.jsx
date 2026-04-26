import { ArrowRight, Phone, Shield, Truck, Clock } from 'lucide-react'

const trustBadges = [
  { icon: Shield, label: 'Trusted Since 1979', sub: '45+ Years' },
  { icon: Truck, label: 'Gauteng Delivery', sub: 'Same Day Available' },
  { icon: Clock, label: 'Expert Support', sub: 'Trained Staff' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-welding.jpg"
          alt="Industrial welding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
            <span className="text-sky-300 text-sm font-medium">
              South Africa's Premier Welding Supplier
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            Gas, Cutting &{' '}
            <span className="text-sky-400">Welding</span>{' '}
            Supplies
          </h1>

          <p className="text-lg text-white/80 max-w-lg leading-relaxed mb-8">
            The trusted source for industrial welding equipment, specialty gases, 
            and PPE since 1979. Serving Gauteng's fabrication, construction, and 
            manufacturing industries.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-white hover:bg-gray-100 text-navy-950 font-semibold rounded-xl transition-all duration-300 shadow-xl"
            >
              Browse Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:0123272694"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 backdrop-blur-sm transition-all duration-300"
            >
              <Phone size={18} />
              012 327 2694
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-8">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div className="w-11 h-11 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <badge.icon size={20} className="text-sky-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{badge.label}</div>
                  <div className="text-xs text-white/60">{badge.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
