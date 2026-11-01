import { PageMeta } from '@/components/layout/PageMeta'
import { ApplicationForm } from '@/components/forms/ApplicationForm'
import { Reveal } from '@/components/ui/Reveal'
import { TechnicalGrid } from '@/components/ui/TechnicalGrid'
import { company } from '@/data/company'

export function Candidaturas() {
  return (
    <>
      <PageMeta
        title="Candidaturas"
        description="Candidate-se à equipa ARM Construções em Coimbra. Envie a sua candidatura espontânea online."
        path="/candidaturas"
      />
      <section className="relative overflow-hidden bg-ink pb-14 pt-28 text-white lg:pt-36">
        <TechnicalGrid className="opacity-30" />
        <div className="container-bh relative">
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Equipa
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold sm:text-5xl">
              Construa o futuro connosco.
            </h1>
            <p className="mt-5 max-w-2xl text-white/70">
              Procuramos pessoas com rigor, compromisso e vontade de crescer em
              obra. Envie a sua candidatura — chega diretamente à ARM em{' '}
              {company.areaServed}.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-14 lg:py-20">
        <div className="container-bh max-w-3xl">
          <div className="border border-border bg-white p-6 sm:p-10">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>
  )
}
