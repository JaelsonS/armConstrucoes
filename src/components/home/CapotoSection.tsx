import { useState } from 'react'
import { Check } from 'lucide-react'
import { capotoBenefits, capotoLayers } from '@/data/method'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const layerVisual: Record<string, string> = {
  parede: 'bg-[repeating-linear-gradient(90deg,#3a3d42_0_6px,#2a2d31_6px_12px)]',
  argamassa: 'bg-[#e8eaed]',
  placa: 'bg-[#c4a484]',
  reboco: 'bg-[#b8bec6]',
  acabamento: 'bg-primary',
}

export function CapotoSection() {
  const [active, setActive] = useState<(typeof capotoLayers)[number]['id']>(
    capotoLayers[2].id,
  )
  const [split, setSplit] = useState(50)
  const activeLayer = capotoLayers.find((l) => l.id === active) ?? capotoLayers[2]

  return (
    <section className="bg-ink py-20 text-white lg:py-28">
      <div className="container-bh">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-primary sm:text-xs">
            <span className="inline-block h-px w-8 bg-primary" aria-hidden />
            ARM-03 · Isolamento térmico
          </p>
          <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Mais eficiência.
            <br />
            Mais conforto.
            <br />
            Mais valor.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            O capoto envolve o edifício numa camada contínua de isolamento.
            Explore cada camada do sistema.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <ul className="space-y-2" role="list">
              {capotoLayers.map((layer) => {
                const selected = layer.id === active
                return (
                  <li key={layer.id}>
                    <button
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setActive(layer.id)}
                      className={cn(
                        'flex w-full items-start gap-4 border px-4 py-4 text-left transition',
                        selected
                          ? 'border-primary bg-primary/10'
                          : 'border-white/10 hover:border-white/25',
                      )}
                    >
                      <span className="font-mono text-sm text-primary">
                        {layer.number}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-lg font-semibold">
                          {layer.title}
                        </span>
                        {selected ? (
                          <span className="mt-1 block text-sm text-white/65">
                            {layer.description}
                          </span>
                        ) : null}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="relative overflow-hidden border border-white/10 bg-black/40">
              <div className="flex h-48 sm:h-56" aria-hidden>
                {capotoLayers.map((layer) => (
                  <div
                    key={layer.id}
                    className={cn(
                      'relative flex-1 transition-all duration-500',
                      layerVisual[layer.id],
                      layer.id === active ? 'flex-[1.6] ring-2 ring-inset ring-primary' : 'opacity-80',
                    )}
                  />
                ))}
              </div>
              <div className="border-t border-white/10 p-4 sm:p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  Camada ativa · {activeLayer.number}
                </p>
                <p className="mt-1 font-display text-xl font-semibold">
                  {activeLayer.title}
                </p>
                <p className="mt-2 text-sm text-white/65">{activeLayer.description}</p>
              </div>
            </div>

            <div className="relative mt-6 overflow-hidden border border-white/10">
              <div className="relative aspect-[16/10]">
                <img
                  src="/images/manutencao.jpg"
                  alt="Fachada antes da intervenção (imagem ilustrativa)"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 0 0 ${split}%)` }}
                >
                  <img
                    src="/images/construcao.jpg"
                    alt="Fachada depois da intervenção (imagem ilustrativa)"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow"
                  style={{ left: `${split}%` }}
                  aria-hidden
                />
                <span className="absolute left-3 top-3 bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider">
                  Antes
                </span>
                <span className="absolute right-3 top-3 bg-primary px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-white">
                  Depois
                </span>
              </div>
              <label className="sr-only" htmlFor="capoto-compare">
                Comparar antes e depois
              </label>
              <input
                id="capoto-compare"
                type="range"
                min={5}
                max={95}
                value={split}
                onChange={(e) => setSplit(Number(e.target.value))}
                className="absolute inset-x-0 bottom-8 z-10 mx-auto w-[88%] accent-primary"
                aria-label="Comparar antes e depois"
              />
              <p className="border-t border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                Imagens ilustrativas · substituir por obra real
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-8 border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h3 className="font-display text-2xl font-bold">
                Benefícios do isolamento exterior
              </h3>
              <ul className="mt-5 space-y-3">
                {capotoBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80 sm:text-base">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-white/45">
                O desempenho depende das características de cada edifício e da
                solução especificada.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <Button to="/orcamento?tipo=capoto">Solicitar avaliação</Button>
              <Button to="/servicos#capoto" variant="ghost">
                Ver serviço
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
