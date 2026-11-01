import {
  Eye,
  Handshake,
  Ruler,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { differentials } from '@/data/method'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TechnicalGrid } from '@/components/ui/TechnicalGrid'

const icons = [Handshake, ShieldCheck, Ruler, Eye, Wrench]

export function Differentials() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
      <TechnicalGrid className="opacity-30" />
      <div className="container-bh relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Valores"
            title="Cada projeto merece atenção ao detalhe."
          />
          <div className="mt-10 grid grid-cols-2 gap-3">
            <img
              src="/images/capoto.jpg"
              alt="Trabalho de fachada e isolamento"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
            <img
              src="/images/estruturas-metalicas.jpg"
              alt="Estrutura metálica em obra"
              className="mt-8 aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="space-y-0 divide-y divide-white/10 border-y border-white/10">
            {differentials.map((item, i) => {
              const Icon = icons[i] ?? ShieldCheck
              return (
                <li
                  key={item}
                  className="flex items-center gap-5 py-6 sm:gap-6 sm:py-7"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
                    {item}
                  </span>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
