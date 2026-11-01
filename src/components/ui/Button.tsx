import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-[#d46a2f] focus-visible:ring-primary',
  secondary:
    'bg-white text-ink hover:bg-paper focus-visible:ring-ink',
  ghost:
    'bg-transparent text-white hover:bg-white/10 border border-white/30',
  outline:
    'bg-transparent text-ink border border-ink/20 hover:border-primary hover:text-primary',
}

type Common = {
  children: ReactNode
  className?: string
  variant?: Variant
}

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined }

type ButtonAsLink = Common & {
  to: string
  type?: never
  disabled?: boolean
  onClick?: () => void
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, className, variant = 'primary' } = props
  const classes = cn(
    'inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-300',
    'min-h-11 rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    className,
  )

  if ('to' in props && props.to) {
    const { to, onClick, disabled } = props
    if (disabled) {
      return (
        <span className={classes} aria-disabled="true">
          {children}
        </span>
      )
    }
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  const { type = 'button', ...rest } = props as ButtonAsButton
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
