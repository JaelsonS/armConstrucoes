import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { whatsapp, whatsappUrl } from '@/data/whatsapp'
import { WhatsAppIcon } from '@/components/ui/BrandIcons'

type Props = {
  open: boolean
  network?: string
  onClose: () => void
}

export function SocialMaintenanceModal({ open, network, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="social-modal-title"
        >
          <motion.div
            className="relative w-full max-w-md border border-white/10 bg-white p-6 text-ink shadow-2xl sm:p-8"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 p-2 text-ink-muted hover:text-ink"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              Redes sociais
            </p>
            <h2 id="social-modal-title" className="mt-3 font-display text-2xl font-bold">
              {network
                ? `${network} em manutenção`
                : 'Redes sociais em manutenção'}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Neste momento as nossas redes sociais estão em manutenção. Fale
              diretamente com o {whatsapp.contactName} no WhatsApp — responde com
              rapidez e acompanha o seu pedido de orçamento.
            </p>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full min-h-12 items-center justify-center gap-2 bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar no WhatsApp com {whatsapp.contactName}
            </a>
            <p className="mt-3 text-center font-mono text-xs text-ink-muted">
              {whatsapp.display}
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
