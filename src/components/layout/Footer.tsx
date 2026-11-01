import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { company, fullAddress } from '@/data/company'
import { services } from '@/data/services'
import { SocialLinks } from '@/components/ui/SocialLinks'

const nav = [
  { to: '/', label: 'Início' },
  { to: '/empresa', label: 'Empresa' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/obras', label: 'Obras' },
  { to: '/contactos', label: 'Contactos' },
  { to: '/orcamento', label: 'Pedir orçamento' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="container-bh grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" className="inline-flex bg-white px-3 py-2">
            <img
              src="/images/bh-logo.png"
              alt={company.shortName}
              className="h-12 w-auto object-contain"
              width={160}
              height={80}
            />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
            {company.legalName}. Construção, reabilitação e acabamentos a partir
            de Coimbra.
          </p>
          <p className="mt-4 text-sm text-white/55">{fullAddress()}</p>
          <div className="mt-6">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
              Siga-nos
            </p>
            <SocialLinks />
          </div>
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
            Contactos
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {company.phones.map((p) => (
              <li key={p.display}>
                <a href={p.href} className="text-white/75 hover:text-white">
                  {p.display} · {p.label}
                </a>
              </li>
            ))}
            <li>
              <a href={company.emailHref} className="text-white/75 hover:text-white">
                {company.email}
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
