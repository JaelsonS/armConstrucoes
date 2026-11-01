import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/obras/${project.slug}`}
      className="group relative flex h-full min-h-[340px] flex-col overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <img
          src={project.cover}
          alt={`${project.title} — ${project.category}`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/15" />
      </div>

      <div className="relative mt-auto flex flex-1 flex-col justify-end p-5 text-white sm:p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
          {project.code} · Demonstração
        </p>
        <p className="mt-2 text-xs uppercase tracking-wider text-white/70">
          {project.category}
        </p>
        <h3 className="mt-1 font-display text-xl font-bold">{project.title}</h3>
        <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-white/70">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          {project.location}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
          Ver projeto
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
