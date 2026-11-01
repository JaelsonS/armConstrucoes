import { Link } from 'react-router-dom'
import { Briefcase, MapPinned } from 'lucide-react'
import { PageMeta } from '@/components/layout/PageMeta'
import { ContactForm } from '@/components/forms/ContactForm'
import { Reveal } from '@/components/ui/Reveal'
import { TechnicalGrid } from '@/components/ui/TechnicalGrid'
import { company, fullAddress } from '@/data/company'
import { whatsappUrl } from '@/data/whatsapp'

export function Contactos() {
  const phone = company.phones[0]

  return (
    <>
      <PageMeta
        title="Contactos"
        description="Contacte a ARM Construções em Coimbra e arredores. Telefone 915 492 691 e pedido de orçamento."
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
              Fale com a ARM.
            </h1>
            <p className="mt-5 max-w-2xl text-white/70">
              Estamos em Coimbra e arredores, disponíveis para conhecer o seu
              projeto de construção, capoto, estruturas metálicas ou remodelação.
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
            <p className="mt-2 text-sm text-ink-muted">{company.areaServed}</p>

            <ul className="mt-8 space-y-3">
              <li>
                <a
                  href={phone.href}
                  className="text-lg font-semibold text-ink hover:text-primary"
                >
                  {phone.display}
                </a>
                <span className="ml-2 text-sm text-ink-muted">· {phone.label}</span>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="text-lg font-semibold text-ink hover:text-primary"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-ink hover:text-primary"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={company.social.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-ink hover:text-primary"
                >
                  Facebook · {company.social.facebookLabel}
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
                title="Mapa — localização ARM Construções, Botão"
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
                O formulário chega à ARM por email (Web3Forms). Conversas rápidas
                continuam no WhatsApp.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <Link
              to="/candidaturas"
              className="mt-6 flex items-center gap-4 border border-border bg-white p-5 transition hover:border-primary"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-border text-primary">
                <Briefcase className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-display text-lg font-semibold text-ink">
                  Quer trabalhar connosco?
                </span>
                <span className="mt-1 block text-sm text-ink-muted">
                  Envie a sua candidatura em poucos minutos.
                </span>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
