import { Mark } from './icons.jsx'

const links = ['Privacidade', 'Termos', 'Segurança', '[E-MAIL DE CONTATO]']

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #F0F0F2' }}>
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingTop: 32, paddingBottom: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600 }}>
          <Mark box={22} style={{ borderRadius: 6 }} />
          Mentor
          <span className="small muted" style={{ fontWeight: 400 }}>© 2026</span>
        </div>
        <nav aria-label="Rodapé" className="small" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {links.map((l) => <a key={l} href="#" style={{ color: '#6E6E78' }}>{l}</a>)}
        </nav>
      </div>
    </footer>
  )
}
