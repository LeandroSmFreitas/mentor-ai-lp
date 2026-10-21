import { GoogleDrive, Notion, GitHub, Slack } from './icons.jsx'

function Step({ n, title, text, children }) {
  return (
    <div className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 18, borderRadius: 18 }}>
      <span className="step-n">{n}</span>
      <div>
        <h3 style={{ fontSize: 18, fontWeight: 600 }}>{title}</h3>
        <p className="muted pretty" style={{ marginTop: 8, lineHeight: 1.6 }}>{text}</p>
      </div>
      {children}
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="como" style={{ background: '#FAFAFA', borderTop: '1px solid #F0F0F2', borderBottom: '1px solid #F0F0F2' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 56, paddingTop: 112, paddingBottom: 112 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640 }}>
          <span className="kicker">Como funciona</span>
          <h2 className="h2">Pronto no mesmo dia, sem projeto de implantação.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 20 }}>
          <Step n="1" title="Conecte suas ferramentas" text="Notion, Google Drive, GitHub e canais do Slack. Você escolhe o que entra, e as permissões de cada documento são respeitadas.">
            <div aria-hidden="true" style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
              <span className="logo"><GoogleDrive width={18} height={16} /></span>
              <span className="logo"><Notion size={18} strokeWidth={1.8} /></span>
              <span className="logo"><GitHub size={18} /></span>
              <span className="logo"><Slack size={18} /></span>
            </div>
          </Step>
          <Step n="2" title="Monte as trilhas por cargo" text="Comece de um modelo pronto ou deixe o Mentor ler seus guias de onboarding e propor os passos, responsáveis e prazos.">
            <div className="well" aria-hidden="true" style={{ marginTop: 'auto', padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div className="small" style={{ display: 'flex', justifyContent: 'space-between' }}><span>Dia 1 · Acesso ao GitHub</span><span className="muted">Acesso</span></div>
              <div className="small" style={{ display: 'flex', justifyContent: 'space-between' }}><span>Dia 2 · Acesso à AWS</span><span className="muted">Acesso</span></div>
            </div>
          </Step>
          <Step n="3" title="Deixe o Mentor guiar" text="A pessoa nova recebe os passos do dia no Slack, pergunta o que quiser e é encaminhada a quem sabe quando a resposta não existe.">
            <div className="well" aria-hidden="true" style={{ marginTop: 'auto', padding: '10px 14px' }}>
              <div className="small">Bom dia, Lucas. Três coisas para hoje →</div>
            </div>
          </Step>
        </div>
      </div>
    </section>
  )
}
