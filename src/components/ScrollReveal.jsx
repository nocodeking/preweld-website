import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ScrollReveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const { ref, isVisible } = useScrollReveal()
  const delayClass = delay > 0 ? ` reveal-delay-${Math.min(delay, 5)}` : ''

  return (
    <Tag
      ref={ref}
      className={`reveal${isVisible ? ' visible' : ''}${delayClass}${className ? ' ' + className : ''}`}
    >
      {children}
    </Tag>
  )
}
