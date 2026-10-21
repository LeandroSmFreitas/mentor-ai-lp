import { Mark, Check, ArrowDown } from './icons.jsx'

function Feature({ reverse, kicker, title, text, ticks, children }) {
  return (
    <div className="feat" style={reverse ? { flexDirection: 'row-reverse' } : undefined}>
      <div className="feat-copy">
        <span className="kicker">{kicker}</span>
        <h2 className="h2">{title}</h2>
        <p className="lead" style={{ fontSize: 17 }}>{text}</p>
        {ticks && (
          <ul className="ticks">
            {ticks.map((t) => <li key={t}><Check />{t}</li>)}
          </ul>
        )}
      </div>
      <div className="feat-vis" aria-hidden="true">{children}</div>
    </div>
  )
}

const userBubble = { alignSelf: 'flex-end', background: '#F4F4F5', padding: '9px 13px', borderRadius: '12px 12px 4px 12px', fontSize: 14 }

function SourcedAnswer() {
  return (
    <div className="card raised" style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14, borderRadius: 16 }}>
      <div style={userBubble}>como rodo os testes de integração?</div>
      <div style={{ fontSize: 14, lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <p>
          Suba o Postgres e o Redis no Docker e rode a suíte da API{' '}
          <span className="chip accent" style={{ height: 18, padding: '0 5px', fontSize: 11 }}>1</span>
        </p>
        <div className="mono" style={{ background: '#18181B', color: '#F4F4F5', borderRadius: 10, padding: '12px 14px', whiteSpace: 'pre-line', lineHeight: 1.7 }}>
          {'docker compose up -d db redis\npnpm --filter api test:integration'}
        </div>
        <div className="xs muted">1 · README de acme/api › Testes (GitHub)</div>
      </div>
    </div>
  )
}

function DailyDigest() {
  return (
    <div className="card raised" style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12, borderRadius: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Mark box={24} />
        <strong style={{ fontWeight: 600, fontSize: 14 }}>Mentor</strong>
        <span className="xs muted">9:00</span>
      </div>
      <p style={{ fontSize: 14 }}>Bom dia, Lucas. Seu 3º dia — três coisas para hoje:</p>
      <div className="card rows" style={{ overflow: 'hidden', borderRadius: 12 }}>
        {[['Pedir acesso à AWS', 'aprovação de Maria Lima', 'Já pedi'], ['Subir o ambiente local', 'ajuda de Rafael Alves', 'Feito']].map(([t, m, b]) => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 500, fontSize: 13.5 }}>{t}</div>
              <div className="xs muted">{m}</div>
            </div>
            <span className="btn btn-sm">{b}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function KnowledgeLoop() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div className="card" style={{ padding: '14px 16px', display: 'flex', justifyContent: 'space-between', gap: 12, borderRadius: 14 }}>
        <div>
          <div style={{ fontWeight: 500 }}>Qual a política de rotação das chaves da AWS?</div>
          <div className="xs muted" style={{ marginTop: 2 }}>Engenharia · perguntada 4 vezes</div>
        </div>
        <span className="status warn">Aberta</span>
      </div>
      <div className="small muted" style={{ display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 16 }}>
        <ArrowDown />Encaminhada para Maria Lima
      </div>
      <div className="card raised" style={{ padding: '14px 16px', display: 'flex', justifyContent: 'space-between', gap: 12, borderRadius: 14 }}>
        <div>
          <div style={{ fontWeight: 500 }}>Resposta publicada</div>
          <div className="xs muted" style={{ marginTop: 2 }}>Nova fonte do Mentor · 4 pessoas avisadas</div>
        </div>
        <span className="status ok">Resolvida</span>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 120, paddingTop: 120, paddingBottom: 120 }}>
        <Feature
          kicker="Respostas com fonte"
          title="Pergunte como perguntaria a um colega."
          text="O Mentor responde com base nos documentos da sua empresa e mostra de onde tirou cada informação. Quando não sabe, ele diz que não sabe."
          ticks={['Só usa o que a pessoa tem permissão para ver', 'Funciona no Slack e no navegador', 'Indica quem procurar quando precisa de uma pessoa']}
        >
          <SourcedAnswer />
        </Feature>
        <Feature
          reverse
          kicker="Trilhas de onboarding"
          title="O Mentor puxa a conversa. Ninguém precisa lembrar."
          text="Cada cargo tem uma trilha com passos, responsáveis e prazos. Todo dia a pessoa nova sabe o que fazer, e quem libera o acesso é avisado antes de virar atraso."
          ticks={['Resumo diário no Slack, uma mensagem só', 'Lembretes para os responsáveis por cada acesso', 'Modelos prontos para Engenharia, Vendas e Atendimento']}
        >
          <DailyDigest />
        </Feature>
        <Feature
          kicker="Conhecimento que cresce"
          title="Cada dúvida sem resposta vira documentação."
          text="Quando a resposta não existe, o Mentor encaminha a pergunta para quem sabe. A pessoa responde uma vez, e a próxima pessoa que perguntar já recebe a resposta."
        >
          <KnowledgeLoop />
        </Feature>
      </div>
    </section>
  )
}
