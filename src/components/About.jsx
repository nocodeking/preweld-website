import { motion } from 'framer-motion'
import { MapPin, Users, Award, Building2, TrendingUp, Heart } from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'

const stats = [
  { value: '45+', label: 'Years in Business', icon: Award },
  { value: '4', label: 'Gauteng Branches', icon: MapPin },
  { value: '50+', label: 'Expert Staff', icon: Users },
  { value: '10K+', label: 'Products Stocked', icon: Building2 },
]

const values = [
  { icon: TrendingUp, title: 'Industry Leader', text: 'A leader in industrial gas, cutting, and welding equipment across South Africa.' },
  { icon: Users, title: 'Expert Team', text: 'Trained staff help you find the right solution. Best service, every time.' },
  { icon: Heart, title: 'Customer First', text: 'Lasting relationships from solo welders to large-scale manufacturing.' },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Stats bar */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16 sm:mb-20" staggerDelay={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6 text-center hover:border-navy-200 hover:shadow-md transition-all duration-300">
                <stat.icon size={20} className="text-navy-900 mx-auto mb-3" />
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">
          {/* Image */}
          <ScrollReveal>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/welder-action.jpg"
                  alt="Welding in action"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[520px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
                {/* Floating badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-5 left-5 right-5"
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award size={22} className="text-emerald-700" />
                      </div>
                      <div>
                        <div className="font-display font-black text-navy-950 text-lg">45+ Years</div>
                        <div className="text-xs text-gray-500">Serving Gauteng since 1979</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-navy-100 rounded-3xl" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={1}>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-50 border border-navy-100 rounded-full mb-5">
                <Award size={15} className="text-navy-900" />
                <span className="text-xs font-bold text-navy-900 uppercase tracking-widest">Est. 1979</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-navy-950 tracking-tight mb-6">
                Trusted by Gauteng's{' '}
                <span className="gradient-text">Welding Industry</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
                <p>
                  Since 1979, Preweld has been the go-to source for gas, cutting, and welding
                  supplies in Pretoria and the greater Gauteng region. Four strategically positioned
                  branches serving the province's industrial and commercial hubs.
                </p>
                <p>
                  From welding machines and consumables to specialty gases and full PPE — overalls,
                  dust masks, safety specs, respirators, gloves, safety shoes, and boots.
                  You're covered from top to toe.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {values.map((value) => (
                  <div key={value.title} className="p-3 sm:p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-navy-200 hover:shadow-sm transition-all duration-300 text-center">
                    <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <value.icon size={18} className="text-navy-900" />
                    </div>
                    <h3 className="font-display text-xs sm:text-sm font-bold text-navy-950 mb-1">{value.title}</h3>
                    <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed line-clamp-2">{value.text}</p>
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
