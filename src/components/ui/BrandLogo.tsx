import { cn } from '@/lib/utils'

type Props = {
  variant?: 'dark' | 'light' | 'mark'
  className?: string
  markClassName?: string
}

/** Logo tipográfico ARM — “A” laranja + ARM CONSTRUÇÕES */
export function BrandLogo({
  variant = 'dark',
  className,
  markClassName,
}: Props) {
  if (variant === 'mark') {
    return (
      <span
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center bg-primary font-display text-xl font-extrabold text-white',
          markClassName,
        )}
        aria-hidden
      >
        A
      </span>
    )
  }

  const light = variant === 'light'

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        className={cn(
          'inline-flex h-10 w-10 shrink-0 items-center justify-center bg-primary font-display text-xl font-extrabold text-white lg:h-11 lg:w-11 lg:text-2xl',
          markClassName,
        )}
        aria-hidden
      >
        A
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-lg font-extrabold tracking-wide lg:text-xl',
            light ? 'text-ink' : 'text-white',
          )}
        >
          ARM
        </span>
        <span
          className={cn(
            'mt-0.5 font-sans text-[9px] font-semibold uppercase tracking-[0.28em] lg:text-[10px]',
            light ? 'text-ink-muted' : 'text-white/70',
          )}
        >
          Construções
        </span>
      </span>
    </span>
  )
}
