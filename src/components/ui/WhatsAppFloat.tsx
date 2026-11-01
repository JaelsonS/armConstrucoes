import { whatsapp, whatsappUrl } from '@/data/whatsapp'
import { WhatsAppIcon } from '@/components/ui/BrandIcons'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[90] sm:bottom-7 sm:right-7"
      aria-label={`Abrir WhatsApp para falar com ${whatsapp.contactName} e pedir orçamento`}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
        <WhatsAppIcon className="h-8 w-8" />
      </span>
    </a>
  )
}
