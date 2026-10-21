import { Shield } from './icons.jsx'

const svgProps = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: '#F4F4F5', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

const items = [
  [
    <svg {...svgProps}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>,
    'Permissões respeitadas',
    'Ninguém recebe resposta de um documento que não poderia abrir na ferramenta de origem.',
  ],
  [
    <svg {...svgProps}><path d="M12 21s-7-5.4-7-11a7 7 0 0 1 14 0c0 5.6-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>,
    'Dados no Brasil',
    'Armazenamento em São Paulo, criptografado e isolado por empresa.',
  ],
  [
    <svg {...svgProps}><circle cx="12" cy="12" r="9" /><path d="m5.6 5.6 12.8 12.8" /></svg>,
    'Nada de treinar modelos',
    'Seus documentos e conversas nunca são usados para treinar inteligência artificial.',
  ],
  [
    <Shield stroke="#F4F4F5" strokeWidth={1.6} />,
    'Pronto para a LGPD',
    'Acordo de tratamento de dados, retenção configurável e registro de auditoria.',
  ],
]

export default function Security() {
  return (
    <section id="seguranca" className="dark">
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 48, paddingTop: 112, paddingBottom: 112 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 80px', alignItems: 'flex-end' }}>
          <div style={{ flex: '1 1 480px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span className="kicker" style={{ color: '#8EA6FF' }}>Segurança</span>
            <h2 className="h2" style={{ color: '#FFFFFF' }}>Seu conhecimento interno continua seu.</h2>
          </div>
          <p className="muted-d" style={{ flex: '1 1 360px', maxWidth: 440, fontSize: 17, lineHeight: 1.6 }}>
            Feito para passar na conversa com TI e jurídico desde o primeiro dia.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))', gap: 14 }}>
          {items.map(([icon, title, text]) => (
            <div key={title} className="sec-item">
              {icon}
              <h3 style={{ fontSize: 16, fontWeight: 600, color: '#FFFFFF' }}>{title}</h3>
              <p className="muted-d small pretty" style={{ lineHeight: 1.6 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
