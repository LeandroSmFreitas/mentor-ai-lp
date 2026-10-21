import { Check, Shield } from './icons.jsx'

function Ticks({ items }) {
  return (
    <ul className="ticks small">
      {items.map((t) => <li key={t}><Check size={15} />{t}</li>)}
    </ul>
  )
}

export default function Pricing() {
  return (
    <section id="precos" style={{ background: '#FAFAFA', borderTop: '1px solid #F0F0F2', borderBottom: '1px solid #F0F0F2' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 48, paddingTop: 112, paddingBottom: 112 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center', textAlign: 'center' }}>
          <span className="kicker">Preços</span>
          <h2 className="h2">Um preço simples. Sem surpresa.</h2>
          <p className="lead" style={{ fontSize: 17, maxWidth: 600 }}>
            Sem taxa de implantação e sem fidelidade. Se não fizer sentido para a sua empresa, devolvemos o valor.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: 16, maxWidth: 900, width: '100%', margin: '0 auto' }}>
          <div className="plan" style={{ borderColor: '#18181B', boxShadow: '0 0 0 1px #18181B, 0 24px 48px -20px rgb(24 24 27 / .25)' }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600 }}>Equipe</h3>
              <p className="small muted" style={{ marginTop: 4 }}>Para equipes de até 30 pessoas</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontSize: 44, fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1 }}>R$ 497</span>
              <span className="muted">por mês</span>
            </div>
            <Ticks items={['Mentor no Slack e no navegador', 'Google Drive, Notion, GitHub e Slack', 'Trilhas de onboarding ilimitadas', 'Configuração assistida, sem custo extra']} />
            <a className="btn btn-primary btn-lg btn-block" href="#" style={{ marginTop: 'auto' }}>Assinar agora</a>
            <p className="xs muted" style={{ textAlign: 'center' }}>Pix, cartão ou boleto · Cancele quando quiser</p>
          </div>

          <div className="plan">
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600 }}>Empresa</h3>
              <p className="small muted" style={{ marginTop: 4 }}>Para quem precisa de mais controle</p>
            </div>
            <div><span style={{ fontSize: 36, fontWeight: 600, letterSpacing: '-0.03em' }}>Sob consulta</span></div>
            <Ticks items={['Tudo do plano Equipe, para mais de 30 pessoas', 'SAML, SCIM e auditoria avançada', 'Banco de dados dedicado']} />
            <a className="btn btn-lg btn-block" href="#demo" style={{ marginTop: 'auto' }}>Falar com a gente</a>
          </div>
        </div>

        <div className="well" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px 24px', maxWidth: 900, width: '100%', margin: '0 auto', padding: '20px 24px', background: '#FFFFFF' }}>
          <span style={{ flex: 'none', width: 40, height: 40, borderRadius: 12, background: '#EEF2FE', color: '#2742BF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield />
          </span>
          <div style={{ flex: '1 1 320px' }}>
            <div style={{ fontWeight: 600 }}>Garantia de reembolso</div>
            <p className="small ink2 pretty" style={{ marginTop: 2, lineHeight: 1.6 }}>
              Teste por 30 dias. Se o Mentor não fizer sentido para a sua empresa, devolvemos 100% do valor, sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
