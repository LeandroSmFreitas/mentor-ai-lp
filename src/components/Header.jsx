import { Mark } from './icons.jsx'

const links = [
  ['#como', 'Como funciona'],
  ['#areas', 'Para cada área'],
  ['#seguranca', 'Segurança'],
  ['#precos', 'Preços'],
]

export default function Header() {
  return (
    <header className="lp-nav" style={{ position: 'relative', zIndex: 2, borderBottom: '1px solid #F0F0F2', background: 'rgb(255 255 255 / .9)' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, height: 68 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600, fontSize: 16, letterSpacing: '-0.01em', color: '#18181B' }}>
          <Mark icon={14} strokeWidth={2.6} />
          Mentor
        </a>
        <nav className="lp-links" aria-label="Seções" style={{ display: 'flex', gap: 32 }}>
          {links.map(([href, label]) => (
            <a key={href} className="link" href={href}>{label}</a>
          ))}
        </nav>
        <div className="actions">
          <a className="btn btn-ghost" href="#">Entrar</a>
          <a className="btn btn-primary" href="#demo">Agendar demonstração</a>
        </div>
      </div>
    </header>
  )
}
