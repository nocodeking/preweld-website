import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Phone, Shield, Truck, Clock } from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'

const trustBadges = [
  { icon: Clock, label: 'Same-Day Delivery', sub: 'Order Before 2pm' },
  { icon: Truck, label: 'Gauteng-Wide', sub: 'Direct to Site' },
  { icon: Shield, label: 'Trusted Since 1979', sub: '45+ Years' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.4], ['0%', '-25%'])

  // Floating particles
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.3 + 0.1,
    }))
  )

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 -top-[10%] -bottom-[10%]" style={{ y: bgY }}>
        <img
          src="/hero-welding.jpg"
          alt="Industrial welding"
          className="w-full h-[120%] object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
      </motion.div>

      {/* Animated overlay pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          opacity: 0.06,
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [p.opacity, p.opacity * 0.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 sm:pt-32 pb-20 w-full"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-2xl">
          {/* Pulse badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 rounded-full mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
              </span>
              <span className="text-emerald-200 text-xs sm:text-sm font-bold tracking-wide">
                Order Before 2pm — Same-Day Delivery Across Gauteng
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.02] tracking-tight mb-6"
          >
            Gas, Cutting &amp;{' '}
            <span className="relative inline-block">
              <span className="text-sky-400">Welding</span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-sky-400/50 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{ originX: 0 }}
              />
            </span>{' '}
            <br />
            <span className="text-white/90">Supplies</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-white/80 max-w-lg leading-relaxed mb-8"
          >
            Same-day delivery across Gauteng on welding machines, gas cylinders,
            PPE, consumables and cutting equipment. Order before 2pm, get it today.
            Trusted by workshops since 1979.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-14"
          >
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-gray-100 text-navy-950 font-bold rounded-xl transition-all duration-300 shadow-2xl shadow-black/30 hover:shadow-black/40 hover:-translate-y-0.5"
            >
              Browse Products
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="tel:0123272694"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone size={18} />
              012 327 2694
            </a>
          </motion.div>

          {/* Trust badges */}
          <StaggerContainer className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-8" staggerDelay={0.12}>
            {trustBadges.map((badge) => (
              <StaggerItem key={badge.label}>
                <div className="flex items-center gap-3 group">
                  <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
                    <badge.icon size={20} className="text-sky-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{badge.label}</div>
                    <div className="text-xs text-white/60">{badge.sub}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </motion.div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </section>
  )
}
