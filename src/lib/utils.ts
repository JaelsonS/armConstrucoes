export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const shell = 'mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-12'

export const labelClass =
  'mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted'

export const fieldClass =
  'w-full rounded-sm border border-ink/15 bg-white px-3 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-primary'

export const errorClass = 'mt-2 text-sm text-primary'

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function isPtPhone(value: string) {
  const compact = value.replace(/[^\d+]/g, '')
  return /^(?:\+351)?[29]\d{8}$/.test(compact)
}

export function fallbackImage(event: { currentTarget: HTMLImageElement }) {
  const image = event.currentTarget
  if (image.dataset.fallbackApplied === 'true') return
  image.dataset.fallbackApplied = 'true'
  image.src = '/images/hero-obra.jpg'
}
