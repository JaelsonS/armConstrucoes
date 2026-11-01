import { useId, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  Briefcase,
  Check,
  FileText,
  Loader2,
  MessageCircle,
  Upload,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { company } from '@/data/company'
import { whatsappUrl } from '@/data/whatsapp'
import {
  isWeb3FormsConfigured,
  submitWeb3FormData,
  WEB3FORMS_MAX_FILE_KB,
} from '@/lib/web3forms'
import { cn } from '@/lib/utils'

const areas = [
  'Pedreiro / Construção civil',
  'Capoto / Isolamento térmico',
  'Estruturas metálicas',
  'Remodelações / Acabamentos',
  'Condutor de máquinas',
  'Encarregado de obra',
  'Administrativo / Outro',
] as const

const ACCEPTED_CV =
  '.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ApplicationForm() {
  const fileInputId = useId()
  const [status, setStatus] = useState<Status>('idle')
  const [area, setArea] = useState('')
  const [cv, setCv] = useState<File | null>(null)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [serverError, setServerError] = useState('')
  const configured = isWeb3FormsConfigured()

  function validate(form: FormData) {
    const next: Record<string, string> = {}
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const phone = String(form.get('phone') || '').trim()
    const experience = String(form.get('experience') || '').trim()
    const message = String(form.get('message') || '').trim()

    if (name.length < 2) next.name = 'Indique o seu nome.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Email inválido.'
    if (phone.length < 9) next.phone = 'Indique um telefone válido.'
    if (!area) next.area = 'Selecione a área de interesse.'
    if (experience.length < 2) next.experience = 'Indique a experiência.'
    if (message.length < 20)
      next.message = 'Conte-nos um pouco mais sobre si (mín. 20 caracteres).'
    if (!cv) next.cv = 'Anexe o seu curriculum vitae (PDF ou Word).'
    else if (cv.size / 1024 > WEB3FORMS_MAX_FILE_KB) {
      next.cv = `O CV deve ter menos de ${WEB3FORMS_MAX_FILE_KB / 1000} MB.`
    }
    if (!privacyAccepted)
      next.privacy =
        'Tem de aceitar a política de tratamento de dados para enviar a candidatura.'
    return next
  }

  function onCvChange(fileList: FileList | null) {
    const file = fileList?.[0] ?? null
    setCv(file)
    if (file && errors.cv) {
      setErrors((prev) => {
        const { cv: _, ...rest } = prev
        return rest
      })
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formEl = e.currentTarget
    const form = new FormData(formEl)
    const next = validate(form)
    setErrors(next)
    setServerError('')
    if (Object.keys(next).length) return
    if (String(form.get('botcheck') || '')) return

    setStatus('submitting')
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const phone = String(form.get('phone') || '').trim()
    const experience = String(form.get('experience') || '').trim()
    const availability = String(form.get('availability') || '').trim()
    const message = String(form.get('message') || '').trim()
    const location = String(form.get('location') || '').trim()

    const result = await submitWeb3FormData(
      {
        subject: `[Candidatura] ${name} — ${area}`,
        from_name: 'Site ARM — Candidaturas',
        form_type: 'candidatura',
        name,
        email,
        phone,
        area,
        experience,
        availability: availability || '—',
        location: location || '—',
        message,
        privacy_policy_accepted: 'Sim',
        cv_filename: cv?.name || '—',
        replyto: email,
      },
      cv,
      'attachment',
    )

    if (result.ok) {
      setStatus('success')
      formEl.reset()
      setArea('')
      setCv(null)
      setPrivacyAccepted(false)
      return
    }
    setServerError(result.message)
    setStatus('error')
  }

  if (status === 'success') {
    return (
      <div className="border border-primary/30 bg-paper p-8 sm:p-10" role="status">
        <div className="mb-4 flex h-12 w-12 items-center justify-center bg-primary text-white">
          <Check className="h-6 w-6" />
        </div>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Candidatura enviada
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
          Obrigado. A sua candidatura e o CV chegaram à ARM Construções. Se o
          perfil corresponder às necessidades da equipa, entraremos em contacto.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            onClick={() => {
              setStatus('idle')
              setErrors({})
              setServerError('')
            }}
          >
            Nova candidatura
          </Button>
          <Button to="/" variant="outline">
            Voltar ao início
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      {!configured ? (
        <p className="border border-amber-500/30 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Defina <code className="font-mono">VITE_WEB3FORMS_ACCESS_KEY</code> para
          ativar o envio real das candidaturas.
        </p>
      ) : null}

      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="flex items-start gap-3 border border-border bg-paper p-4">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-white text-primary">
          <Briefcase className="h-5 w-5" />
        </span>
        <p className="text-sm leading-relaxed text-ink-muted">
          Candidate-se à equipa ARM. Analisamos candidaturas espontâneas e
          oportunidades abertas em obra e apoio técnico em {company.areaServed}.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome completo" name="name" error={errors.name} required />
        <Field label="Telefone" name="phone" type="tel" error={errors.phone} required />
        <Field label="Email" name="email" type="email" error={errors.email} required />
        <Field label="Localidade" name="location" />
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-medium text-ink">
          Área de interesse *
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {areas.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setArea(item)}
              className={cn(
                'border px-4 py-3 text-left text-sm font-medium transition',
                area === item
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-border hover:border-ink/30',
              )}
            >
              {item}
            </button>
          ))}
        </div>
        {errors.area ? <p className="mt-2 text-xs text-primary">{errors.area}</p> : null}
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Anos de experiência"
          name="experience"
          error={errors.experience}
          required
          placeholder="Ex.: 5 anos"
        />
        <Field
          label="Disponibilidade"
          name="availability"
          placeholder="Ex.: Imediata / 15 dias"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          Apresentação / motivação *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Conte-nos a sua experiência e o que procura na ARM…"
          className="w-full border border-border bg-white px-3 py-3 text-sm outline-none focus:border-primary"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-primary">{errors.message}</p>
        ) : null}
      </div>

      {/* CV upload */}
      <div>
        <p className="mb-2 text-sm font-medium text-ink">Curriculum vitae *</p>
        <label
          htmlFor={fileInputId}
          className={cn(
            'flex cursor-pointer flex-col items-center justify-center gap-3 border border-dashed bg-white px-4 py-8 text-center transition',
            errors.cv
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary hover:bg-paper/60',
          )}
        >
          <span className="inline-flex h-11 w-11 items-center justify-center border border-border text-primary">
            <Upload className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold text-ink">
            {cv ? 'Substituir ficheiro' : 'Anexar CV (PDF ou Word)'}
          </span>
          <span className="text-xs text-ink-muted">
            Máximo {WEB3FORMS_MAX_FILE_KB / 1000} MB · formatos .pdf, .doc, .docx
          </span>
          <input
            id={fileInputId}
            type="file"
            name="attachment"
            accept={ACCEPTED_CV}
            className="sr-only"
            onChange={(e) => onCvChange(e.target.files)}
          />
        </label>

        {cv ? (
          <div className="mt-3 flex items-center gap-3 border border-border bg-paper px-4 py-3">
            <FileText className="h-5 w-5 shrink-0 text-primary" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{cv.name}</p>
              <p className="text-xs text-ink-muted">
                {(cv.size / 1024).toFixed(0)} KB
              </p>
            </div>
            <button
              type="button"
              onClick={() => setCv(null)}
              className="inline-flex h-9 w-9 items-center justify-center text-ink-muted transition hover:text-primary"
              aria-label="Remover CV"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : null}
        {errors.cv ? <p className="mt-2 text-xs text-primary">{errors.cv}</p> : null}
      </div>

      {/* Política de dados */}
      <div
        className={cn(
          'border bg-paper p-4 sm:p-5',
          errors.privacy ? 'border-primary' : 'border-border',
        )}
      >
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-muted">
          <input
            type="checkbox"
            name="privacy"
            checked={privacyAccepted}
            onChange={(e) => {
              setPrivacyAccepted(e.target.checked)
              if (e.target.checked && errors.privacy) {
                setErrors((prev) => {
                  const { privacy: _, ...rest } = prev
                  return rest
                })
              }
            }}
            className="mt-1 accent-primary"
            aria-invalid={Boolean(errors.privacy)}
          />
          <span>
            Li e aceito a{' '}
            <Link
              to="/privacidade"
              className="font-semibold text-primary underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              política de privacidade e tratamento de dados
            </Link>{' '}
            da {company.shortName}, incluindo o tratamento dos dados pessoais e do
            curriculum enviados para efeitos de recrutamento. *
          </span>
        </label>
        {errors.privacy ? (
          <p className="mt-3 text-xs text-primary">{errors.privacy}</p>
        ) : null}
      </div>

      {serverError ? (
        <p className="border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-primary" role="alert">
          {serverError}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === 'submitting' || !configured}>
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              A enviar candidatura…
            </>
          ) : (
            'Enviar candidatura'
          )}
        </Button>
        <a
          href={whatsappUrl(
            'Olá ARM, gostaria de falar sobre uma candidatura à equipa.',
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#128C7E] hover:underline"
        >
          <MessageCircle className="h-4 w-4" />
          Dúvidas? WhatsApp
        </a>
      </div>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  error,
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  error?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required ? ' *' : ''}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border border-border bg-white px-3 py-3 text-sm outline-none focus:border-primary"
        aria-invalid={Boolean(error)}
      />
      {error ? <p className="mt-1 text-xs text-primary">{error}</p> : null}
    </div>
  )
}
