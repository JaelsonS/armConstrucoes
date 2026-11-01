import { projectFilters } from '@/data/projects'
import { cn } from '@/lib/utils'

type Props = {
  active: string
  onChange: (id: string) => void
}

export function ProjectFilters({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar obras">
      {projectFilters.map((f) => {
        const isActive = active === f.id
        return (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(f.id)}
            className={cn(
              'min-h-10 border px-4 py-2 text-sm font-medium transition',
              isActive
                ? 'border-primary bg-primary text-white'
                : 'border-border bg-white text-ink hover:border-ink/40',
            )}
          >
            {f.label}
          </button>
        )
      })}
    </div>
  )
}
