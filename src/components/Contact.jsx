import { useState } from 'react'
import {
  Phone, Mail, MapPin, Clock, Send, MessageSquare, ArrowRight, CheckCircle
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const branches = [
  {
    name: 'Pretoria West',
    address: '317 Charlotte Maxeke St, Pretoria West, 0183',
    phone: '012 327 2694',
    option: 'Option 1',
    fax: '012 327 2679',
    cell: '072 774 8927',
    email: 'sales@preweld.com',
    contact: 'Peter Blanchard',
    primary: true,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229317.9!2d28.0495!3d-25.7479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95619cbec65233%3A0x1dd3e02a5f81f18c!2sPretoria%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
  },
  {
    name: 'Rosslyn',
    address: '181 Van Niekerk St, Aquila Park Unit 4, Rosslyn East, 0200',
    phone: '012 327 2694',
    option: 'Option 2',
    fax: '012 327 2679',
    cell: '082 680 8596',
    email: 'rosslyn@preweld.com',
    contact: 'Alan De Bastos',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229317.9!2d28.0495!3d-25.7479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95619cbec65233%3A0x1dd3e02a5f81f18c!2sRosslyn%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
  },
  {
    name: 'Sunderland Ridge',
    address: '94 Ellman St, Rumba Centre, Sunderland Ridge, 0157',
    phone: '012 327 2694',
    option: 'Option 3',
    fax: '012 327 2679',
    cell: '060 925 2180',
    email: 'sunderland@preweld.com',
    contact: 'Jaco Potgieter',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229317.9!2d28.0495!3d-25.7479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95619cbec65233%3A0x1dd3e02a5f81f18c!2sSunderland%20Ridge%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
  },
  {
    name: 'Brits',
    address: '34 Harrington St, Brits, 0250',
    phone: '012 327 2694',
    option: 'Option 4',
    fax: '012 327 2679',
    cell: '073 975 4454',
    email: 'brits@preweld.com',
    contact: 'Ruan Pienaar',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229317.9!2d28.0495!3d-25.7479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95619cbec65233%3A0x1dd3e02a5f81f18c!2sBrits%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
  },
]

export default function Contact() {
  const [activeBranch, setActiveBranch] = useState(0)
  const [formState, setFormState] = useState({
    name: '', company: '', email: '', phone: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (e) => setFormState(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState({ name: '', company: '', email: '', phone: '', message: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const branch = branches[activeBranch]

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-50 border border-navy-100 rounded-full mb-4">
              <MessageSquare size={14} className="text-navy-900" />
              <span className="text-xs font-semibold text-navy-900 uppercase tracking-wider">Get In Touch</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Let's Talk{' '}
              <span className="text-navy-900">Welding</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you need a quote, technical advice, or just want to check stock — 
              our friendly team is ready to help.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
          {/* Left - Contact info + branches */}
          <ScrollReveal delay={1}>
            <div className="space-y-8">
            {/* Quick contact */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 lg:p-8">
              <h3 className="font-display text-xl font-bold text-navy-950 mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <a href="tel:0123272694" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-navy-50 border border-navy-100 rounded-lg flex items-center justify-center">
                    <Phone size={18} className="text-navy-900" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="text-navy-950 font-semibold group-hover:text-navy-700 transition-colors">
                      012 327 2694 / 8
                    </div>
                  </div>
                </a>
                <a href="tel:0828072697" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-navy-50 border border-navy-100 rounded-lg flex items-center justify-center">
                    <Phone size={18} className="text-navy-900" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Cell</div>
                    <div className="text-navy-950 font-semibold group-hover:text-navy-700 transition-colors">
                      082 807 2697
                    </div>
                  </div>
                </a>
                <a href="mailto:info@preweld.co.za" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-navy-50 border border-navy-100 rounded-lg flex items-center justify-center">
                    <Mail size={18} className="text-navy-900" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-navy-950 font-semibold group-hover:text-navy-700 transition-colors">
                      info@preweld.co.za
                    </div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-navy-50 border border-navy-100 rounded-lg flex items-center justify-center">
                    <Clock size={18} className="text-navy-900" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Trading Hours</div>
                    <div className="text-navy-950 font-semibold">Mon - Fri: 07:30 - 17:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Branch list */}
            <div>
              <h3 className="font-display text-lg font-bold text-navy-950 mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-navy-900" />
                Our Branches
              </h3>
              <div className="space-y-3">
                {branches.map((b, i) => (
                  <button
                    key={b.name}
                    onClick={() => setActiveBranch(i)}
                    className={`w-full text-left flex items-start justify-between p-4 rounded-xl border transition-all ${
                      activeBranch === i
                        ? 'bg-navy-50 border-navy-200 ring-1 ring-navy-200'
                        : 'bg-gray-50 border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-navy-950 flex items-center gap-2">
                        {b.name}
                        {b.primary && (
                          <span className="px-2 py-0.5 bg-navy-900 text-white text-[10px] rounded-full font-bold uppercase">
                            HQ
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">{b.address}</div>
                      <div className="text-xs text-gray-400 mt-1">{b.contact} • {b.option}</div>
                    </div>
                    <a
                      href={`tel:${b.phone.replace(/\s/g, '')}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-navy-900 hover:text-sky-500 text-sm font-semibold transition-colors flex-shrink-0 ml-3"
                    >
                      {b.phone}
                    </a>
                  </button>
                ))}
              </div>
            </div>

            {/* Active branch detail */}
            <div className="bg-navy-900 text-white rounded-2xl p-6">
              <h4 className="font-display font-bold text-lg mb-3">{branch.name}</h4>
              <div className="space-y-2 text-sm text-navy-200">
                <p className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-sky-300" />
                  {branch.address}
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={14} className="flex-shrink-0 text-sky-300" />
                  <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                    {branch.phone} ({branch.option})
                  </a>
                </p>
                {branch.cell && (
                  <p className="flex items-center gap-2">
                    <Phone size={14} className="flex-shrink-0 text-sky-300" />
                    <a href={`tel:${branch.cell.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                      {branch.cell}
                    </a>
                  </p>
                )}
                <p className="flex items-center gap-2">
                  <Mail size={14} className="flex-shrink-0 text-sky-300" />
                  <a href={`mailto:${branch.email}`} className="hover:text-white transition-colors">
                    {branch.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-sky-300 font-medium text-xs uppercase">Contact:</span>
                  {branch.contact}
                </p>
              </div>
            </div>
            </div>
          </ScrollReveal>

          {/* Right - Contact form + Map */}
          <ScrollReveal delay={2}>
            <div className="space-y-8">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <div className="aspect-[16/9] w-full">
                <iframe
                  key={activeBranch}
                  src={branch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${branch.name} Location`}
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 lg:p-8">
              <h3 className="font-display text-xl font-bold text-navy-950 mb-2">
                Request a Quote
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Fill in your details and we'll get back to you within the hour during business hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy-950 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-navy-950 placeholder:text-gray-400 focus:outline-none focus:border-navy-300 focus:ring-2 focus:ring-navy-100 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-950 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-navy-950 placeholder:text-gray-400 focus:outline-none focus:border-navy-300 focus:ring-2 focus:ring-navy-100 transition-colors"
                      placeholder="ABC Welding (Pty) Ltd"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy-950 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange('email')}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-navy-950 placeholder:text-gray-400 focus:outline-none focus:border-navy-300 focus:ring-2 focus:ring-navy-100 transition-colors"
                      placeholder="john@company.co.za"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-950 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={handleChange('phone')}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-navy-950 placeholder:text-gray-400 focus:outline-none focus:border-navy-300 focus:ring-2 focus:ring-navy-100 transition-colors"
                      placeholder="082 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-950 mb-2">
                    What Do You Need?
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={handleChange('message')}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-navy-950 placeholder:text-gray-400 focus:outline-none focus:border-navy-300 focus:ring-2 focus:ring-navy-100 transition-colors resize-none"
                    placeholder="Tell us about your requirements — product types, quantities, or any questions..."
                  />
                </div>

                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
                    <h4 className="font-display text-xl font-bold text-navy-950 mb-2">Enquiry Sent!</h4>
                    <p className="text-sm text-gray-500">We'll get back to you within the hour during business hours.</p>
                  </div>
                ) : (
                  <>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-navy-900/15 group"
                >
                  <Send size={18} />
                  Send Enquiry
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We typically respond within 1 hour during business hours.
                </p>
                </>
                )}
              </form>
            </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
