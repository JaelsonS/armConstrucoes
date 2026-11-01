import { MapPinned } from 'lucide-react'
import { PageMeta } from '@/components/layout/PageMeta'
import { ContactForm } from '@/components/forms/ContactForm'
import { Reveal } from '@/components/ui/Reveal'
import { TechnicalGrid } from '@/components/ui/TechnicalGrid'
import { company, fullAddress } from '@/data/company'

export function Contactos() {
  return (
    <>
      <PageMeta
        title="Contactos"
        description="Contacte a BH em Ribeira de Frades, Coimbra. Telefone, email e pedido de direções."
        path="/contactos"
      />
      <section className="relative overflow-hidden bg-ink pb-14 pt-28 text-white lg:pt-36">
        <TechnicalGrid className="opacity-30" />
        <div className="container-bh relative">
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Contactos
            </p>
            <h1 className="font-display text-4xl font-bold sm:text-5xl">
              Fale com a BH.
            </h1>
            <p className="mt-5 max-w-2xl text-white/70">
              Estamos em Coimbra, disponíveis para conhecer o seu projeto de
              construção, reabilitação ou acabamentos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-bh grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink">
              {company.legalName}
            </h2>
            <p className="mt-4 text-ink-muted">{fullAddress()}</p>

            <ul className="mt-8 space-y-3">
              {company.phones.map((p) => (
                <li key={p.display}>
                  <a
                    href={p.href}
                    className="text-lg font-semibold text-ink hover:text-primary"
                  >
                    {p.display}
                  </a>
                  <span className="ml-2 text-sm text-ink-muted">· {p.label}</span>
                </li>
              ))}
              <li>
                <a
                  href={company.emailHref}
                  className="text-lg font-semibold text-ink hover:text-primary"
                >
                  {company.email}
                </a>
              </li>
            </ul>

            <a
              href={company.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 border border-ink/20 px-5 py-3 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
            >
              <MapPinned className="h-4 w-4" />
              Obter direções
            </a>

            <div className="mt-10 overflow-hidden border border-border">
              <iframe
                title="Mapa — localização BH Coimbra"
                src={company.osmEmbedUrl}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border border-border bg-paper p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-ink">
                Enviar mensagem
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                Formulário de demonstração — o envio é simulado.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
