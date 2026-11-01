import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { methodSteps } from '@/data/method'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function MethodSection() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.4'],
  })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-bh">
        <Reveal>
          <SectionHeading
            eyebrow="Processo"
            title="Um processo claro. Uma execução responsável."
            className="mb-12 lg:mb-16"
          />
        </Reveal>

        <div ref={ref} className="relative grid gap-10 lg:grid-cols-[80px_1fr] lg:gap-12">
          <div className="relative mx-auto hidden w-px bg-border lg:block" aria-hidden>
            {!reduced ? (
              <motion.div
                className="absolute inset-x-0 top-0 w-px bg-primary"
                style={{ height }}
              />
            ) : (
              <div className="absolute inset-0 bg-primary" />
            )}
          </div>

          <ol className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {methodSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.06}>
                <li className="border border-border bg-paper/60 p-6 sm:p-8">
                  <span className="font-mono text-3xl font-semibold text-primary">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
