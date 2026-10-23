const steps = [
  ['Organize a seleção', 'A empresa define os requisitos da vaga e estrutura os critérios de avaliação dos candidatos.'],
  ['Selecione com mais critério', 'O RH utiliza a plataforma para organizar e comparar os perfis profissionais.'],
  ['Prepare o novo colaborador', 'Após a contratação, o funcionário recebe acesso aos treinamentos e conteúdos internos.'],
  ['Oriente e acompanhe', 'O colaborador consulta os materiais, acompanha seu progresso e usa o assistente de IA para esclarecer dúvidas.'],
]

export default function HowItWorks() {
  return (
    <section id="como">
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 56, paddingTop: 112, paddingBottom: 112 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640 }}>
          <span className="kicker">Como funciona</span>
          <h2 className="h2">Quatro etapas, da vaga ao colaborador preparado.</h2>
        </div>
        <ol style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: 20 }}>
          {steps.map(([title, text], i) => (
            <li key={title} className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 18, borderRadius: 18 }}>
              <span className="step-n">{i + 1}</span>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 600 }}>{title}</h3>
                <p className="muted pretty" style={{ marginTop: 8, lineHeight: 1.6 }}>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
