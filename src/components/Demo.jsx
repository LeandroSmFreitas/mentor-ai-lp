import { CandidatesScreen, TrainingScreen, AssistantScreen } from './screens.jsx'

const screens = [
  ['Seleção', 'Painel de candidatos', 'Requisitos da vaga e etapas de avaliação em um só painel.', <CandidatesScreen />],
  ['Treinamento', 'Trilha de integração', 'Módulos, aulas e o progresso de cada colaborador.', <TrainingScreen />],
  ['Orientação', 'Assistente de IA', 'Respostas com base nos materiais da empresa, com encaminhamento quando necessário.', <AssistantScreen />],
]

export default function Demo() {
  return (
    <section id="demonstracao">
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 48, paddingTop: 112, paddingBottom: 112 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 720 }}>
          <span className="kicker">Veja na prática</span>
          <h2 className="h2">Uma interface simples para o RH e para os colaboradores.</h2>
          <p className="small muted">Telas conceituais, com dados fictícios. O produto está em fase de validação.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 24, alignItems: 'start' }}>
          {screens.map(([kicker, title, text, screen]) => (
            <div key={title} style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: 20, borderRadius: 20, background: '#F4F4F5', border: '1px solid #EBEBEE' }}>
              <div aria-hidden="true">{screen}</div>
              <div style={{ padding: '0 4px 4px' }}>
                <span className="kicker" style={{ fontSize: 12 }}>{kicker}</span>
                <h3 style={{ fontSize: 17, fontWeight: 600, marginTop: 4 }}>{title}</h3>
                <p className="small muted pretty" style={{ marginTop: 6, lineHeight: 1.6 }}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
