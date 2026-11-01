import { useState, type FormEvent } from 'react'
import { Check, Loader2, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { company } from '@/data/company'
import { whatsappUrl } from '@/data/whatsapp'
import { isWeb3FormsConfigured, submitWeb3Form } from '@/lib/web3forms'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [serverError, setServerError] = useState('')
  const configured = isWeb3FormsConfigured()

  function validate(form: FormData) {
    const next: Record<string, string> = {}
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const message = String(form.get('message') || '').trim()
    const consent = form.get('consent')

    if (name.length < 2) next.name = 'Indique o seu nome.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Email inválido.'
    if (message.length < 10) next.message = 'Descreva a sua mensagem (mín. 10 caracteres).'
    if (!consent) next.consent = 'É necessário o consentimento para contacto.'
    return next
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formEl = e.currentTarget
    const form = new FormData(formEl)
    const next = validate(form)
    setErrors(next)
    setServerError('')
    if (Object.keys(next).length) return

    // Honeypot
    if (String(form.get('botcheck') || '')) return

    setStatus('submitting')
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const phone = String(form.get('phone') || '').trim()
    const message = String(form.get('message') || '').trim()

    const result = await submitWeb3Form({
      subject: `[Contacto] ${name} — ARM Construções`,
      from_name: 'Site ARM Construções',
      form_type: 'contacto',
      name,
      email,
      phone: phone || '—',
      message,
      replyto: email,
    })

    if (result.ok) {
      setStatus('success')
      formEl.reset()
      return
    }
    setServerError(result.message)
    setStatus('error')
  }

  if (status === 'success') {
    return (
      <div className="border border-primary/30 bg-paper p-8" role="status">
        <div className="mb-4 flex h-12 w-12 items-center justify-center bg-primary text-white">
          <Check className="h-6 w-6" />
        </div>
        <p className="font-display text-2xl font-bold text-ink">Mensagem enviada</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Recebemos o seu contacto. A equipa ARM responde o mais breve possível.
          Para urgências, use o WhatsApp.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button type="button" onClick={() => setStatus('idle')}>
            Nova mensagem
          </Button>
          <a
            href={whatsappUrl('Olá, enviei um contacto pelo site e gostaria de falar consigo.')}
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
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {!configured ? (
        <p className="border border-amber-500/30 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          A chave Web3Forms ainda não está configurada neste ambiente. O envio
          ficará ativo após definir <code className="font-mono">VITE_WEB3FORMS_ACCESS_KEY</code>.
        </p>
      ) : null}

      {/* Honeypot anti-spam */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <Field label="Nome" name="name" error={errors.name} required />
      <Field label="Email" name="email" type="email" error={errors.email} required />
      <Field label="Telefone" name="phone" type="tel" />
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full border border-border bg-white px-3 py-3 text-sm outline-none focus:border-primary"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-primary">{errors.message}</p>
        ) : null}
      </div>
      <label className="flex items-start gap-3 text-sm text-ink-muted">
        <input type="checkbox" name="consent" className="mt-1 accent-primary" />
        <span>
          Consinto o tratamento dos meus dados para efeitos de contacto, de acordo
          com a política de privacidade.
        </span>
      </label>
      {errors.consent ? (
        <p className="text-xs text-primary">{errors.consent}</p>
      ) : null}

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
              A enviar…
            </>
          ) : (
            'Enviar mensagem'
          )}
        </Button>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#128C7E] hover:underline"
        >
          <MessageCircle className="h-4 w-4" />
          Preferir WhatsApp · {company.phones[0].display}
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
}: {
  label: string
  name: string
  type?: string
  error?: string
  required?: boolean
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
        className="w-full border border-border bg-white px-3 py-3 text-sm outline-none focus:border-primary"
        aria-invalid={Boolean(error)}
      />
      {error ? <p className="mt-1 text-xs text-primary">{error}</p> : null}
    </div>
  )
}
