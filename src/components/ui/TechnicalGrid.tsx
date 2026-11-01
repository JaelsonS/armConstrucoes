import { cn } from '@/lib/utils'

export function TechnicalGrid({
  className,
  variant = 'light',
}: {
  className?: string
  variant?: 'light' | 'dark'
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0',
        variant === 'light' ? 'technical-grid' : 'technical-grid-dark',
        className,
      )}
    />
  )
}
