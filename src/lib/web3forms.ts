const ENDPOINT = 'https://api.web3forms.com/submit'

/** Limite Web3Forms para anexos (~1 MB) */
export const WEB3FORMS_MAX_FILE_KB = 1000

export function getWeb3FormsAccessKey() {
  return (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined)?.trim() ?? ''
}

export function isWeb3FormsConfigured() {
  return getWeb3FormsAccessKey().length > 10
}

export type Web3FormsPayload = Record<string, string | number | boolean | undefined>

export type Web3FormsResult =
  | { ok: true; message: string }
  | { ok: false; message: string }

function parseResult(
  response: Response,
  json: { success?: boolean; message?: string; body?: { message?: string } },
): Web3FormsResult {
  if (response.ok && json.success) {
    return {
      ok: true,
      message: json.message || json.body?.message || 'Enviado com sucesso.',
    }
  }
  return {
    ok: false,
    message:
      json.message ||
      json.body?.message ||
      'Não foi possível enviar. Tente novamente ou contacte-nos por WhatsApp.',
  }
}

/** Envio JSON (contactos / orçamentos sem ficheiros). */
export async function submitWeb3Form(
  payload: Web3FormsPayload,
): Promise<Web3FormsResult> {
  const accessKey = getWeb3FormsAccessKey()
  if (!accessKey) {
    return {
      ok: false,
      message:
        'Formulário ainda sem chave Web3Forms. Defina VITE_WEB3FORMS_ACCESS_KEY no ambiente.',
    }
  }

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        botcheck: false,
        ...payload,
      }),
    })
    const json = (await response.json()) as {
      success?: boolean
      message?: string
      body?: { message?: string }
    }
    return parseResult(response, json)
  } catch {
    return {
      ok: false,
      message:
        'Erro de rede ao enviar. Verifique a ligação ou fale connosco no WhatsApp.',
    }
  }
}

/**
 * Envio multipart (candidaturas com CV).
 * Não definir Content-Type manualmente — o browser define o boundary.
 */
export async function submitWeb3FormData(
  fields: Web3FormsPayload,
  file?: File | null,
  fileFieldName = 'attachment',
): Promise<Web3FormsResult> {
  const accessKey = getWeb3FormsAccessKey()
  if (!accessKey) {
    return {
      ok: false,
      message:
        'Formulário ainda sem chave Web3Forms. Defina VITE_WEB3FORMS_ACCESS_KEY no ambiente.',
    }
  }

  if (file) {
    const sizeKb = file.size / 1024
    if (sizeKb > WEB3FORMS_MAX_FILE_KB) {
      return {
        ok: false,
        message: `O ficheiro deve ter menos de ${WEB3FORMS_MAX_FILE_KB / 1000} MB.`,
      }
    }
  }

  try {
    const formData = new FormData()
    formData.append('access_key', accessKey)
    formData.append('botcheck', 'false')
    for (const [key, value] of Object.entries(fields)) {
      if (value === undefined) continue
      formData.append(key, String(value))
    }
    if (file) formData.append(fileFieldName, file)

    const response = await fetch(ENDPOINT, {
      method: 'POST',
      body: formData,
    })
    const json = (await response.json()) as {
      success?: boolean
      message?: string
      body?: { message?: string }
    }
    return parseResult(response, json)
  } catch {
    return {
      ok: false,
      message:
        'Erro de rede ao enviar. Verifique a ligação ou fale connosco no WhatsApp.',
    }
  }
}
