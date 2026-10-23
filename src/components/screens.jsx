import { Mark } from './icons.jsx'

// Telas conceituais do produto (dados fictícios), usadas no hero e na demonstração.

const initials = (name) => name.split(' ').map((p) => p[0]).slice(0, 2).join('')

export function CandidatesScreen() {
  const candidates = [
    ['Ana Souza', 'a1', 5, 'Entrevista', 'ok'],
    ['Bruno Lima', 'a3', 4, 'Triagem', 'info'],
    ['Carla Mendes', 'a4', 4, 'Teste prático', 'info'],
    ['Diego Rocha', 'a5', 2, 'Em análise', 'warn'],
  ]
  return (
    <div className="card raised" style={{ borderRadius: 16, overflow: 'hidden', textAlign: 'left' }}>
      <div style={{ padding: '16px 18px', borderBottom: '1px solid #EFEFF1' }}>
        <div className="xs muted">Vaga</div>
        <div style={{ fontWeight: 600, fontSize: 15, marginTop: 2 }}>Analista Financeiro</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
          {['Excel avançado', 'Conciliação bancária', 'Fluxo de caixa', 'Experiência com ERP', 'Comunicação'].map((r) => (
            <span key={r} className="chip">{r}</span>
          ))}
        </div>
      </div>
      <div className="rows">
        {candidates.map(([name, tone, met, stage, status]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 18px' }}>
            <span className={`av ${tone}`}>{initials(name)}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 500, fontSize: 13.5 }}>{name}</div>
              <div className="xs muted">{met} de 5 requisitos atendidos</div>
            </div>
            <span className={`status ${status}`} style={{ fontSize: 12.5 }}>{stage}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TrainingScreen() {
  const modules = [
    ['Boas-vindas e cultura', 'Concluído', 'ok'],
    ['Regras e políticas internas', 'Concluído', 'ok'],
    ['Ferramentas do dia a dia', 'Em andamento', 'info'],
    ['Rotinas da função', 'Pendente', ''],
  ]
  return (
    <div className="card raised" style={{ borderRadius: 16, padding: 18, display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'left' }}>
      <div>
        <div className="xs muted">Trilha de integração</div>
        <div style={{ fontWeight: 600, fontSize: 15, marginTop: 2 }}>Atendimento ao cliente</div>
      </div>
      <div>
        <div className="small" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <strong style={{ fontWeight: 600 }}>2 de 4 módulos</strong>
          <span className="muted">50%</span>
        </div>
        <div className="bar"><span style={{ width: '50%' }} /></div>
      </div>
      <div className="well rows" style={{ overflow: 'hidden' }}>
        {modules.map(([title, label, status]) => (
          <div key={title} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '11px 14px' }}>
            <span style={{ fontSize: 13.5, fontWeight: 500 }}>{title}</span>
            <span className={`status ${status}`} style={{ fontSize: 12.5 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function AssistantScreen() {
  const bubble = { alignSelf: 'flex-end', background: '#F4F4F5', padding: '8px 12px', borderRadius: '12px 12px 4px 12px', fontSize: 13.5 }
  return (
    <div className="card raised" style={{ borderRadius: 16, padding: 18, display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'left' }}>
      <div style={bubble}>Como solicito reembolso de despesas?</div>
      <div style={{ display: 'flex', gap: 10 }}>
        <Mark box={24} />
        <div style={{ fontSize: 13.5, lineHeight: 1.55, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <p>Envie a nota fiscal pelo formulário de despesas em até 5 dias úteis. O financeiro aprova e o valor entra na folha seguinte.</p>
          <span className="chip" style={{ alignSelf: 'flex-start' }}>
            <span className="chip accent" style={{ height: 16, padding: '0 5px', fontSize: 10.5 }}>1</span>Política de despesas
          </span>
        </div>
      </div>
      <div style={bubble}>E se eu perder a nota?</div>
      <div style={{ display: 'flex', gap: 10 }}>
        <Mark box={24} />
        <p style={{ fontSize: 13.5, lineHeight: 1.55 }}>Não encontrei isso nos materiais cadastrados. Quer que eu encaminhe a dúvida para o RH?</p>
      </div>
    </div>
  )
}
