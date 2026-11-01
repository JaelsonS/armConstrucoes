import { PageMeta } from '@/components/layout/PageMeta'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { Reveal } from '@/components/ui/Reveal'
import { TechnicalGrid } from '@/components/ui/TechnicalGrid'

export function Orcamento() {
  return (
    <>
      <PageMeta
        title="Pedir orçamento"
        description="Solicite um orçamento à BH Construção. Formulário em etapas para construção, reabilitação e acabamentos."
        path="/orcamento"
      />
      <section className="relative overflow-hidden bg-ink pb-14 pt-28 text-white lg:pt-36">
        <TechnicalGrid className="opacity-30" />
        <div className="container-bh relative">
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Orçamento
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold sm:text-5xl">
              Conte-nos o seu projeto.
            </h1>
            <p className="mt-5 max-w-2xl text-white/70">
              Preencha o formulário em etapas. Nesta demonstração, o envio é
              simulado — a validação e a experiência são reais.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="bg-paper py-14 lg:py-20">
        <div className="container-bh max-w-3xl">
          <div className="border border-border bg-white p-6 sm:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
