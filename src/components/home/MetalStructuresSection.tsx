import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { TechnicalGrid } from '@/components/ui/TechnicalGrid'

export function MetalStructuresSection() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <TechnicalGrid variant="dark" className="opacity-50" />
      <div className="container-bh relative grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-7">
          <div className="relative aspect-[5/4] overflow-hidden bg-ink">
            <img
              src="/images/estruturas-metalicas.jpg"
              alt="Montagem de estrutura metálica"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">
              Engenharia em aço
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-5">
          <p className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-primary sm:text-xs">
            <span className="inline-block h-px w-8 bg-primary" aria-hidden />
            ARM-04 · Estruturas metálicas
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Precisão que sustenta grandes projetos.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            Trabalhos de estruturas metálicas para pavilhões, coberturas,
            estruturas de apoio e soluções construtivas complementares, com
            montagem acompanhada em obra.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/servicos#estruturas-metalicas">Ver serviço</Button>
            <Button to="/contactos" variant="outline">
              Contactar
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
