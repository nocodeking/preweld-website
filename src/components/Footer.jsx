import { useState } from 'react'
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const productLinks = [
  'Welding Machines', 'Gases & Cylinders', 'Cutting Equipment',
  'Safety & PPE', 'Consumables', 'Hand & Power Tools',
]

const serviceLinks = [
  'Gas Supply & Refills', 'Equipment Repairs', 'Delivery Services',
  'Technical Advice', 'Equipment Hire',
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <footer className="relative bg-navy-950 text-white overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr] gap-10 lg:gap-8">
          {/* Brand */}
          <ScrollReveal>
            <div>
              <img
                src="/preweld-logo.jpg"
                alt="Preweld"
                className="h-12 w-auto object-contain mb-5 brightness-0 invert"
              />
              <p className="text-sm text-navy-200 leading-relaxed mb-6">
                The trusted source of gas, cutting and welding supplies since 1979.
                Serving Gauteng's industries with quality products and expert service.
              </p>
              {/* Social */}
              <div className="flex gap-3">
                {['facebook', 'instagram', 'linkedin'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-white/40 hover:text-white transition-all"
                    aria-label={platform}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      {platform === 'facebook' && (
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      )}
                      {platform === 'instagram' && (
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      )}
                      {platform === 'linkedin' && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Products */}
          <ScrollReveal delay={1}>
            <div>
              <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-5">
                Products
              </h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link}>
                    <a href="#products" className="text-sm text-white/50 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal delay={2}>
            <div>
              <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-5">
                Services
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link}>
                    <a href="#services" className="text-sm text-white/50 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact + Newsletter */}
          <ScrollReveal delay={3}>
            <div>
              <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-5">
                Get In Touch
              </h4>
              <div className="space-y-3 mb-6">
                <a href="tel:0123272694" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                  <Phone size={14} className="text-sky-400 group-hover:scale-110 transition-transform" />
                  012 327 2694 / 8
                </a>
                <a href="mailto:info@preweld.co.za" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                  <Mail size={14} className="text-sky-400 group-hover:scale-110 transition-transform" />
                  info@preweld.co.za
                </a>
                <div className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin size={14} className="text-sky-400 mt-0.5 flex-shrink-0" />
                  <span>4 branches across Gauteng</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="pt-5 border-t border-white/10">
                <p className="text-xs text-white/40 mb-3 font-medium">
                  Stay updated on specials and new stock
                </p>
                {submitted ? (
                  <p className="text-sm text-emerald-400 font-semibold">Thanks! You're subscribed.</p>
                ) : (
                  <form onSubmit={handleNewsletter} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.co.za"
                      required
                      className="flex-1 min-w-0 px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/30 transition-all"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2.5 bg-sky-500 hover:bg-sky-400 text-white rounded-lg transition-colors flex-shrink-0"
                    >
                      <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Preweld (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
