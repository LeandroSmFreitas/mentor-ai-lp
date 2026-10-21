const pains = [
  ['Seniores interrompidos o dia todo', '“Com quem eu pego esse acesso?”, “onde fica tal documento?”. As mesmas perguntas, para as mesmas pessoas, a cada contratação.'],
  ['Novatos travados fora do horário', 'Meia-noite, um erro no ambiente e ninguém para perguntar. O trabalho espera até alguém ter tempo no dia seguinte.'],
  ['Gestão sem visibilidade', 'Ninguém sabe ao certo o que falta para a pessoa nova ficar produtiva, nem em qual passo o onboarding sempre emperra.'],
]

export default function Problem() {
  return (
    <section>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 56, paddingTop: 120, paddingBottom: 120 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 80px', alignItems: 'flex-end' }}>
          <h2 className="display" style={{ flex: '1 1 520px', fontSize: 'clamp(36px, 4.4vw, 60px)' }}>
            Toda contratação tem um custo que não aparece na planilha.
          </h2>
          <p className="lead" style={{ flex: '1 1 360px', maxWidth: 460 }}>
            Quem chega passa semanas descobrindo como as coisas funcionam. Quem já está para o próprio trabalho para explicar. E o conhecimento continua na cabeça de poucas pessoas.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 40 }}>
          {pains.map(([title, text]) => (
            <div key={title} className="pain">
              <h3 style={{ fontSize: 18, fontWeight: 600 }}>{title}</h3>
              <p className="muted pretty" style={{ lineHeight: 1.6 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
