import { Link } from 'react-router-dom'
import { PageMeta } from '@/components/layout/PageMeta'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { TechnicalGrid } from '@/components/ui/TechnicalGrid'
import { services } from '@/data/services'

export function Servicos() {
  return (
    <>
      <PageMeta
        title="Serviços"
        description="Construção civil, obras públicas, reabilitação, carpintaria e revestimentos — serviços BH em Coimbra."
        path="/servicos"
      />
      <section className="relative overflow-hidden bg-ink pb-16 pt-28 text-white lg:pb-24 lg:pt-36">
        <TechnicalGrid className="opacity-30" />
        <div className="container-bh relative">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Serviços"
              title="Competência em cada etapa da construção."
              description="Cinco áreas de intervenção, apresentadas com clareza para apoiar a decisão do seu próximo projeto."
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-bh space-y-16 lg:space-y-24">
          {services.map((service, i) => (
            <Reveal key={service.id}>
              <article
                id={service.slug}
                className="scroll-mt-28 grid items-center gap-8 border-b border-border pb-16 lg:grid-cols-2 lg:gap-14 lg:pb-24"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : undefined}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="aspect-[16/11] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : undefined}>
                  {(() => {
                    const Icon = service.icon
                    return (
                      <div className="mb-4 flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center border border-border text-primary">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <span className="font-mono text-sm text-primary">{service.number}</span>
                      </div>
                    )
                  })()}
                  <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button to={`/orcamento?tipo=${service.quoteTipo}`}>
                      Pedir orçamento
                    </Button>
                    <Link
                      to="/obras"
                      className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-ink underline-offset-4 hover:underline"
                    >
                      Ver obras relacionadas
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
