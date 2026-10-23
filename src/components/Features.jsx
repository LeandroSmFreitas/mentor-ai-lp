import { Users, Book, Chat } from './icons.jsx'

const features = [
  {
    icon: <Users size={22} />,
    title: 'Triagem inteligente de candidatos',
    text: 'Organize o processo seletivo a partir dos requisitos de cada vaga e dos critérios da sua empresa. Compare perfis lado a lado e direcione o esforço do RH para as avaliações que importam.',
    benefit: 'Menos esforço manual na triagem, com uma seleção mais estruturada. A decisão final continua sendo de quem contrata.',
  },
  {
    icon: <Book size={22} />,
    title: 'Treinamento e integração',
    text: 'Monte aulas, vídeos e módulos com o conhecimento da sua empresa: cultura, regras internas, ferramentas e rotinas da função. Após a contratação, o colaborador acessa tudo com login próprio e acompanha seu progresso.',
    benefit: 'Menos dependência de explicações individuais e uma integração mais consistente.',
  },
  {
    icon: <Chat size={22} />,
    title: 'Assistente de inteligência artificial',
    text: 'O colaborador pergunta como fazer algo, onde encontrar um documento ou qual é a regra para uma atividade. A IA responde com base nos materiais cadastrados pela empresa e encaminha a dúvida a um responsável quando não houver resposta confiável.',
    benefit: 'Acesso mais fácil ao conhecimento interno, sem interromper gestores e colegas a todo momento.',
  },
]

export default function Features() {
  return (
    <section id="funcionalidades" style={{ background: '#FAFAFA', borderTop: '1px solid #F0F0F2', borderBottom: '1px solid #F0F0F2' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 56, paddingTop: 112, paddingBottom: 112 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 720 }}>
          <span className="kicker">Funcionalidades</span>
          <h2 className="h2">Da seleção à preparação do colaborador, em um só lugar.</h2>
          <p className="lead" style={{ fontSize: 17 }}>
            Não é só um sistema de recrutamento, nem só uma plataforma de cursos. A solução conecta a contratação ao que vem depois dela.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 20 }}>
          {features.map((f) => (
            <div key={f.title} className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16, borderRadius: 18 }}>
              <span style={{ width: 44, height: 44, borderRadius: 12, background: '#EEF2FE', color: '#2742BF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                {f.icon}
              </span>
              <h3 style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-0.01em' }}>{f.title}</h3>
              <p className="muted pretty" style={{ lineHeight: 1.6 }}>{f.text}</p>
              <p className="small pretty" style={{ lineHeight: 1.6, marginTop: 'auto', paddingTop: 16, borderTop: '1px solid #EFEFF1', color: '#18181B', fontWeight: 500 }}>
                {f.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
