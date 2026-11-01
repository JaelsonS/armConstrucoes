import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Check, Loader2, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { company } from '@/data/company'
import { whatsappUrl } from '@/data/whatsapp'
import { isWeb3FormsConfigured, submitWeb3Form } from '@/lib/web3forms'
import { cn } from '@/lib/utils'

const tipos = [
  { id: 'construcao-civil', label: 'Construção Civil' },
  { id: 'obras-publicas', label: 'Obras Públicas' },
  { id: 'capoto', label: 'Capoto' },
  { id: 'estruturas-metalicas', label: 'Estruturas Metálicas' },
  { id: 'remodelacoes', label: 'Remodelações' },
  { id: 'manutencao-recuperacao', label: 'Manutenção e Recuperação' },
  { id: 'outro', label: 'Outro' },
] as const

type FormState = {
  tipo: string
  projectName: string
  location: string
  description: string
  prazo: string
  budget: string
  name: string
  companyName: string
  email: string
  phone: string
  preference: string
  consent: boolean
}

const initial: FormState = {
  tipo: '',
  projectName: '',
  location: '',
  description: '',
  prazo: '',
  budget: '',
  name: '',
  companyName: '',
  email: '',
  phone: '',
  preference: 'telefone',
  consent: false,
}

export function QuoteForm() {
  const [params] = useSearchParams()
  const tipoFromQuery = params.get('tipo') || ''
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormState>({
    ...initial,
    tipo: tipos.some((t) => t.id === tipoFromQuery) ? tipoFromQuery : '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState('')
  const configured = isWeb3FormsConfigured()

  const progress = ((step + 1) / 4) * 100
  const tipoLabel = useMemo(
    () => tipos.find((t) => t.id === data.tipo)?.label ?? data.tipo,
    [data.tipo],
  )

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  function validateStep() {
    const next: Record<string, string> = {}
    if (step === 0 && !data.tipo) next.tipo = 'Selecione o tipo de projeto.'
    if (step === 1) {
      if (data.projectName.trim().length < 2) next.projectName = 'Indique o nome do projeto.'
      if (data.location.trim().length < 2) next.location = 'Indique a localização.'
      if (data.description.trim().length < 15)
        next.description = 'Descreva o projeto com mais detalhe.'
    }
    if (step === 2) {
      if (data.name.trim().length < 2) next.name = 'Indique o seu nome.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = 'Email inválido.'
      if (data.phone.trim().length < 9) next.phone = 'Telefone inválido.'
    }
    if (step === 3 && !data.consent)
      next.consent = 'É necessário consentir o tratamento de dados.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function nextStep() {
    if (!validateStep()) return
    if (step < 3) {
      setStep((s) => s + 1)
      return
    }

    if (!configured) {
      setServerError(
        'Chave Web3Forms em falta. Defina VITE_WEB3FORMS_ACCESS_KEY para enviar orçamentos.',
      )
      return
    }

    setSubmitting(true)
    setServerError('')
    const result = await submitWeb3Form({
      subject: `[Orçamento] ${tipoLabel} — ${data.projectName}`,
      from_name: 'Site ARM — Orçamentos',
      form_type: 'orcamento',
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.companyName || '—',
      tipo: tipoLabel,
      project: data.projectName,
      location: data.location,
      description: data.description,
      prazo: data.prazo || '—',
      budget: data.budget || '—',
      preference: data.preference,
      message: [
        `Tipo: ${tipoLabel}`,
        `Projeto: ${data.projectName}`,
        `Localização: ${data.location}`,
        `Prazo: ${data.prazo || '—'}`,
        `Orçamento estimado: ${data.budget || '—'}`,
        `Preferência de contacto: ${data.preference}`,
        '',
        data.description,
      ].join('\n'),
      replyto: data.email,
    })
    setSubmitting(false)

    if (result.ok) {
      setDone(true)
      return
    }
    setServerError(result.message)
  }

  if (done) {
    return (
      <div className="border border-primary/30 bg-paper p-8 sm:p-10" role="status">
        <div className="mb-4 flex h-12 w-12 items-center justify-center bg-primary text-white">
          <Check className="h-6 w-6" />
        </div>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Pedido de orçamento enviado
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
          Recebemos o seu pedido. A ARM analisa os detalhes e responde consigo
          em breve. Para falar já, use o WhatsApp.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            onClick={() => {
              setDone(false)
              setStep(0)
              setData({ ...initial, tipo: data.tipo })
            }}
          >
            Novo pedido
          </Button>
          <a
            href={whatsappUrl(
              `Olá ARM, enviei um pedido de orçamento (${tipoLabel}) pelo site e gostaria de falar consigo.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#25D366]/40 bg-[#25D366]/10 px-5 py-3 text-sm font-semibold text-[#128C7E] transition hover:bg-[#25D366]/20"
          >
            <MessageCircle className="h-4 w-4" />
            Continuar no WhatsApp
          </a>
        </div>
      </div>
    )
  }

  return (
    <div>
      {!configured ? (
        <p className="mb-6 border border-amber-500/30 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Defina <code className="font-mono">VITE_WEB3FORMS_ACCESS_KEY</code> para
          ativar o envio real dos orçamentos.
        </p>
      ) : null}

      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
          <span>Etapa {step + 1} de 4</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1 w-full bg-border">
          <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {step === 0 ? (
        <fieldset>
          <legend className="font-display text-2xl font-bold text-ink">Tipo de projeto</legend>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {tipos.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => update('tipo', t.id)}
                className={cn(
                  'border px-4 py-4 text-left text-sm font-semibold transition',
                  data.tipo === t.id
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-border hover:border-ink/30',
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
          {errors.tipo ? <p className="mt-3 text-xs text-primary">{errors.tipo}</p> : null}
        </fieldset>
      ) : null}

      {step === 1 ? (
        <fieldset className="space-y-5">
          <legend className="font-display text-2xl font-bold text-ink">Dados do projeto</legend>
          <Input label="Nome do projeto" value={data.projectName} onChange={(v) => update('projectName', v)} error={errors.projectName} />
          <Input label="Localização" value={data.location} onChange={(v) => update('location', v)} error={errors.location} />
          <div>
            <label className="mb-2 block text-sm font-medium">Descrição</label>
            <textarea
              value={data.description}
              onChange={(e) => update('description', e.target.value)}
              rows={5}
              className="w-full border border-border px-3 py-3 text-sm outline-none focus:border-primary"
            />
            {errors.description ? <p className="mt-1 text-xs text-primary">{errors.description}</p> : null}
          </div>
          <Input label="Prazo pretendido" value={data.prazo} onChange={(v) => update('prazo', v)} />
          <Input label="Orçamento estimado (opcional)" value={data.budget} onChange={(v) => update('budget', v)} />
        </fieldset>
      ) : null}

      {step === 2 ? (
        <fieldset className="space-y-5">
          <legend className="font-display text-2xl font-bold text-ink">Contactos</legend>
          <Input label="Nome" value={data.name} onChange={(v) => update('name', v)} error={errors.name} />
          <Input label="Empresa (opcional)" value={data.companyName} onChange={(v) => update('companyName', v)} />
          <Input label="Email" type="email" value={data.email} onChange={(v) => update('email', v)} error={errors.email} />
          <Input label="Telefone" type="tel" value={data.phone} onChange={(v) => update('phone', v)} error={errors.phone} />
          <div>
            <p className="mb-2 text-sm font-medium">Preferência de contacto</p>
            <div className="flex flex-wrap gap-3">
              {['telefone', 'email', 'ambos'].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => update('preference', p)}
                  className={cn(
                    'border px-4 py-2 text-sm capitalize',
                    data.preference === p ? 'border-primary text-primary' : 'border-border',
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </fieldset>
      ) : null}

      {step === 3 ? (
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">Revisão</h2>
          <dl className="mt-6 space-y-3 border border-border bg-paper p-5 text-sm">
            <Row label="Tipo" value={tipoLabel} />
            <Row label="Projeto" value={data.projectName} />
            <Row label="Localização" value={data.location} />
            <Row label="Descrição" value={data.description} />
            <Row label="Prazo" value={data.prazo || '—'} />
            <Row label="Orçamento" value={data.budget || '—'} />
            <Row label="Nome" value={data.name} />
            <Row label="Empresa" value={data.companyName || '—'} />
            <Row label="Email" value={data.email} />
            <Row label="Telefone" value={data.phone} />
            <Row label="Preferência" value={data.preference} />
          </dl>
          <label className="mt-6 flex items-start gap-3 text-sm text-ink-muted">
            <input
              type="checkbox"
              checked={data.consent}
              onChange={(e) => update('consent', e.target.checked)}
              className="mt-1 accent-primary"
            />
            <span>
              Consinto o tratamento dos dados indicados para efeitos de pedido de
              orçamento, nos termos da política de privacidade.
            </span>
          </label>
          {errors.consent ? <p className="mt-2 text-xs text-primary">{errors.consent}</p> : null}
        </div>
      ) : null}

      {serverError ? (
        <p className="mt-6 border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-primary" role="alert">
          {serverError}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <Button
          type="button"
          variant="outline"
          disabled={step === 0 || submitting}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
        >
          Voltar
        </Button>
        <Button type="button" onClick={() => void nextStep()} disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              A enviar…
            </>
          ) : step === 3 ? (
            'Confirmar e enviar'
          ) : (
            'Continuar'
          )}
        </Button>
      </div>

      <p className="mt-8 text-sm text-ink-muted">
        Prefere contacto direto?{' '}
        <a className="font-semibold text-primary" href={company.phones[0].href}>
          {company.phones[0].display}
        </a>{' '}
        ·{' '}
        <a className="font-semibold text-primary" href={company.emailHref}>
          {company.email}
        </a>{' '}
        ·{' '}
        <a
          className="inline-flex items-center gap-1 font-semibold text-[#128C7E]"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          WhatsApp
        </a>
      </p>
    </div>
  )
}

function Input({
  label,
  value,
  onChange,
  error,
  type = 'text',
}: {
  label: string
  value: string
  onChange: (v: string) => void
  error?: string
  type?: string
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-border px-3 py-3 text-sm outline-none focus:border-primary"
        aria-invalid={Boolean(error)}
      />
      {error ? <p className="mt-1 text-xs text-primary">{error}</p> : null}
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[140px_1fr]">
      <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
        {label}
      </dt>
      <dd className="text-ink">{value}</dd>
    </div>
  )
}
