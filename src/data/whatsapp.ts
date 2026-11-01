export const whatsapp = {
  /** Nome do contacto por confirmar — usar genérico até indicação */
  contactName: 'ARM Construções',
  phoneE164: '351915492691',
  display: '+351 915 492 691',
  message:
    'Olá, venho do site da ARM Construções e gostaria de solicitar um orçamento.',
} as const

export function whatsappUrl(customMessage?: string) {
  const text = encodeURIComponent(customMessage ?? whatsapp.message)
  return `https://wa.me/${whatsapp.phoneE164}?text=${text}`
}
