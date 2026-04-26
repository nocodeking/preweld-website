import { MapPin, Users, Award, Building2, TrendingUp, Heart } from 'lucide-react'

const stats = [
  { value: '45+', label: 'Years in Business', icon: Award },
  { value: '5', label: 'Gauteng Branches', icon: MapPin },
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
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:border-navy-200 transition-colors"
            >
              <stat.icon size={20} className="text-navy-900 mx-auto mb-3" />
              <div className="font-display text-3xl lg:text-4xl font-bold text-navy-950 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-50 border border-navy-100 rounded-full mb-4">
              <Award size={14} className="text-navy-900" />
              <span className="text-xs font-semibold text-navy-900 uppercase tracking-wider">Est. 1979</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mb-6">
              Trusted by Gauteng's{' '}
              <span className="gradient-text">Welding Industry</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Since 1979, Preweld has been the go-to source for gas, cutting, and welding 
                supplies in Pretoria and the greater Gauteng region. What started as a single 
                branch has grown into a trusted network of five locations, strategically 
                positioned to serve the province's industrial and commercial hubs.
              </p>
              <p>
                We supply everything from welding machines and consumables to specialty gases 
                and a full range of Personal Protective Equipment \u2014 overalls, dust masks, 
                safety specs, respirators, gloves, safety shoes, and boots. You're covered 
                from top to toe.
              </p>
            </div>
          </div>

          {/* Right - values */}
          <div className="space-y-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-5 p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:border-navy-200 transition-colors"
              >
                <div className="w-12 h-12 bg-navy-50 border border-navy-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon size={20} className="text-navy-900" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-950 mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
