import type { Project } from '@/data/projects'
import { ProjectCard } from './ProjectCard'
import { Reveal } from '@/components/ui/Reveal'

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <p className="border border-dashed border-border p-10 text-center text-ink-muted">
        Nenhum projeto nesta categoria. Experimente outro filtro.
      </p>
    )
  }

  return (
    <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, i) => (
        <Reveal key={project.id} delay={i * 0.04} className="h-full">
          <div className="h-full">
            <ProjectCard project={project} />
          </div>
        </Reveal>
      ))}
    </div>
  )
}
