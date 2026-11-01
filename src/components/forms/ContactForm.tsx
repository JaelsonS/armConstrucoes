import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'

type Status = 'idle' | 'success'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

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

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const next = validate(form)
    setErrors(next)
    if (Object.keys(next).length) return
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="border border-primary/30 bg-paper p-8" role="status">
        <p className="font-display text-2xl font-bold text-ink">Mensagem preparada</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Esta é uma demonstração. A mensagem não foi enviada. Em produção, será
          integrada com um serviço de email ou CRM.
        </p>
        <Button className="mt-6" type="button" onClick={() => setStatus('idle')}>
          Nova mensagem
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <Field label="Nome" name="name" error={errors.name} required />
      <Field label="Email" name="email" type="email" error={errors.email} required />
      <Field label="Telefone" name="phone" type="tel" />
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          Mensagem
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
      <Button type="submit">Enviar mensagem</Button>
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
