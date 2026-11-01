import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '@/data/projects'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

const featured = projects.slice(0, 4)

export function PortfolioPreview() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="container-bh">
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Portfólio"
              title="Obras que demonstram capacidade."
              description="Projetos apresentados a título demonstrativo. Serão substituídos pelas obras reais da ARM."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button to="/obras" variant="outline">
              Ver todas as obras
            </Button>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <Link
                to={`/obras/${project.slug}`}
                className="group relative block overflow-hidden bg-ink"
              >
                <div className="aspect-[16/11]">
                  <img
                    src={project.cover}
                    alt={`${project.title} — ${project.category}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="overlay-bottom absolute inset-0" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    Projeto demonstrativo
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-white/70">
                    {project.category}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold sm:text-2xl">
                    {project.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                    Ver projeto
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
