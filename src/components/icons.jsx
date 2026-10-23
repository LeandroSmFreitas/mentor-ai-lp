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

function Icon({ size = 20, stroke = 'currentColor', strokeWidth = 1.7, children }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

export const Check = ({ size = 16 }) => (
  <Icon size={size} stroke="#3355E8" strokeWidth={2}><path d="m5 12 5 5 9-10" /></Icon>
)

export const Users = (p) => (
  <Icon {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.6-3.4 3.2-5.5 6.5-5.5s5.9 2.1 6.5 5.5" /><path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c1.9.7 3.1 2.4 3.5 5.2" /></Icon>
)

export const Book = (p) => (
  <Icon {...p}><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z" /><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z" /></Icon>
)

export const Chat = (p) => (
  <Icon {...p}><path d="M20 12a8 8 0 0 1-11.7 7.1L4 20l1-4A8 8 0 1 1 20 12z" /><path d="M9 11h6M9 14h3.5" /></Icon>
)

export const ArrowRight = (p) => (
  <Icon size={16} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>
)
