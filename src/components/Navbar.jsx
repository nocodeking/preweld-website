import { useState, useEffect } from 'react'
import { Menu, X, Phone, Truck, Clock } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Specials', href: '#specials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-200'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between px-6 lg:px-12 py-2 bg-navy-950 text-white text-xs">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Phone size={12} className="text-sky-300" />
            012 327 2694 / 8
          </span>
          <span>info@preweld.co.za</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Gauteng, South Africa</span>
          <span className="text-sky-300 font-medium">Mon - Fri: 07:30 - 17:00</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex items-center justify-between px-6 lg:px-12 py-3">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="/preweld-logo.jpg"
            alt="Preweld"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-navy-900 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-gray-600 hover:text-navy-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 space-y-1 bg-white border-b border-gray-200 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-navy-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block px-4 py-3 mt-2 bg-navy-900 text-white text-center font-semibold rounded-lg"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>

    {/* Delivery banner - sticky below nav */}
    <div className="fixed top-[72px] md:top-[104px] left-0 right-0 z-40 bg-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-2 flex items-center justify-center gap-2 text-sm">
        <Truck size={16} className="flex-shrink-0" />
        <span className="font-semibold">Same-Day Delivery</span>
        <span className="hidden sm:inline text-emerald-100">
          — Order before 2pm, get it today. Gauteng-wide.
        </span>
        <Clock size={14} className="flex-shrink-0 sm:hidden" />
      </div>
    </div>
    </>
  )
}
