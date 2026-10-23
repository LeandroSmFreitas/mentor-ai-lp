import { useEffect, useState } from 'react'
import { Mark } from './icons.jsx'
import { track } from '../lib/analytics.js'

const links = [
  ['#funcionalidades', 'Funcionalidades'],
  ['#como', 'Como funciona'],
  ['#precos', 'Preços'],
  ['#faq', 'Perguntas'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth > 760 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className="lp-nav" style={{ position: 'relative', zIndex: 2, borderBottom: '1px solid #F0F0F2', background: 'rgb(255 255 255 / .9)' }}>
      <div className="wrap lp-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, height: 68 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600, fontSize: 16, letterSpacing: '-0.01em', color: '#18181B' }}>
          <Mark icon={14} strokeWidth={2.6} />
          Mentor
        </a>
        <nav className="lp-links" aria-label="Seções">
          {links.map(([href, label]) => (
            <a key={href} className="link" href={href}>{label}</a>
          ))}
        </nav>
        <div className="actions">
          <a className="btn btn-primary" href="#contato" onClick={() => track('cta_click', { location: 'header' })}>
            Quero conhecer
          </a>
          <button
            type="button"
            className="btn icon-btn lp-burger"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="lp-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="lp-menu" className="lp-menu" aria-label="Menu">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}
