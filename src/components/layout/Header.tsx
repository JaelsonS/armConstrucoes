import { useEffect, useId, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { company } from '@/data/company'
import { useScrolled } from '@/hooks/useScrolled'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const nav = [
  { to: '/empresa', label: 'Empresa' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/obras', label: 'Obras' },
  { to: '/candidaturas', label: 'Candidaturas' },
  { to: '/contactos', label: 'Contactos' },
]

export function Header() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const menuId = useId()
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || open
  const phone = company.phones[0]

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'border-b border-white/10 bg-ink/90 text-white shadow-sm backdrop-blur-md'
          : 'bg-transparent text-white',
      )}
    >
      <div className="container-bh flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link
          to="/"
          className="flex shrink-0 items-center"
          aria-label="ARM Construções — início"
          aria-current={isHome ? 'page' : undefined}
        >
          <BrandLogo variant="dark" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'relative px-3 py-2 text-sm font-medium transition-colors',
                  isActive ? 'text-white' : 'text-white/75 hover:text-white',
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={cn(
                      'absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-primary transition-transform duration-300',
                      isActive ? 'scale-x-100' : 'scale-x-0',
                    )}
                    aria-hidden
                  />
                </>
              )}
            </NavLink>
          ))}
          <a
            href={phone.href}
            className="ml-2 inline-flex items-center gap-2 px-3 py-2 text-sm text-white/75 hover:text-white"
            aria-label={`Ligar ${phone.display}`}
          >
            <Phone className="h-4 w-4 text-primary" />
            <span className="hidden xl:inline">{phone.display}</span>
          </a>
          <Button to="/orcamento" className="ml-2">
            Pedir orçamento
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={phone.href}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/20"
            aria-label={`Ligar ${phone.display}`}
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/20"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-ink lg:hidden"
          >
            <nav className="container-bh flex flex-col gap-1 py-4" aria-label="Mobile">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'border-l-2 px-4 py-3 text-base font-medium',
                      isActive
                        ? 'border-primary text-white'
                        : 'border-transparent text-white/75',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button to="/orcamento" className="mt-3 w-full">
                Pedir orçamento
              </Button>
              <a
                href={phone.href}
                className="mt-2 flex items-center justify-center gap-2 py-3 text-sm text-white/75"
              >
                <Phone className="h-4 w-4 text-primary" />
                {phone.display}
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
