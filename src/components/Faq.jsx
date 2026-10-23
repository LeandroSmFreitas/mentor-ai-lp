const faqs = [
  ['Como funciona a triagem de candidatos?', 'Você define os requisitos de cada vaga e os critérios da sua empresa. A plataforma organiza os candidatos com base nesses critérios para facilitar a comparação. Ela apoia a avaliação do RH, mas a decisão de contratar continua sendo de vocês.'],
  ['É possível utilizar vídeos e materiais próprios nos treinamentos?', 'Sim. A ideia é que a empresa estruture aulas, vídeos, módulos e materiais com o seu próprio conteúdo: cultura, regras internas, ferramentas e rotinas de cada função.'],
  ['Como o novo colaborador acessa a plataforma?', 'Depois da contratação, o RH libera o acesso individual. O colaborador entra com seu próprio login e senha, acompanha os conteúdos e vê o seu progresso.'],
  ['Como funciona o assistente de inteligência artificial?', 'Ele responde às dúvidas dos colaboradores com base nos materiais internos cadastrados pela empresa. Quando não houver uma resposta confiável, a dúvida é encaminhada a um responsável.'],
  ['Qual é a diferença entre os planos Start, Pro e Enterprise?', 'O Start é a opção de entrada, com os recursos essenciais. O Pro é mais completo e inclui recursos adicionais. O Enterprise é para necessidades específicas, com configuração conversada com a nossa equipe e preço sob consulta.'],
  ['Como posso conhecer melhor a solução?', 'Preencha o formulário no fim da página. Nossa equipe entra em contato para entender a sua empresa e mostrar como a plataforma pode ajudar.'],
]

export default function Faq() {
  return (
    <section id="faq" style={{ background: '#FAFAFA', borderTop: '1px solid #F0F0F2', borderBottom: '1px solid #F0F0F2' }}>
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
