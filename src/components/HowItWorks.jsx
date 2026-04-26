import { Phone, ClipboardList, Truck } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    step: '01',
    title: 'Call or WhatsApp',
    text: 'Speak to our team. Tell us what you need — welding machines, gas, PPE, consumables. We\'ll confirm stock and pricing instantly.',
    highlight: '012 327 2694',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Get Your Quote',
    text: 'We\'ll put together a formal quote or take your order on the spot. Trade account customers get priority pricing and terms.',
    highlight: 'Same-Day Pricing',
  },
  {
    icon: Truck,
    step: '03',
    title: 'We Deliver Today',
    text: 'Order before 2pm and your welding supplies arrive same-day anywhere in Gauteng. Direct to your workshop or site.',
    highlight: 'Order Before 2pm',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-50 border border-navy-100 rounded-full mb-4">
            <span className="text-xs font-semibold text-navy-900 uppercase tracking-wider">How It Works</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mb-4">
            Welding Supplies,{' '}
            <span className="gradient-text">Simplified</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Three steps from phone call to delivery. No e-commerce cart. No waiting. Just call and we handle the rest.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-navy-200 via-sky-300 to-navy-200" />

          {steps.map((s, i) => (
            <div key={i} className="relative text-center group">
              {/* Icon circle */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-white border-2 border-navy-100 rounded-full mb-6 group-hover:border-navy-900 group-hover:shadow-lg group-hover:shadow-navy-900/10 transition-all duration-300 z-10">
                <s.icon size={28} className="text-navy-900" />
                {/* Step number badge */}
                <span className="absolute -top-1 -right-1 w-7 h-7 bg-navy-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {s.step}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-navy-950 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3 max-w-xs mx-auto">
                {s.text}
              </p>
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full">
                {s.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
