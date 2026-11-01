import { Link } from 'react-router-dom'
import { CircleHelp } from 'lucide-react'
import { services } from '@/data/services'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { TechnicalGrid } from '@/components/ui/TechnicalGrid'

const options = [
  ...services.map((s) => ({
    label: s.shortTitle,
    tipo: s.quoteTipo,
    Icon: s.icon,
  })),
  { label: 'Outro', tipo: 'outro', Icon: CircleHelp },
]

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <TechnicalGrid variant="dark" />
      <div className="container-bh relative">
        <Reveal>
          <SectionHeading
            eyebrow="Orçamento"
            title="Vamos construir o próximo projeto?"
            description="Tem uma obra para realizar, um edifício para renovar ou uma solução construtiva para desenvolver? Partilhe connosco o seu projeto."
            className="max-w-2xl"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            Selecione o tipo de projeto
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {options.map((opt) => {
              const Icon = opt.Icon
              return (
                <Link
                  key={opt.tipo}
                  to={`/orcamento?tipo=${opt.tipo}`}
                  className="group flex min-h-[88px] items-center gap-4 border border-border bg-white p-4 transition hover:border-primary"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-paper text-primary transition group-hover:border-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-lg font-semibold text-ink group-hover:text-primary">
                    {opt.label}
                  </span>
                </Link>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/orcamento">Pedir orçamento</Button>
            <Button to="/contactos" variant="outline">
              Contactar diretamente
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
