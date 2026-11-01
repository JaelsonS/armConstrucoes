import { PageMeta } from '@/components/layout/PageMeta'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { TechnicalGrid } from '@/components/ui/TechnicalGrid'
import { company, fullAddress } from '@/data/company'
import { differentials } from '@/data/method'

export function Empresa() {
  const phone = company.phones[0]

  return (
    <>
      <PageMeta
        title="Empresa"
        description="Conheça a ARM — Construções, Unipessoal Lda., em Coimbra e arredores."
        path="/empresa"
      />
      <section className="relative overflow-hidden bg-ink pb-20 pt-28 text-white lg:pb-28 lg:pt-36">
        <TechnicalGrid className="opacity-30" />
        <div className="container-bh relative">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/70">
              <span className="h-px w-8 bg-primary" aria-hidden />
              Empresa
            </p>
            <h1 className="max-w-4xl font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {company.aboutTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {company.description} {company.descriptionExtra}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-bh grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src="/images/equipa-obra.jpg"
              alt="Contexto de obra e equipamentos"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading
              eyebrow="Identidade"
              title="Rigor técnico ao serviço de cada projeto."
              description="A ARM atua no setor da construção civil e obras públicas a partir de Coimbra, com foco na qualidade de execução, na comunicação clara e no compromisso com o resultado final."
            />
            <dl className="mt-10 space-y-5 border-t border-border pt-8 text-sm">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  Designação
                </dt>
                <dd className="mt-1 font-medium text-ink">{company.legalName}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  Morada
                </dt>
                <dd className="mt-1 font-medium text-ink">{fullAddress()}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  Contacto
                </dt>
                <dd className="mt-1 font-medium text-ink">
                  <a href={phone.href} className="hover:text-primary">
                    {phone.display}
                  </a>
                  <br />
                  <a href={company.emailHref} className="hover:text-primary">
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  Área de atuação
                </dt>
                <dd className="mt-1 font-medium text-ink">{company.areaServed}</dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button to="/orcamento">Pedir orçamento</Button>
              <Button to="/contactos" variant="outline">
                Contactos
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-28">
        <div className="container-bh">
          <Reveal>
            <SectionHeading
              eyebrow="Pilares"
              title="O que orienta o nosso trabalho."
              className="mb-10"
            />
          </Reveal>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {differentials.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <li className="border border-border bg-white p-6">
                  <span className="font-mono text-sm text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-3 font-display text-xl font-semibold text-ink">
                    {item}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
