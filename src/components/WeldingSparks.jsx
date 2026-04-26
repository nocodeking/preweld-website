import { useEffect, useRef } from 'react'

export default function WeldingSparks() {
  const svgRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const sparks = []
    const count = 12

    for (let i = 0; i < count; i++) {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      const x = 20 + Math.random() * 60
      const y = 30 + Math.random() * 50
      const r = 1 + Math.random() * 2.5
      circle.setAttribute('cx', `${x}%`)
      circle.setAttribute('cy', `${y}%`)
      circle.setAttribute('r', r)
      circle.setAttribute('fill', Math.random() > 0.5 ? '#60a5fa' : '#34d399')
      circle.setAttribute('opacity', '0')
      circle.style.animation = `spark-fly ${2 + Math.random() * 2}s ease-out ${Math.random() * 3}s infinite`
      svg.appendChild(circle)
      sparks.push(circle)
    }

    return () => sparks.forEach(s => s.remove())
  }, [])

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 5 }}
    >
      <style>{`
        @keyframes spark-fly {
          0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
          15% { opacity: 0.9; }
          100% { opacity: 0; transform: translate(${Math.random() > 0.5 ? '' : '-'}${20 + Math.random() * 40}px, -${40 + Math.random() * 60}px) scale(0.2); }
        }
      `}</style>
    </svg>
  )
}
