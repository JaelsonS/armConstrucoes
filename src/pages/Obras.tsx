import { useMemo, useState } from 'react'
import { PageMeta } from '@/components/layout/PageMeta'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TechnicalGrid } from '@/components/ui/TechnicalGrid'
import { ProjectFilters } from '@/components/portfolio/ProjectFilters'
import { ProjectGrid } from '@/components/portfolio/ProjectGrid'
import { projects } from '@/data/projects'

export function Obras() {
  const [filter, setFilter] = useState('todos')

  const filtered = useMemo(() => {
    if (filter === 'todos') return projects
    return projects.filter((p) => p.filter === filter)
  }, [filter])

  return (
    <>
      <PageMeta
        title="Obras"
        description="Portfólio demonstrativo de construção, capoto, estruturas metálicas e remodelações da ARM em Coimbra."
        path="/obras"
      />
      <section className="relative overflow-hidden bg-ink pb-16 pt-28 text-white lg:pb-24 lg:pt-36">
        <TechnicalGrid className="opacity-30" />
        <div className="container-bh relative">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Portfólio"
              title="Obras que demonstram capacidade."
              description="Projetos apresentados a título demonstrativo. Serão substituídos pelas obras reais da ARM."
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-14 lg:py-20">
        <div className="container-bh">
          <div className="mb-8">
            <ProjectFilters active={filter} onChange={setFilter} />
          </div>
          <ProjectGrid projects={filtered} />
        </div>
      </section>
    </>
  )
}
