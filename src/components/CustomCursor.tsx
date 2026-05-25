import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 400, damping: 28 })
  const springY = useSpring(y, { stiffness: 400, damping: 28 })

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px), (pointer: coarse)')
    const update = () => setEnabled(!mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setHovering(!!target.closest('[data-cursor-hover], a, button'))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-normal"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: hovering ? 48 : 28,
        height: hovering ? 48 : 28,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      <div
        className="h-full w-full rounded-full border border-cyan/40"
        style={{
          background:
            'radial-gradient(circle, rgba(53,216,255,0.35) 0%, rgba(139,92,255,0.15) 55%, transparent 70%)',
          boxShadow: hovering
            ? '0 0 32px rgba(139, 92, 255, 0.5), 0 0 16px rgba(53, 216, 255, 0.4)'
            : '0 0 20px rgba(53, 216, 255, 0.35)',
        }}
      />
    </motion.div>
  )
}
