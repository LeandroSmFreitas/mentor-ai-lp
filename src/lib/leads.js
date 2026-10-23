import { getAttribution } from './analytics.js'

// Endpoint que recebe os leads (ex.: Formspree, Supabase Edge Function, API própria).
// Defina VITE_LEADS_ENDPOINT em .env. Sem ele, o envio falha de propósito:
// a confirmação só aparece quando o servidor realmente respondeu com sucesso.
const ENDPOINT = import.meta.env.VITE_LEADS_ENDPOINT

export async function submitLead(data) {
  if (!ENDPOINT) throw new Error('endpoint_not_configured')

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...data,
      ...getAttribution(),
      page: window.location.pathname,
      submittedAt: new Date().toISOString(),
    }),
  })
  if (!res.ok) throw new Error(`lead_http_${res.status}`)
}
