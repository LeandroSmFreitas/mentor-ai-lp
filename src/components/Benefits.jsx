import { Check } from './icons.jsx'

const benefits = [
  'Menos tempo dedicado a tarefas repetitivas de recrutamento e treinamento',
  'Mais organização e critérios na avaliação de candidatos',
  'Treinamentos padronizados para novos colaboradores',
  'Mais autonomia para os funcionários consultarem informações internas',
  'Melhor acompanhamento das etapas de integração',
  'Conhecimentos e procedimentos da empresa mais organizados',
]

export default function Benefits() {
  return (
    <section style={{ background: '#FAFAFA', borderTop: '1px solid #F0F0F2', borderBottom: '1px solid #F0F0F2' }}>
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px 80px', paddingTop: 112, paddingBottom: 112 }}>
        <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 440 }}>
          <span className="kicker">Benefícios</span>
          <h2 className="h2">Uma empresa mais organizada, com menos retrabalho.</h2>
        </div>
        <ul style={{ flex: '999 1 480px', minWidth: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 16 }}>
          {benefits.map((b) => (
            <li key={b} className="card" style={{ display: 'flex', gap: 12, padding: '18px 20px', borderRadius: 14, lineHeight: 1.5 }}>
              <span style={{ flex: 'none', marginTop: 2 }}><Check /></span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
