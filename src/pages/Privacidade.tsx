import { PageMeta } from '@/components/layout/PageMeta'
import { company } from '@/data/company'

export function Privacidade() {
  return (
    <>
      <PageMeta
        title="Política de privacidade"
        description="Informação sobre tratamento de dados pessoais na demonstração do website ARM Construções."
        path="/privacidade"
      />
      <section className="bg-white pb-20 pt-28 lg:pb-28 lg:pt-36">
        <div className="container-bh max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-ink">
            Política de privacidade
          </h1>
          <p className="mt-6 text-ink-muted">
            Esta página descreve o enquadramento geral de privacidade para a
            demonstração comercial do website da {company.legalName}.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-ink">
            1. Responsável pelo tratamento
          </h2>
          <p className="mt-3 text-ink-muted">
            {company.legalName}
            <br />
            Telefone: {company.phones[0].display}
            <br />
            Email: {company.email}
            <br />
            Área: {company.areaServed}
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-ink">
            2. Dados recolhidos
          </h2>
          <p className="mt-3 text-ink-muted">
            Nos formulários de contacto e orçamento poderão ser indicados nome,
            email, telefone, empresa e informações sobre o projeto. No formulário
            de candidaturas poderão ainda ser recolhidos dados profissionais e o
            curriculum vitae (ficheiro PDF ou Word). Os envios são processados
            através do serviço Web3Forms e encaminhados para o email da ARM.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-ink">
            3. Finalidade
          </h2>
          <p className="mt-3 text-ink-muted">
            Os dados são utilizados para responder a pedidos de contacto ou
            orçamento, gestão comercial relacionada e, no caso das candidaturas,
            para análise de perfil e processos de recrutamento.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-ink">
            4. Base legal
          </h2>
          <p className="mt-3 text-ink-muted">
            O tratamento assenta no consentimento do titular e/ou na execução de
            diligências pré-contratuais a pedido do titular, nos termos do RGPD.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-ink">
            5. Direitos
          </h2>
          <p className="mt-3 text-ink-muted">
            O titular pode solicitar acesso, retificação, apagamento, limitação,
            oposição e portabilidade dos dados, contactando{' '}
            <a href={company.emailHref} className="text-primary hover:underline">
              {company.email}
            </a>{' '}
            ou {company.phones[0].display}.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold text-ink">
            6. Atualizações
          </h2>
          <p className="mt-3 text-ink-muted">
            Esta política poderá ser atualizada quando o website passar de
            demonstração para ambiente de produção com backend.
          </p>
        </div>
      </section>
    </>
  )
}
