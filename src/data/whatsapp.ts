export const whatsapp = {
  contactName: 'Paulo',
  phoneE164: '351910098531',
  display: '+351 910 098 531',
  message:
    'Olá Paulo, venho do site e gostaria de solicitar um orçamento.',
} as const

export function whatsappUrl(customMessage?: string) {
  const text = encodeURIComponent(customMessage ?? whatsapp.message)
  return `https://wa.me/${whatsapp.phoneE164}?text=${text}`
}
