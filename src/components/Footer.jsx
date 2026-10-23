import { Mark } from './icons.jsx'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #F0F0F2' }}>
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingTop: 32, paddingBottom: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600 }}>
          <Mark box={22} style={{ borderRadius: 6 }} />
          Mentor
          <span className="small muted" style={{ fontWeight: 400 }}>© 2026</span>
        </div>
        <p className="small muted">Produto em fase de validação.</p>
      </div>
    </footer>
  )
}
