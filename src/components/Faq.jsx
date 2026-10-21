const faqs = [
  ['E se a nossa documentação estiver incompleta?', 'É o caso da maioria das empresas. O Mentor começa com o que existe e, a cada pergunta sem resposta, pede para quem sabe responder uma vez. A documentação melhora com o uso.'],
  ['O Mentor pode inventar respostas?', 'Ele só afirma o que encontra nas suas fontes e mostra de onde tirou. Quando não encontra, diz que não sabe e encaminha a dúvida.'],
  ['Quem consegue ver o quê?', 'Cada pessoa só recebe respostas de documentos que já poderia abrir na ferramenta original. A gestão vê o progresso das trilhas, não o conteúdo das conversas.'],
  ['Funciona com o Microsoft Teams?', 'Hoje funciona no Slack e no navegador. O Teams está no nosso planejamento.'],
  ['Quanto tempo leva para começar?', 'Conectar as fontes leva minutos. Na contratação, montamos com você a primeira trilha no mesmo dia.'],
]

export default function Faq() {
  return (
    <section>
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px 80px', paddingTop: 112, paddingBottom: 112 }}>
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 360 }}>
          <span className="kicker">Perguntas frequentes</span>
          <h2 className="h2" style={{ fontSize: 34 }}>O que costumam perguntar antes de começar.</h2>
        </div>
        <div style={{ flex: '999 1 480px', minWidth: 0, borderTop: '1px solid #E4E4E7' }}>
          {faqs.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>{q}<span className="muted" aria-hidden="true">+</span></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
