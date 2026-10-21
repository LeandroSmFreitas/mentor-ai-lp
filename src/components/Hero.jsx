import { Mark } from './icons.jsx'

const circle = { width: 18, height: 18, borderRadius: 99, border: '1.5px solid #C4C4CB', flex: 'none' }
const dot = { width: 10, height: 10, borderRadius: 99, background: '#E4E4E7' }

function Task({ title, meta, strong }) {
  return (
    <div style={{ display: 'flex', gap: 12, padding: '14px 16px' }}>
      <span style={circle} />
      <div>
        <div style={{ fontWeight: strong ? 600 : 500, fontSize: 13.5 }}>{title}</div>
        <div className="xs muted">{meta}</div>
      </div>
    </div>
  )
}

function AppPreview() {
  const segments = [...Array(5).fill('d'), 'l', ...Array(8).fill('')]
  return (
    <div className="window" role="img" aria-label="Prévia do Mentor: a trilha de onboarding do Lucas, com os passos do dia e uma resposta do Mentor citando fontes">
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, height: 40, padding: '0 16px', borderBottom: '1px solid #E4E4E7', background: '#FAFAFA' }}>
        <span style={dot} /><span style={dot} /><span style={dot} />
      </div>
      <div style={{ display: 'flex', gap: 8, padding: 8, minHeight: 460 }}>
        <div aria-hidden="true" style={{ flex: '0 0 200px', padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 4, textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 6px 14px', fontWeight: 600, fontSize: 13 }}>
            <Mark box={20} icon={11} style={{ borderRadius: 6 }} />Acme
          </div>
          <span className="nav on" style={{ height: 30, fontSize: 12.5 }}>Minha trilha</span>
          <span className="nav" style={{ height: 30, fontSize: 12.5 }}>Perguntar ao Mentor</span>
          <span className="navlabel" style={{ paddingTop: 14, fontSize: 11 }}>Conversas</span>
          <span className="nav" style={{ height: 28, fontSize: 12, fontWeight: 400 }}>Acesso à AWS</span>
          <span className="nav" style={{ height: 28, fontSize: 12, fontWeight: 400 }}>Testes de integração</span>
        </div>
        <div className="sheet" aria-hidden="true" style={{ flex: 1, padding: '32px 36px', textAlign: 'left', gap: 22 }}>
          <div>
            <div className="xs muted">Quarta-feira, 21 de outubro</div>
            <div className="serif" style={{ fontSize: 34, lineHeight: 1.1, marginTop: 6 }}>Bom dia, Lucas.</div>
          </div>
          <div className="card" style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 520 }}>
            <div className="small">
              <strong style={{ fontWeight: 600 }}>5 de 14 passos</strong>
              <span className="muted"> concluídos · dia 3</span>
            </div>
            <div className="segs">
              {segments.map((c, i) => <span key={i} className={c} />)}
            </div>
          </div>
          <div className="card rows" style={{ maxWidth: 520, overflow: 'hidden' }}>
            <Task strong title="Pedir acesso à AWS de staging" meta="Acesso · Maria Lima, Plataforma" />
            <Task title="Subir o ambiente local" meta="Tarefa · ajuda de Rafael" />
            <Task title="Ler o guia de arquitetura" meta="Leitura · 20 min" />
          </div>
        </div>
      </div>
    </div>
  )
}

function FloatingChat() {
  return (
    <figure className="float" aria-hidden="true">
      <div className="card" style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'left', borderRadius: 16, boxShadow: '0 2px 4px rgb(24 24 27 / .05), 0 28px 56px -16px rgb(24 24 27 / .3)' }}>
        <div style={{ alignSelf: 'flex-end', background: '#F4F4F5', padding: '8px 12px', borderRadius: '12px 12px 4px 12px', fontSize: 13.5 }}>
          Com quem eu pego acesso à AWS?
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Mark box={24} />
          <div style={{ fontSize: 13.5, lineHeight: 1.55, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p>Peça no <strong>#infra-acessos</strong> com o template “Novo acesso”. Quem aprova é a <strong>Maria Lima</strong>.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              <span className="chip"><span className="chip accent" style={{ height: 16, padding: '0 5px', fontSize: 10.5 }}>1</span>Onboarding de Engenharia</span>
              <span className="chip"><span className="chip accent" style={{ height: 16, padding: '0 5px', fontSize: 10.5 }}>2</span>Quem procurar</span>
            </div>
          </div>
        </div>
      </div>
    </figure>
  )
}

export default function Hero() {
  return (
    <section style={{ background: 'linear-gradient(#FFFFFF, #FAFAFA)' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 28, paddingTop: 88, paddingBottom: 72 }}>
        <span className="eyebrow"><b>Novo</b>Onboarding e conhecimento interno com IA</span>
        <h1 className="display" style={{ fontSize: 'clamp(44px, 6.2vw, 84px)', maxWidth: 980 }}>
          Ninguém mais começa <em>perdido</em> na sua empresa.
        </h1>
        <p className="lead" style={{ maxWidth: 640 }}>
          O Mentor aprende os processos da empresa e guia cada pessoa nova: o que fazer hoje, com quem falar e como as coisas funcionam. Direto no Slack, a qualquer hora, sempre com a fonte.
        </p>
        <div className="actions" style={{ justifyContent: 'center' }}>
          <a className="btn btn-primary btn-lg" href="#demo">Agendar demonstração</a>
          <a className="btn btn-lg" href="#como">Ver como funciona</a>
        </div>
        <p className="small muted">Implantação em um dia · Dados hospedados no Brasil · Seus documentos não treinam modelos</p>
      </div>

      <div className="wrap" style={{ maxWidth: 1140, paddingBottom: 96 }}>
        <div className="stage">
          <AppPreview />
          <FloatingChat />
        </div>
      </div>
    </section>
  )
}
