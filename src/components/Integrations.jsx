import { GoogleDrive, Notion, GitHub, Slack, FileDoc, Teams, Confluence, SharePoint } from './icons.jsx'

const items = [
  [<GoogleDrive />, 'Google Drive'],
  [<Notion />, 'Notion'],
  [<GitHub />, 'GitHub'],
  [<Slack />, 'Slack'],
  [<FileDoc />, 'PDF, Word e Markdown'],
  [<Teams />, 'Microsoft Teams'],
  [<Confluence />, 'Confluence'],
  [<SharePoint />, 'SharePoint'],
]

export default function Integrations() {
  return (
    <section style={{ borderTop: '1px solid #F0F0F2', borderBottom: '1px solid #F0F0F2' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, paddingTop: 48, paddingBottom: 48 }}>
        <p className="small muted" style={{ textAlign: 'center' }}>Aprende com as ferramentas que sua empresa já usa</p>
        <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
          {items.map(([icon, name]) => (
            <li key={name} className="intg">{icon}{name}</li>
          ))}
        </ul>
        <p className="xs muted">Zendesk também está no nosso planejamento</p>
      </div>
    </section>
  )
}
