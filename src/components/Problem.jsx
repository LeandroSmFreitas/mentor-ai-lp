const pains = [
  ['Contratações demoradas e pouco organizadas', 'A triagem manual e a ausência de critérios bem definidos podem dificultar a comparação entre candidatos e tornar o processo seletivo mais trabalhoso.'],
  ['Treinamentos que dependem de outras pessoas', 'Gestores e funcionários precisam interromper suas atividades para explicar repetidamente as mesmas tarefas, regras e procedimentos.'],
  ['Novos colaboradores sem orientação estruturada', 'Quando não existe um processo de integração bem definido, o funcionário pode ter dificuldade para compreender as rotinas e executar suas atividades com segurança.'],
  ['Dúvidas recorrentes no dia a dia', 'Informações espalhadas em documentos e conversas dificultam o acesso às respostas e aumentam a dependência dos gestores.'],
]

export default function Problem() {
  return (
    <section>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 56, paddingTop: 112, paddingBottom: 112 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 720 }}>
          <span className="kicker">O problema</span>
          <h2 className="display" style={{ fontSize: 'clamp(34px, 4.2vw, 56px)' }}>
            Tempo demais gasto com o que poderia estar organizado.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: 40 }}>
          {pains.map(([title, text]) => (
            <div key={title} className="pain">
              <h3 style={{ fontSize: 18, fontWeight: 600 }}>{title}</h3>
              <p className="muted pretty" style={{ lineHeight: 1.6 }}>{text}</p>
            </div>
          ))}
        </div>
        <p className="lead" style={{ maxWidth: 760, color: '#18181B', fontWeight: 500 }}>
          Sua equipe precisa produzir, não perder tempo repetindo explicações e reorganizando processos que poderiam estar estruturados.
        </p>
      </div>
    </section>
  )
}
