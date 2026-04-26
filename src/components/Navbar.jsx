import { useState, useEffect, useCallback } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Specials', href: '#specials' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = useCallback((e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return

    setOpen(false)

    // Calculate navbar height dynamically
    const topBar = document.querySelector('header')?.querySelector('.hidden.md\\:flex')
    const topBarHeight = topBar ? topBar.offsetHeight : 0
    const navHeight = 56 // mobile
    const bannerHeight = 36 // delivery banner mobile
    const desktopOffset = 88 + bannerHeight // desktop nav + top bar + banner

    const isDesktop = window.innerWidth >= 768
    const offset = isDesktop ? desktopOffset : navHeight + bannerHeight

    const top = el.getBoundingClientRect().top + window.pageYOffset - offset

    window.scrollTo({ top, behavior: 'smooth' })
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
        {/* Top bar — desktop only */}
        <div className="hidden md:flex items-center justify-between px-6 lg:px-12 py-2 bg-navy-950 text-white text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:0123272694" className="flex items-center gap-1.5 hover:text-sky-300 transition-colors">
              <Phone size={12} className="text-sky-300" />
              012 327 2694 / 8
            </a>
            <span className="text-white/50">info@preweld.co.za</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/40">Gauteng, SA</span>
            <span className="text-sky-300 font-semibold">Mon – Fri: 07:30 – 17:00</span>
          </div>
        </div>

        {/* Main nav */}
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-2.5 sm:py-3">
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, '#hero')}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <img
              src="/preweld-logo.jpg"
              alt="Preweld"
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="px-3 xl:px-4 py-2 text-sm font-medium text-gray-600 hover:text-navy-900 rounded-lg transition-colors hover:bg-gray-50"
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
              onClick={(e) => scrollTo(e, '#contact')}
              className="px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-sm font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-navy-900/20 active:scale-95"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-gray-600 hover:text-navy-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pb-5 space-y-1 bg-white border-b border-gray-200 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="block px-4 py-3 text-gray-700 hover:text-navy-900 hover:bg-gray-50 rounded-xl transition-colors font-semibold text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0123272694"
              onClick={() => setOpen(false)}
              className="block px-4 py-3.5 mt-2 bg-navy-900 text-white text-center font-bold rounded-xl hover:bg-navy-800 transition-colors"
            >
              Call 012 327 2694
            </a>
          </div>
        </div>
      </header>

      {/* Delivery banner */}
      <div className="fixed top-[52px] sm:top-[54px] md:top-[88px] left-0 right-0 z-40 bg-emerald-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-1.5 sm:py-2 flex items-center justify-center gap-2 text-[11px] sm:text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          <span className="font-bold">Same-Day Delivery</span>
          <span className="hidden sm:inline text-emerald-100 font-medium">
            — Order before 2pm, get it today. Gauteng-wide.
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 sm:hidden"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
      </div>
    </>
  )
}
