import { Quote, Star } from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'

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
    <section className="relative py-20 sm:py-28 lg:py-32 bg-navy-950 overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-5">
              <Quote size={15} className="text-sky-400" />
              <span className="text-xs font-bold text-sky-300 uppercase tracking-widest">
                Customer Stories
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
              Trusted by Gauteng's{' '}
              <span className="text-sky-400">Workshops</span>
            </h2>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
              Don't take our word for it — hear from the people who rely on us daily.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-5 sm:gap-6" staggerDelay={0.1}>
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 sm:p-8 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300 h-full flex flex-col backdrop-blur-sm">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={15} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mb-6 text-sm flex-grow italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-5 border-t border-white/[0.08]">
                  <div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center text-sky-400 font-black text-sm flex-shrink-0">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-bold text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs truncate">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
