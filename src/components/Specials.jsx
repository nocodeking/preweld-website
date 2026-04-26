import { Tag, ArrowRight, Clock, Flame } from 'lucide-react'

const specials = [
  {
    brand: 'Bosch',
    title: 'Angle Grinder Deals',
    description: 'Selected Bosch angle grinders on promotion this month. Professional-grade tools at unbeatable prices.',
    discount: 'Up to 25% OFF',
    badge: 'HOT DEAL',
    border: 'border-red-200',
    badgeBg: 'bg-red-50',
    badgeText: 'text-red-600',
  },
  {
    brand: 'Gedore',
    title: 'Hand Tool Promotions',
    description: 'Huge selection of Gedore hand tools on special. Spanners, sockets, pliers, and complete tool kits.',
    discount: 'Selected Items',
    badge: 'BUNDLE DEAL',
    border: 'border-navy-200',
    badgeBg: 'bg-navy-50',
    badgeText: 'text-navy-700',
  },
  {
    brand: 'Various',
    title: 'Drill Bit Specials',
    description: 'Assorted drill bit deals across multiple brands. HSS, masonry, and step drill sets.',
    discount: 'While Stocks Last',
    badge: 'LIMITED',
    border: 'border-amber-200',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-700',
  },
]

export default function Specials() {
  return (
    <section id="specials" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 border border-red-100 rounded-full mb-4">
            <Flame size={14} className="text-red-500" />
            <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">This Month's Specials</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            Deals You Don't Want{' '}
            <span className="gradient-text">to Miss</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Promotions change monthly. Grab these deals before they're gone — 
            call us at <span className="text-navy-900 font-semibold">012 327 2694</span> to confirm availability.
          </p>
        </div>

        {/* Specials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {specials.map((item) => (
            <div
              key={item.title}
              className={`group relative bg-white border ${item.border} hover:border-navy-300 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              {/* Top accent line */}
              <div className="h-1 bg-gradient-to-r from-navy-900 to-sky-500" />

              <div className="p-7">
                {/* Badges */}
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-[11px] font-bold text-gray-600 uppercase tracking-wider">
                    {item.brand}
                  </span>
                  <span className={`px-3 py-1 ${item.badgeBg} rounded-full text-[11px] font-bold ${item.badgeText} uppercase tracking-wider`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-navy-950 mb-3 group-hover:text-navy-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Tag size={14} className="text-navy-900" />
                    <span className="text-navy-900 font-bold text-sm">{item.discount}</span>
                  </div>
                  <a
                    href="#contact"
                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-navy-900 transition-colors font-medium"
                  >
                    Enquire <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency banner */}
        <div className="mt-12 flex items-center justify-center gap-3 px-6 py-4 bg-navy-50 border border-navy-100 rounded-xl">
          <Clock size={16} className="text-navy-900" />
          <p className="text-sm text-navy-900">
            <span className="font-semibold">Limited stock</span> — promotions valid while stocks last. Contact us to reserve your items today.
          </p>
        </div>
      </div>
    </section>
  )
}
