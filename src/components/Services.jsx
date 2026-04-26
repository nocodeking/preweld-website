import {
  Truck, Wrench, Fuel, ClipboardCheck, GraduationCap, RotateCcw,
  ArrowRight, Cog
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    icon: Fuel,
    title: 'Gas Supply & Refills',
    description: 'Bulk and cylinder gas supply including oxygen, argon, acetylene, CO\u2082, nitrogen, and mixed gases. Cylinder exchange programmes available.',
  },
  {
    icon: Wrench,
    title: 'Equipment Repairs',
    description: 'In-house repair and servicing for welding machines, plasma cutters, and cutting equipment. Fast turnaround to minimise your downtime.',
  },
  {
    icon: Truck,
    title: 'Delivery Services',
    description: 'Same-day and next-day delivery across Gauteng. We deliver directly to your workshop, site, or factory floor.',
  },
  {
    icon: ClipboardCheck,
    title: 'Technical Advice',
    description: 'Our expert staff help you select the right equipment and consumables for your specific welding application and materials.',
  },
  {
    icon: GraduationCap,
    title: 'Welding Training Support',
    description: 'We partner with accredited training providers and can recommend courses for your staff \u2014 from beginner to advanced certification.',
  },
  {
    icon: RotateCcw,
    title: 'Equipment Hire',
    description: 'Short and long-term rental of welding machines, generators, and site equipment for project-based needs.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-navy-900/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-sky-400/5 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 sm:gap-16 items-start">
          {/* Left column - header */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full mb-4 shadow-sm">
                <Cog size={14} className="text-navy-900" />
                <span className="text-xs font-semibold text-navy-900 uppercase tracking-wider">Our Services</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mb-4 sm:mb-6">
                More Than Just{' '}
                <span className="gradient-text">Supply</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Preweld is your full-service partner. From gas refills to equipment repairs 
                and expert advice \u2014 we keep your operations running.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-navy-900/15 group"
              >
                Discuss Your Needs
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </ScrollReveal>

          {/* Right column - services grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i + 1}>
                <div className="group bg-white border border-gray-200 hover:border-navy-200 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-navy-50 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <service.icon size={18} className="text-navy-900 sm:size-5" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-navy-950 mb-1.5 sm:mb-2 group-hover:text-navy-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
