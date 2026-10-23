import { Check } from './icons.jsx'
import { CandidatesScreen, AssistantScreen } from './screens.jsx'
import { track } from '../lib/analytics.js'

const benefits = [
  'Mais organização na seleção de candidatos',
  'Menos tempo gasto com treinamentos repetitivos',
  'Colaboradores mais preparados para suas funções',
]

export default function Hero() {
  return (
    <section style={{ background: 'linear-gradient(#FFFFFF, #FAFAFA)' }}>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 className="display" style={{ fontSize: 'clamp(40px, 5.2vw, 68px)' }}>
            Contrate melhor, <em>treine mais rápido</em> e economize tempo na sua empresa.
          </h1>
          <p className="lead" style={{ maxWidth: 560 }}>
            Uma plataforma inteligente para selecionar profissionais compatíveis com suas vagas, preparar novos colaboradores e facilitar o acesso às informações da sua empresa.
          </p>
          <ul className="ticks">
            {benefits.map((b) => <li key={b}><Check />{b}</li>)}
          </ul>
          <div className="actions">
            <a className="btn btn-primary btn-lg" href="#contato" onClick={() => track('cta_click', { location: 'hero' })}>
              Quero conhecer a solução
            </a>
            <a className="btn btn-lg" href="#precos">Ver planos</a>
          </div>
        </div>

        <div className="hero-visual">
          <CandidatesScreen />
          <div className="hero-float">
            <AssistantScreen />
          </div>
          <p className="xs muted concept-note">Tela conceitual · produto em fase de validação</p>
        </div>
      </div>
    </section>
  )
}
