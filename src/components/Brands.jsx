import ScrollReveal from './ScrollReveal'

const brands = [
  'Bosch', 'Gedore', 'Lincoln Electric', 'ESAB', 'BOC', 'Afrox',
  'Hypertherm', 'Kemppi', 'Fronius', 'Makita', 'DeWalt', '3M',
  'Honeywell', 'Uvex', 'SAS Safety', 'Weldclass', 'Tweclo', 'Certilas',
]

export default function Brands() {
  return (
    <section className="relative py-16 sm:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-2">
              Brands We Stock
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm">
              Only the best — we carry products from the world's most trusted welding and tool brands.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {brands.map((brand) => (
            <div
              key={brand}
              className="px-3 sm:px-5 py-1.5 sm:py-2.5 bg-white border border-gray-200 hover:border-navy-200 rounded-lg text-gray-600 hover:text-navy-900 font-medium text-xs sm:text-sm transition-all duration-200 hover:shadow-sm cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
