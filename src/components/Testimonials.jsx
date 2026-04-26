import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Johan van der Merwe',
    role: 'Workshop Manager',
    company: 'Pretoria Steel Fabricators',
    text: "We've been buying from Preweld for over 15 years. Their staff actually knows what they're talking about — when I need a specific consumable for a job, they don't just guess. Same-day delivery to our workshop saves us every time.",
    rating: 5,
  },
  {
    name: 'Thabo Mokoena',
    role: 'Site Foreman',
    company: 'Mokoena Construction',
    text: 'On a construction site, downtime costs money. Preweld gets us gas refills and replacement tips faster than anyone else in Gauteng. The Centurion branch knows our account by name.',
    rating: 5,
  },
  {
    name: 'Sarah Nkosi',
    role: 'Procurement Officer',
    company: 'Industrial Manufacturing SA',
    text: 'We switched to Preweld for our PPE supply two years ago. Better pricing than our previous supplier, and the quality of their safety gear is consistently high. Our welders refuse to wear anything else now.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-950 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
            <Quote size={14} className="text-sky-400" />
            <span className="text-xs font-semibold text-sky-300 uppercase tracking-wider">Customer Stories</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Trusted by Gauteng's{' '}
            <span className="text-sky-400">Workshops</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed mb-6 text-sm">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                <div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center text-sky-400 font-bold text-sm">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/50 text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
