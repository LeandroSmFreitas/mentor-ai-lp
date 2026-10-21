const areas = [
  ['Engenharia', ['Como funciona o deploy?', 'Onde vejo os logs de produção?']],
  ['Vendas', ['Qual o desconto máximo que posso dar?', 'Onde está o modelo de proposta?']],
  ['Atendimento', ['Como faço um reembolso?', 'Quando escalo para o N2?']],
  ['Marketing e People', ['Qual é o tom de voz da marca?', 'Como peço férias?']],
]

export default function Areas() {
  return (
    <section id="areas" style={{ background: '#FAFAFA', borderTop: '1px solid #F0F0F2', borderBottom: '1px solid #F0F0F2' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 48, paddingTop: 112, paddingBottom: 112 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 680 }}>
          <span className="kicker">Para cada área</span>
          <h2 className="h2">Não é só para quem programa.</h2>
          <p className="lead" style={{ fontSize: 17 }}>Qualquer time com processos para aprender e pessoas novas chegando.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 16 }}>
          {areas.map(([name, questions]) => (
            <div key={name} className="area">
              <h3 style={{ fontSize: 17, fontWeight: 600 }}>{name}</h3>
              {questions.map((q) => <span key={q} className="q">{q}</span>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
