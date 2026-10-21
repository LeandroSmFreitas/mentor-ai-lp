const MARK_PATH = 'M5 18V7.5a.5.5 0 0 1 .85-.35L12 13.3l6.15-6.15a.5.5 0 0 1 .85.35V18'

export function Mark({ box, icon = 12, strokeWidth = 2.8, style }) {
  const boxStyle = box ? { width: box, height: box, ...style } : style
  return (
    <span className="mark" style={boxStyle}>
      <svg width={icon} height={icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d={MARK_PATH} stroke="#FFFFFF" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export function Check({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#3355E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12 5 5 9-10" />
    </svg>
  )
}

export function GoogleDrive({ width = 22, height = 20 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 87.3 78" aria-hidden="true">
      <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066DA" />
      <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0-1.2 4.5h27.5z" fill="#00AC47" />
      <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#EA4335" />
      <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832D" />
      <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684FC" />
      <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#FFBA00" />
    </svg>
  )
}

export function Notion({ size = 22, strokeWidth = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#FFFFFF" stroke="#18181B" strokeWidth={strokeWidth} />
      <path d="M8 17V7h1.4l5.2 7.4V7H16v10h-1.4L9.4 9.6V17z" fill="#18181B" />
    </svg>
  )
}

export function GitHub({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <path fill="#18181B" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

export function Slack({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="9" width="9" height="4" rx="2" fill="#36C5F0" />
      <rect x="7" y="4" width="4" height="4" rx="2" fill="#36C5F0" />
      <rect x="11" y="2" width="4" height="9" rx="2" fill="#2EB67D" />
      <rect x="16" y="7" width="4" height="4" rx="2" fill="#2EB67D" />
      <rect x="13" y="11" width="9" height="4" rx="2" fill="#ECB22E" />
      <rect x="13" y="16" width="4" height="4" rx="2" fill="#ECB22E" />
      <rect x="9" y="13" width="4" height="9" rx="2" fill="#E01E5A" />
      <rect x="4" y="13" width="4" height="4" rx="2" fill="#E01E5A" />
    </svg>
  )
}

export function FileDoc() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3F3F46" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  )
}

export function Teams() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#5059C9" />
      <circle cx="16.5" cy="8" r="2.2" fill="#FFFFFF" fillOpacity=".85" />
      <rect x="6" y="7.5" width="9" height="2.6" rx="1" fill="#FFFFFF" />
      <rect x="9.2" y="7.5" width="2.6" height="9" rx="1" fill="#FFFFFF" />
    </svg>
  )
}

export function Confluence() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#1868DB" />
      <path d="M5.5 15.2c1.1-1.8 2.2-2.6 3.8-2.6 2.9 0 3.5 2.2 6.6 2.2 1.1 0 2.1-.4 2.9-1.2v2.6c-.9.7-1.9 1.1-3.1 1.1-3 0-3.6-2.1-6.4-2.1-1.1 0-2 .6-2.9 1.6z" fill="#FFFFFF" />
      <path d="M18.5 8.8c-1.1 1.8-2.2 2.6-3.8 2.6-2.9 0-3.5-2.2-6.6-2.2-1.1 0-2.1.4-2.9 1.2V7.8c.9-.7 1.9-1.1 3.1-1.1 3 0 3.6 2.1 6.4 2.1 1.1 0 2-.6 2.9-1.6z" fill="#FFFFFF" fillOpacity=".8" />
    </svg>
  )
}

export function SharePoint() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9.5" cy="9" r="6.5" fill="#036C70" />
      <circle cx="15.5" cy="14" r="5.5" fill="#1A9BA1" />
      <circle cx="10.5" cy="18" r="4" fill="#37C6D0" />
      <rect x="2.5" y="7" width="9" height="9" rx="2" fill="#03787C" />
      <path d="M8.4 14.4c-.5.3-1.1.4-1.7.4-1 0-1.6-.4-1.9-.9l.7-.7c.3.4.7.6 1.2.6.5 0 .8-.2.8-.5 0-.8-2.6-.4-2.6-2.2 0-1 .8-1.6 1.9-1.6.6 0 1.2.2 1.6.6l-.6.7c-.3-.3-.6-.4-1-.4-.4 0-.7.2-.7.5 0 .8 2.6.4 2.6 2.2 0 .4-.1.8-.3 1.1z" fill="#FFFFFF" />
    </svg>
  )
}

export function Shield({ size = 20, stroke = 'currentColor', strokeWidth = 1.7 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 5 6v5.5c0 4.2 2.9 7.9 7 9.5 4.1-1.6 7-5.3 7-9.5V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function ArrowDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  )
}
