interface PropsIF {
  children: string
  customStyle?: React.CSSProperties

  c?: string
  bg?: string

  font?: number
  m?: number
  p?: number

  center?: boolean
  right?: boolean
  bold?: boolean
  capitalize?: boolean
  pointer?: boolean
}

const Text = (props: PropsIF) => {
  const {
    children,
    customStyle,
    c,
    bg,
    center,
    right,
    font,
    bold,
    capitalize,
    pointer,
    m,
    p,
  } = props
  const fontRem = 1

  const fontSize = font ? `${fontRem * font}px` : `${fontRem * 14}px`
  const fontWeight = bold ? 'bold' : undefined
  const textTransform = capitalize ? 'capitalize' : undefined
  const cursor = pointer ? 'pointer' : undefined
  const textAlign = center ? 'center' : right ? 'right' : 'left'
  const margin = m || 0
  const padding = p || 0

  const textStyles: React.CSSProperties = {
    color: c,
    backgroundColor: bg,
    fontSize,
    fontWeight,
    textTransform,
    cursor,
    textAlign,
    margin,
    padding,
    width: '100%',
    ...customStyle,
  }

  return <p style={textStyles}>{children}</p>
}
export { Text }
