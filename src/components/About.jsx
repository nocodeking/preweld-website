import { MapPin, Users, Award, Building2, TrendingUp, Heart } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const stats = [
  { value: '45+', label: 'Years in Business', icon: Award },
  { value: '4', label: 'Gauteng Branches', icon: MapPin },
  { value: '50+', label: 'Expert Staff', icon: Users },
  { value: '10K+', label: 'Products Stocked', icon: Building2 },
]

const values = [
  {
    icon: TrendingUp,
    title: 'Industry Leadership',
    text: 'A leader in the supply of industrial and specialty gas, cutting, and welding equipment across South Africa.',
  },
  {
    icon: Users,
    title: 'Expert Staff',
    text: 'Our team is expertly trained to help you find the right solution. We provide the best service, every time.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    text: 'We build lasting relationships with our customers \u2014 from solo welders to large-scale manufacturing operations.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Stats bar */}
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16 sm:mb-20">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6 text-center hover:border-navy-200 transition-colors"
              >
                <stat.icon size={18} className="text-navy-900 mx-auto mb-2 sm:mb-3 sm:size-5" />
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          {/* Left - image + overlay */}
          <ScrollReveal>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/product-welder.jpg"
                  alt="Welding in action"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award size={16} className="text-emerald-700 sm:size-5" />
                      </div>
                      <div>
                        <div className="font-display font-bold text-navy-950 text-sm sm:text-base">45+ Years</div>
                        <div className="text-[10px] sm:text-xs text-gray-500">Serving Gauteng since 1979</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -z-10 -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-full h-full bg-navy-100 rounded-2xl" />
            </div>
          </ScrollReveal>

          {/* Right - text */}
          <ScrollReveal delay={1}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-50 border border-navy-100 rounded-full mb-4">
                <Award size={14} className="text-navy-900" />
                <span className="text-xs font-semibold text-navy-900 uppercase tracking-wider">Est. 1979</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mb-4 sm:mb-6">
                Trusted by Gauteng's{' '}
                <span className="gradient-text">Welding Industry</span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed mb-6 sm:mb-8">
                <p className="text-sm sm:text-base">
                  Since 1979, Preweld has been the go-to source for gas, cutting, and welding 
                  supplies in Pretoria and the greater Gauteng region. Four strategically positioned 
                  branches serving the province's industrial and commercial hubs.
                </p>
                <p className="text-sm sm:text-base">
                  From welding machines and consumables to specialty gases and full PPE — overalls, 
                  dust masks, safety specs, respirators, gloves, safety shoes, and boots. 
                  You're covered from top to toe.
                </p>
              </div>

              {/* Values as horizontal cards instead of stacked */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="p-3 sm:p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-navy-200 transition-colors text-center"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-navy-50 rounded-lg flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                      <value.icon size={14} className="text-navy-900 sm:size-[18px]" />
                    </div>
                    <h3 className="font-display text-xs sm:text-sm font-bold text-navy-950 mb-0.5 sm:mb-1">
                      {value.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed line-clamp-3">{value.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
