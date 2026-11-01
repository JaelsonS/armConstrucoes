import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'
import { TechnicalGrid } from '@/components/ui/TechnicalGrid'
import { company } from '@/data/company'

const lines = [
  { text: 'Construímos', color: 'text-white' },
  { text: 'estruturas.', color: 'text-white' },
  { text: 'Criamos', color: 'text-primary' },
  { text: 'futuro.', color: 'text-primary' },
]

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
      <motion.div
        className="absolute inset-0"
        initial={reduced ? false : { clipPath: 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/images/hero-obra.jpg"
          alt="Edifício em construção ao entardecer com grua"
          className="h-full w-full object-cover"
          width={1920}
          height={1088}
          decoding="async"
          fetchPriority="high"
        />
        <div className="overlay-hero absolute inset-0" />
        <div className="absolute inset-0 bg-ink/30" />
        <TechnicalGrid className="opacity-40" />
      </motion.div>

      <div className="container-bh relative z-10 flex min-h-[100svh] flex-col justify-center pb-24 pt-28 lg:pb-28 lg:pt-32">
        <div className="max-w-3xl">
          <motion.p
            className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/80 sm:text-xs"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <span className="inline-block h-px w-10 bg-primary" aria-hidden />
            {company.tagline}
          </motion.p>

          <h1 className="font-display text-[2.6rem] font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            {lines.map((line, i) => (
              <span key={line.text} className="block overflow-hidden">
                <motion.span
                  className={`block ${line.color}`}
                  initial={reduced ? false : { y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.45 + i * 0.1,
                    duration: 0.75,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            A ARM Construções desenvolve trabalhos de construção civil, obras
            públicas, estruturas metálicas, capoto e remodelações, em Coimbra e
            arredores.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.6 }}
          >
            <Button to="/servicos">Conheça os nossos serviços</Button>
            <Button to="/contactos" variant="ghost">
              Fale com a ARM
            </Button>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 border-l border-t border-primary/40"
      />
    </section>
  )
}
