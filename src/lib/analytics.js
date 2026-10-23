// Métricas só são carregadas depois do consentimento do visitante (LGPD).
// Configure os IDs em .env: VITE_GA_ID (GA4) e VITE_META_PIXEL_ID (Meta Pixel).
const GA_ID = import.meta.env.VITE_GA_ID
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID
const CONSENT_KEY = 'mentor-consent'

let loaded = false

export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY)
  } catch {
    return null
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    /* sem armazenamento: o consentimento vale só nesta visita */
  }
  if (value === 'granted') loadAnalytics()
}

function addScript(src) {
  const s = document.createElement('script')
  s.async = true
  s.src = src
  document.head.appendChild(s)
}

export function loadAnalytics() {
  if (loaded || getConsent() !== 'granted') return
  loaded = true

  if (GA_ID) {
    window.dataLayer = window.dataLayer || []
    window.gtag = function () { window.dataLayer.push(arguments) }
    window.gtag('js', new Date())
    window.gtag('config', GA_ID)
    addScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`)
  }

  if (PIXEL_ID) {
    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq('init', PIXEL_ID)
    window.fbq('track', 'PageView')
  }
}

// Eventos usados: cta_click, plan_click, lead_submit
export function track(event, params = {}) {
  if (getConsent() !== 'granted') return
  if (window.gtag) window.gtag('event', event, params)
  if (window.fbq) {
    if (event === 'lead_submit') window.fbq('track', 'Lead', params)
    else window.fbq('trackCustom', event, params)
  }
}

// Guarda a origem da visita (anúncio) para anexar ao lead.
export function captureAttribution() {
  try {
    const q = new URLSearchParams(window.location.search)
    const utm = {}
    for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid']) {
      if (q.get(k)) utm[k] = q.get(k)
    }
    if (Object.keys(utm).length) sessionStorage.setItem('mentor-utm', JSON.stringify(utm))
  } catch {
    /* ignora */
  }
}

export function getAttribution() {
  try {
    return {
      ...JSON.parse(sessionStorage.getItem('mentor-utm') || '{}'),
      referrer: document.referrer || undefined,
    }
  } catch {
    return {}
  }
}
