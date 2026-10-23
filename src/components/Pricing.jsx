import { Check } from './icons.jsx'
import { track } from '../lib/analytics.js'

// ATENÇÃO: defina com o seu sócio o que realmente pertence a cada plano
// (limites de colaboradores, de processos seletivos, acesso à IA) antes de publicar.
const plans = [
  {
    id: 'start',
    name: 'Start',
    price: 'R$ 190',
    period: 'por mês',
    audience: 'Para empresas que querem começar a organizar contratação, integração e treinamento.',
    items: [
      'Triagem de candidatos por requisitos da vaga',
      'Trilhas de treinamento para novos colaboradores',
      'Acesso individual para cada colaborador',
      'Acompanhamento do progresso',
    ],
    cta: 'Conhecer o Start',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 'R$ 290',
    period: 'por mês',
    audience: 'Para empresas que precisam de uma solução mais completa para seleção, treinamento e acompanhamento.',
    highlight: true,
    items: [
      'Tudo do Start',
      'Assistente de IA para dúvidas internas',
      'Maior capacidade de colaboradores e processos seletivos',
      'Mais recursos de acompanhamento',
    ],
    cta: 'Conhecer o Pro',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Sob consulta',
    audience: 'Para empresas com necessidades específicas ou que desejam uma configuração mais ampla.',
    items: [
      'Tudo do Pro',
      'Configuração conforme a estrutura da empresa',
      'Atendimento personalizado',
    ],
    cta: 'Falar com a equipe comercial',
  },
]

export default function Pricing({ onSelectPlan }) {
  return (
    <section id="precos" style={{ background: '#FAFAFA', borderTop: '1px solid #F0F0F2', borderBottom: '1px solid #F0F0F2' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 48, paddingTop: 112, paddingBottom: 112 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center', textAlign: 'center' }}>
          <span className="kicker">Planos e preços</span>
          <h2 className="h2">Escolha o plano ideal para a sua empresa.</h2>
          <p className="lead" style={{ fontSize: 17, maxWidth: 560 }}>Preços mensais, à vista, sem precisar preencher formulário para saber quanto custa.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(290px, 100%), 1fr))', gap: 16, maxWidth: 1040, width: '100%', margin: '0 auto', alignItems: 'stretch' }}>
          {plans.map((p) => (
            <div
              key={p.id}
              className="plan"
              style={p.highlight ? { borderColor: '#18181B', boxShadow: '0 0 0 1px #18181B, 0 24px 48px -20px rgb(24 24 27 / .25)' } : undefined}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600 }}>{p.name}</h3>
                  {p.highlight && <span className="chip accent">Recomendado</span>}
                </div>
                <p className="small muted pretty" style={{ marginTop: 6, lineHeight: 1.55 }}>{p.audience}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontSize: p.period ? 44 : 34, fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1 }}>{p.price}</span>
                {p.period && <span className="muted">{p.period}</span>}
              </div>
              <ul className="ticks small">
                {p.items.map((t) => <li key={t}><Check size={15} />{t}</li>)}
              </ul>
              <a
                className={`btn btn-lg btn-block${p.highlight ? ' btn-primary' : ''}`}
                href="#contato"
                style={{ marginTop: 'auto' }}
                onClick={() => { onSelectPlan(p.id); track('plan_click', { plan: p.id }) }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="xs muted" style={{ textAlign: 'center' }}>
          Produto em fase de validação: funcionalidades e planos podem ser ajustados até o lançamento.
        </p>
      </div>
    </section>
  )
}
