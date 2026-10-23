import { useState } from 'react'
import { getConsent, setConsent } from '../lib/analytics.js'

export default function ConsentBanner() {
  const [visible, setVisible] = useState(() => getConsent() === null)
  if (!visible) return null

  const choose = (value) => {
    setConsent(value)
    setVisible(false)
  }

  return (
    <div className="consent" role="dialog" aria-label="Preferências de cookies">
      <p className="small">
        Usamos cookies de medição para entender como a página é utilizada e melhorar a comunicação. Você pode recusar sem prejuízo ao uso do site.
      </p>
      <div className="actions">
        <button type="button" className="btn btn-sm" onClick={() => choose('denied')}>Recusar</button>
        <button type="button" className="btn btn-sm btn-primary" onClick={() => choose('granted')}>Aceitar</button>
      </div>
    </div>
  )
}
