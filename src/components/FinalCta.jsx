import { useState } from 'react'
import { submitLead } from '../lib/leads.js'
import { track } from '../lib/analytics.js'

const sizes = ['1 a 10', '11 a 50', '51 a 200', '201 a 500', 'Mais de 500']
const needs = [['contratacao', 'Contratação'], ['treinamento', 'Treinamento'], ['ambos', 'Ambos']]
const planOptions = [['', 'Ainda não sei'], ['start', 'Start'], ['pro', 'Pro'], ['enterprise', 'Enterprise']]

export default function FinalCta({ plan, onPlanChange }) {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data.website) return // honeypot: bots preenchem este campo

    setStatus('sending')
    setError('')
    try {
      await submitLead({
        nome: data.nome.trim(),
        email: data.email.trim(),
        empresa: data.empresa.trim(),
        colaboradores: data.colaboradores,
        necessidade: data.necessidade,
        plano: data.plano || null,
      })
      track('lead_submit', { plan: data.plano || 'nenhum', need: data.necessidade })
      form.reset()
      setStatus('sent')
    } catch (err) {
      setStatus('error')
      setError(
        import.meta.env.DEV && err.message === 'endpoint_not_configured'
          ? 'O formulário ainda não está conectado a um destino. Configure VITE_LEADS_ENDPOINT.'
          : 'Não foi possível enviar agora. Tente novamente em instantes.',
      )
    }
  }

  return (
    <section id="contato">
      <div className="wrap" style={{ paddingBottom: 96 }}>
        <div className="final-cta" style={{ borderRadius: 28, background: '#111114', color: '#FFFFFF', padding: '88px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20 }}>
          <h2 className="display" style={{ fontSize: 'clamp(34px, 4.4vw, 58px)', color: '#FFFFFF', maxWidth: 820 }}>
            Sua empresa pode contratar com mais critério e preparar melhor sua equipe.
          </h2>
          <p style={{ fontSize: 17, color: '#A1A1AA', maxWidth: 560 }}>
            Conheça uma nova forma de organizar a seleção, os treinamentos e as orientações dos seus colaboradores.
          </p>

          {status === 'sent' ? (
            <div role="status" style={{ marginTop: 16, padding: '24px 28px', borderRadius: 16, background: '#1B1B1F', border: '1px solid #2A2A30', maxWidth: 520 }}>
              <strong style={{ fontSize: 18, fontWeight: 600 }}>Recebemos o seu contato.</strong>
              <p style={{ marginTop: 6, color: '#A1A1AA', lineHeight: 1.6 }}>Nossa equipe vai falar com você em breve, no e-mail informado.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="lead-form" noValidate={false}>
              <div className="field">
                <label className="label" htmlFor="f-nome">Nome</label>
                <input className="input input-lg" id="f-nome" name="nome" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label className="label" htmlFor="f-email">E-mail profissional</label>
                <input className="input input-lg" id="f-email" name="email" type="email" autoComplete="email" placeholder="voce@empresa.com.br" required />
              </div>
              <div className="field">
                <label className="label" htmlFor="f-empresa">Empresa</label>
                <input className="input input-lg" id="f-empresa" name="empresa" type="text" autoComplete="organization" required />
              </div>
              <div className="field">
                <label className="label" htmlFor="f-colab">Colaboradores (aprox.)</label>
                <select className="select input-lg" id="f-colab" name="colaboradores" required defaultValue="">
                  <option value="" disabled>Selecione</option>
                  {sizes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="field">
                <label className="label" htmlFor="f-need">Principal necessidade</label>
                <select className="select input-lg" id="f-need" name="necessidade" required defaultValue="">
                  <option value="" disabled>Selecione</option>
                  {needs.map(([v, l]) => <option key={v} value={l}>{l}</option>)}
                </select>
              </div>
              <div className="field">
                <label className="label" htmlFor="f-plano">Plano de interesse</label>
                <select className="select input-lg" id="f-plano" name="plano" value={plan} onChange={(e) => onPlanChange(e.target.value)}>
                  {planOptions.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </div>

              <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: -9999, width: 1, height: 1, opacity: 0 }} />

              <button type="submit" className="btn btn-lg full" disabled={status === 'sending'} style={{ background: '#FFFFFF', color: '#18181B', borderColor: '#FFFFFF' }}>
                {status === 'sending' ? 'Enviando…' : 'Quero conhecer a solução'}
              </button>
              {status === 'error' && <p role="alert" className="full small" style={{ color: '#FCA5A5' }}>{error}</p>}
              <p className="full xs" style={{ color: '#8A8A93' }}>
                Usamos seus dados apenas para entrar em contato sobre a solução.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
