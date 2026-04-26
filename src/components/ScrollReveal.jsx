import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  distance = 40,
  duration = 0.6,
  className = '',
  as: Tag = 'div',
  once = true,
  stagger = false,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-60px 0px' })

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionMap[direction] }
      }
      transition={{
        duration,
        delay: delay * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger container for animating children in sequence
export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: 0.1 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up',
  distance = 30,
}) {
  const dir = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...dir[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
