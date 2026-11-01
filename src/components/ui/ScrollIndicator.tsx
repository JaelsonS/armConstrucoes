import { motion, useReducedMotion } from 'framer-motion'

export function ScrollIndicator() {
  const reduced = useReducedMotion()

  return (
    <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
        Scroll
      </span>
      <div className="relative h-10 w-px overflow-hidden bg-white/20">
        <motion.span
          className="absolute inset-x-0 top-0 h-1/2 bg-primary"
          animate={reduced ? undefined : { y: ['-100%', '200%'] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}
