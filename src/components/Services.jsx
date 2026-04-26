import {
  Truck, Wrench, Fuel, ClipboardCheck, GraduationCap, RotateCcw, ArrowRight, Cog,
} from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'

const services = [
  {
    icon: Fuel,
    title: 'Gas Supply & Refills',
    description:
      'Bulk and cylinder gas supply including oxygen, argon, acetylene, CO₂, nitrogen, and mixed gases. Cylinder exchange programmes available.',
  },
  {
    icon: Wrench,
    title: 'Equipment Repairs',
    description:
      'In-house repair and servicing for welding machines, plasma cutters, and cutting equipment. Fast turnaround to minimise your downtime.',
  },
  {
    icon: Truck,
    title: 'Delivery Services',
    description:
      'Same-day and next-day delivery across Gauteng. We deliver directly to your workshop, site, or factory floor.',
  },
  {
    icon: ClipboardCheck,
    title: 'Technical Advice',
    description:
      'Our expert staff help you select the right equipment and consumables for your specific welding application and materials.',
  },
  {
    icon: GraduationCap,
    title: 'Welding Training Support',
    description:
      'We partner with accredited training providers and can recommend courses for your staff — from beginner to advanced certification.',
  },
  {
    icon: RotateCcw,
    title: 'Equipment Hire',
    description:
      'Short and long-term rental of welding machines, generators, and site equipment for project-based needs.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="absolute top-20 right-20 w-60 h-60 bg-navy-900/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-sky-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 sm:gap-16 items-start">
          {/* Left — header */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-5 shadow-sm">
                <Cog size={15} className="text-navy-900" />
                <span className="text-xs font-bold text-navy-900 uppercase tracking-widest">Our Services</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-navy-950 tracking-tight mb-6">
                More Than Just{' '}
                <span className="gradient-text">Supply</span>
              </h2>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
                Preweld is your full-service partner. From gas refills to equipment repairs
                and expert advice — we keep your operations running.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-navy-900/20 group"
              >
                Discuss Your Needs
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </ScrollReveal>

          {/* Right — services grid */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-4 sm:gap-5" staggerDelay={0.08}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group bg-white border border-gray-200 hover:border-navy-200 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                  <div className="w-11 h-11 bg-navy-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-navy-900 group-hover:scale-110 transition-all duration-300">
                    <service.icon size={20} className="text-navy-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-navy-950 mb-2 group-hover:text-navy-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
