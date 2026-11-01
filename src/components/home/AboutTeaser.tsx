import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '@/data/company'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TechnicalGrid } from '@/components/ui/TechnicalGrid'

export function AboutTeaser() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <TechnicalGrid variant="dark" className="opacity-60" />
      <div className="container-bh relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative overflow-hidden">
            <img
              src="/images/equipa-obra.jpg"
              alt="Equipa em obra a analisar plantas"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 overlay-bottom p-6">
              <div className="grid grid-cols-2 gap-4 text-white">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                    Sede
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold">
                    Coimbra, Portugal
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                    Áreas
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold">
                    5 especialidades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Quem somos"
            title="Experiência que se transforma em obra."
            description={company.description}
          />
          <Link
            to="/empresa"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
          >
            Conheça a BH
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
