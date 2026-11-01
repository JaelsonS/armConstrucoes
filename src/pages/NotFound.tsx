import { PageMeta } from '@/components/layout/PageMeta'
import { Button } from '@/components/ui/Button'
import { TechnicalGrid } from '@/components/ui/TechnicalGrid'

export function NotFound() {
  return (
    <>
      <PageMeta
        title="Página não encontrada"
        description="A página solicitada não existe no website da ARM Construções."
        path="/404"
        noIndex
      />
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink text-white">
        <TechnicalGrid className="opacity-30" />
        <div className="container-bh relative py-28">
          <p className="font-mono text-sm text-primary">Erro 404</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold sm:text-5xl">
            Esta página não foi encontrada.
          </h1>
          <p className="mt-5 max-w-lg text-white/70">
            O endereço pode ter sido alterado ou removido. Volte ao início ou
            explore os nossos projetos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/">Ir para o início</Button>
            <Button to="/obras" variant="ghost">
              Ver obras
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
