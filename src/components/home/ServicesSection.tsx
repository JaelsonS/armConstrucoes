import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '@/data/services'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

export function ServicesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-bh">
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Serviços"
              title="Competência em cada etapa da construção."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button to="/servicos" variant="outline">
              Todos os serviços
            </Button>
          </Reveal>
        </div>

        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.id} delay={i * 0.05} className="h-full">
                <Link
                  to={`/servicos#${service.slug}`}
                  className="group relative flex h-full min-h-[320px] flex-col overflow-hidden bg-ink text-white"
                >
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
                  </div>

                  <div className="relative mt-auto flex h-full flex-col justify-end p-5 sm:p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-ink/40 backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                      </span>
                      <span className="font-mono text-xs text-primary">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 min-h-[3rem] text-sm leading-relaxed text-white/80">
                      {service.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-white">
                      Conhecer serviço
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
