import { Clock, Truck, Wrench, Users, ShieldCheck, BadgeCheck } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const reasons = [
  {
    icon: Clock,
    title: 'Same-Day Availability',
    text: 'Walk into any of our 4 Gauteng branches and walk out with what you need. No waiting, no backorders on core stock.',
  },
  {
    icon: Truck,
    title: 'Direct to Site Delivery',
    text: 'We deliver to your workshop, factory floor, or construction site. Same-day and scheduled deliveries across Gauteng.',
  },
  {
    icon: Wrench,
    title: 'In-House Repairs',
    text: 'Welding machine broken? Our technicians repair and service equipment on-site. Fast turnaround, honest assessment.',
  },
  {
    icon: Users,
    title: 'Staff Who Actually Weld',
    text: 'Our team isn\'t just salespeople \u2014 they understand your application and recommend the right solution the first time.',
  },
  {
    icon: ShieldCheck,
    title: 'Genuine Products Only',
    text: 'We are authorised dealers for Bosch, Lincoln, ESAB, and Gedore. No grey imports. Full manufacturer warranty.',
  },
  {
    icon: BadgeCheck,
    title: '45 Years of Trust',
    text: 'Since 1979, we\'ve outlasted competitors by doing right by our customers. Ask around \u2014 our reputation speaks for itself.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full mb-4 shadow-sm">
              <BadgeCheck size={14} className="text-navy-900" />
              <span className="text-xs font-semibold text-navy-900 uppercase tracking-wider">Why Preweld</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mb-3 sm:mb-4">
              The Difference Is{' '}
              <span className="gradient-text">In the Details</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Any supplier can drop off a box. We show up with expertise, stock, and a commitment to keeping your operation running.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i + 1}>
              <div className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 hover:border-navy-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-navy-900 transition-colors duration-300">
                  <r.icon size={20} className="text-navy-900 group-hover:text-white transition-colors duration-300 sm:size-[22px]" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-navy-950 mb-1.5 sm:mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {r.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
