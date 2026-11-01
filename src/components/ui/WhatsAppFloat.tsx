import { useEffect, useState } from 'react'
import { whatsapp, whatsappUrl } from '@/data/whatsapp'
import { WhatsAppIcon } from '@/components/ui/BrandIcons'
import { cn } from '@/lib/utils'

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), 900)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <div
      className={cn(
        'fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7',
        'transition duration-500',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
      )}
    >
      {open ? (
        <div className="w-[min(100vw-2.5rem,320px)] overflow-hidden border border-white/10 bg-ink text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
          <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{whatsapp.contactName}</p>
              <p className="text-xs text-white/70">Online · responde em breve</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-2 text-lg leading-none text-white/80 hover:text-white"
              aria-label="Fechar conversa WhatsApp"
            >
              ×
            </button>
          </div>
          <div className="space-y-3 bg-[#0b141a] px-4 py-4">
            <div className="max-w-[90%] rounded-md rounded-tl-none bg-[#202c33] px-3 py-2 text-sm leading-relaxed text-white/90">
              Olá! 👋 Sou a equipa ARM Construções.
              <br />
              Em que podemos ajudar — orçamento, obra ou outra questão?
            </div>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
              onClick={() => setOpen(false)}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Abrir conversa no WhatsApp
            </a>
            <p className="text-center font-mono text-[11px] text-white/45">
              {whatsapp.display}
            </p>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group relative"
        aria-expanded={open}
        aria-label={
          open
            ? 'Fechar painel WhatsApp'
            : `Abrir WhatsApp para falar com ${whatsapp.contactName}`
        }
      >
        <span
          className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/35"
          aria-hidden
        />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition group-hover:scale-105 group-hover:bg-[#1ebe57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          <WhatsAppIcon className="h-8 w-8" />
        </span>
        <span className="pointer-events-none absolute -left-2 top-1/2 hidden -translate-x-full -translate-y-1/2 whitespace-nowrap rounded bg-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
          Fale connosco no WhatsApp
        </span>
      </button>
    </div>
  )
}
