interface PropsIF {
  children?: string | JSX.Element | JSX.Element[]
  customStyle?: React.CSSProperties

  flex?: boolean
  left?: boolean
  right?: boolean
  column?: boolean
  between?: boolean
  alignStart?: boolean
  alignEnd?: boolean
  wrap?: boolean
  wrapReverse?: boolean
  pointer?: boolean
  red?: boolean
  green?: boolean
  blue?: boolean

  c?: string
  bg?: string
  bc?: string

  h?: number
  hvh?: number
  w?: number
  wp?: number
  g?: number
  p?: number
  pt?: number
  pb?: number
  pl?: number
  pr?: number
  m?: number
  ml?: number
  mr?: number
  mt?: number
  mb?: number
  br?: number
  brtl?: number
  brtr?: number
  brt?: number
  brbl?: number
  brbr?: number
  brb?: number
  b?: number
  bt?: number
  bb?: number
  bl?: number
  font?: number
}

const Box = (props: PropsIF) => {
  const {
    children,
    customStyle,

    flex,
    left,
    right,
    column,
    between,
    alignStart,
    alignEnd,
    wrap,
    wrapReverse,
    pointer,
    red,
    green,
    blue,

    c,
    bg,
    h,
    hvh,
    w,
    wp,
    bc,

    g,
    p,
    pt,
    pb,
    pl,
    pr,
    m,
    ml,
    mr,
    mt,
    mb,
    br,
    brtl,
    brtr,
    brt,
    brbl,
    brbr,
    brb,
    b,
    bt,
    bb,
    bl,
    font,
  } = props
  const fontRem = 1
  const justifyContent = left ? 'flex-start' : right ? 'flex-end' : between ? 'space-between' : 'center'; // prettier-ignore
  const alignItems = alignStart ? 'flex-start' : alignEnd ? 'flex-end' : 'center'; // prettier-ignore
  const flexDirection = column ? 'column' : undefined
  const flexWrap = wrap ? 'wrap' : wrapReverse ? 'wrap-reverse' : undefined
  const width = w ? `${w}px` : wp ? `${wp}%` : '100%'
  const height = h ? `${h}px` : hvh ? `${hvh}vh` : undefined
  const cursor = pointer ? 'pointer' : undefined
  const fontSize = font ? `${fontRem * font}px` : `${fontRem * 14}px`
  const borderRadius: React.CSSProperties = {
    borderTopLeftRadius: brtl || brt || br || undefined,
    borderTopRightRadius: brtr || brt || br || undefined,
    borderBottomLeftRadius: brbl || brb || br || undefined,
    borderBottomRightRadius: brbr || brb || br || undefined,
  }
  const border = b ? `${b}px solid ${bc || 'black'}` : undefined
  const borderTop = bt ? `${bt}px solid ${bc || 'black'}` : border // prettier-ignore
  const borderBottom = bb ? `${bb}px solid ${bc || 'black'}` : border // prettier-ignore
  const borderLeft = bl ? `${bl}px solid ${bc || 'black'}` : border // prettier-ignore

  const backgroundColor =
    bg || red ? 'red' : green ? 'green' : blue ? 'lightblue' : undefined

  const borderStyles: React.CSSProperties = {
    border,
    borderLeft,
    borderTop,
    borderBottom,
  }
  const marginStyles: React.CSSProperties = {
    margin: `${m}px`,
    marginLeft: `${ml}px`,
    marginRight: `${mr}px`,
    marginTop: `${mt}px`,
    marginBottom: `${mb}px`,
  }

  const flexStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent,
    flexDirection,
    alignItems,
    flexWrap,
    gap: `${g}px`,
  }
  const flexBoxStyles = flex ? flexStyles : {}

  const boxStyle: React.CSSProperties = {
    height,
    width,
    fontSize,
    padding: `${p}px`,
    paddingTop: `${pt}px`,
    paddingBottom: `${pb}px`,
    paddingLeft: `${pl}px`,
    paddingRight: `${pr}px`,

    color: c,
    backgroundColor,
    cursor,
    ...marginStyles,
    ...borderStyles,
    ...borderRadius,
    ...flexBoxStyles,
    ...customStyle,
  }

  return <div style={boxStyle}>{children || <></>}</div>
}

export { Box }
