import {
  Truck, Wrench, Fuel, ClipboardCheck, GraduationCap, RotateCcw,
  ArrowRight, Cog
} from 'lucide-react'

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
    <section id="services" className="relative py-24 lg:py-32 bg-gray-50">
      {/* Decorative dots */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-navy-900/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-sky-400/5 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Left column - header */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full mb-4 shadow-sm">
              <Cog size={14} className="text-navy-900" />
              <span className="text-xs font-semibold text-navy-900 uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mb-6">
              More Than Just{' '}
              <span className="gradient-text">Supply</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Preweld is your full-service partner. From gas refills to equipment repairs 
              and expert advice \u2014 we keep your operations running.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-navy-900/15 group"
            >
              Discuss Your Needs
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right column - services grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white border border-gray-200 hover:border-navy-200 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-11 h-11 bg-navy-50 rounded-xl flex items-center justify-center mb-4">
                  <service.icon size={20} className="text-navy-900" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-950 mb-2 group-hover:text-navy-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
