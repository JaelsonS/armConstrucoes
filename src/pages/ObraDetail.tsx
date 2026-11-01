import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PageMeta } from '@/components/layout/PageMeta'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import { getProjectBySlug, getRelatedProjects } from '@/data/projects'
import { NotFound } from './NotFound'

export function ObraDetail() {
  const { slug = '' } = useParams()
  const project = getProjectBySlug(slug)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (!project) return <NotFound />

  const related = getRelatedProjects(project.slug)

  return (
    <>
      <PageMeta
        title={project.title}
        description={project.summary}
        path={`/obras/${project.slug}`}
        image={project.cover}
      />
      <section className="bg-ink pb-10 pt-28 text-white lg:pt-32">
        <div className="container-bh">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {project.code} · Demonstração · {project.category}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 text-white/70">{project.location}</p>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-14">
        <div className="container-bh">
          <button
            type="button"
            className="block w-full overflow-hidden"
            onClick={() => setLightboxIndex(0)}
            aria-label="Ampliar imagem principal"
          >
            <img
              src={project.cover}
              alt={project.title}
              className="aspect-[21/9] w-full object-cover"
            />
          </button>

          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
            {project.gallery.map((src, i) => (
              <button
                key={`${src}-${i}`}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="overflow-hidden"
              >
                <img
                  src={src}
                  alt={`${project.title} — imagem ${i + 1}`}
                  className="aspect-[4/3] w-full object-cover transition hover:opacity-90"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 lg:py-24">
        <div className="container-bh grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              {project.summary}
            </p>
            <div className="mt-10 space-y-8">
              {[
                ['Desafio', project.challenge],
                ['Solução', project.solution],
                ['Resultado', project.result],
              ].map(([title, body]) => (
                <div key={title}>
                  <h2 className="font-display text-2xl font-bold text-ink">{title}</h2>
                  <p className="mt-3 text-ink-muted">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <aside className="border border-border bg-white p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
                Conteúdo demonstrativo
              </p>
              <p className="mt-3 text-sm text-ink-muted">
                Este projeto é fictício para fins de demonstração comercial e não
                representa uma obra real da ARM.
              </p>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-ink-muted">Categoria</dt>
                  <dd className="font-semibold text-ink">{project.category}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Localização</dt>
                  <dd className="font-semibold text-ink">{project.location}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Referência</dt>
                  <dd className="font-semibold text-ink">{project.code}</dd>
                </div>
              </dl>
              <Button to="/orcamento" className="mt-8 w-full">
                Pedir orçamento
              </Button>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-bh">
          <h2 className="font-display text-3xl font-bold text-ink">Projetos relacionados</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((p) => (
              <Link key={p.id} to={`/obras/${p.slug}`} className="group block overflow-hidden bg-ink">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="aspect-[16/11] w-full object-cover transition group-hover:scale-105"
                  loading="lazy"
                />
                <div className="p-4 text-white">
                  <p className="font-mono text-[10px] text-primary">{p.code}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={project.gallery}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />
    </>
  )
}
