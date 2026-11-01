import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { company } from '@/data/company'
import { services } from '@/data/services'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { FacebookIcon } from '@/components/ui/BrandIcons'

const nav = [
  { to: '/empresa', label: 'Empresa' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/obras', label: 'Obras' },
  { to: '/orcamento', label: 'Orçamento' },
  { to: '/candidaturas', label: 'Candidaturas' },
  { to: '/contactos', label: 'Contactos' },
]

export function Footer() {
  const year = new Date().getFullYear()
  const phone = company.phones[0]

  return (
    <footer className="bg-ink text-white">
      <div className="container-bh grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" aria-label="ARM Construções — início">
            <BrandLogo variant="dark" />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
            {company.legalName} — construção civil, obras públicas, capoto,
            estruturas metálicas e remodelações em {company.areaServed}.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Serviços
          </h3>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  to={`/servicos#${s.slug}`}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={phone.href} className="text-white/75 hover:text-white">
                {phone.display}
              </a>
            </li>
            <li>
              <a href={company.emailHref} className="text-white/75 hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="text-white/55">{company.areaServed}</li>
            <li>
              <a
                href={company.social.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/75 transition hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
                {company.social.facebookLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-bh flex flex-col gap-4 py-6 text-xs text-white/50 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {year} {company.legalName}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link to="/privacidade" className="hover:text-white">
              Política de privacidade
            </Link>
            <a
              href={company.livroReclamacoes}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Livro de Reclamações
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/30">
        <div className="container-bh flex flex-col gap-2 py-4 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Website desenvolvido por{' '}
            <a
              href="https://afdigitalweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-white transition hover:text-primary"
            >
              AF Digital — Soluções Tecnológicas
              <ExternalLink className="h-3 w-3" />
            </a>
          </p>
          <a
            href="https://afdigitalweb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45 hover:text-primary"
          >
            afdigitalweb.com
          </a>
        </div>
      </div>
    </footer>
  )
}
