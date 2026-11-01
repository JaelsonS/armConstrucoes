import { cn } from '@/lib/utils'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  light?: boolean
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light,
  className,
  align = 'left',
}: Props) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]',
            light ? 'text-white/70' : 'text-ink-muted',
            align === 'center' && 'justify-center',
          )}
        >
          <span className="inline-block h-px w-8 bg-primary" aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed sm:text-lg',
            light ? 'text-white/75' : 'text-ink-muted',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
