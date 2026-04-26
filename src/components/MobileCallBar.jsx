import { Phone, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function MobileCallBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400 && !dismissed) {
        setVisible(true)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [dismissed])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-navy-900 px-4 py-3 flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Phone size={18} className="text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-xs text-navy-200">Need a quote?</div>
            <a href="tel:0123272694" className="text-white font-bold text-sm">
              012 327 2694
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="tel:0123272694"
            className="px-4 py-2 bg-white text-navy-900 text-sm font-bold rounded-lg"
          >
            Call Now
          </a>
          <button
            onClick={() => { setVisible(false); setDismissed(true) }}
            className="w-8 h-8 flex items-center justify-center text-navy-300 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
