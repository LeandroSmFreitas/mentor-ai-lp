export default function FinalCta() {
  return (
    <section id="demo">
      <div className="wrap" style={{ paddingBottom: 96 }}>
        <div style={{ borderRadius: 28, background: '#111114', color: '#FFFFFF', padding: '88px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 28 }}>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 4.6vw, 64px)', color: '#FFFFFF', maxWidth: 820 }}>
            Dê a cada pessoa nova um mentor desde o primeiro dia.
          </h2>
          <p style={{ fontSize: 17, color: '#A1A1AA', maxWidth: 520 }}>
            Uma conversa de 30 minutos para ver o Mentor com os seus próprios documentos.
          </p>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, width: '100%', maxWidth: 520 }}>
            <label className="sr" htmlFor="cta-email">E-mail de trabalho</label>
            <input className="input input-lg" id="cta-email" type="email" placeholder="voce@empresa.com.br" style={{ flex: '1 1 260px', background: '#FFFFFF' }} />
            <button type="submit" className="btn btn-lg" style={{ background: '#FFFFFF', color: '#18181B', borderColor: '#FFFFFF' }}>
              Agendar demonstração
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
