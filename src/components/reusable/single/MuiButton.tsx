import { Button } from '@mui/material'
import React from 'react'

interface PropsIF {
  children: string
  customStyle?: React.CSSProperties

  submit?: boolean
  outlined?: boolean
  capitalize?: boolean

  h?: number
  w?: number
  font?: number
  p?: number
  px?: number
  py?: number
  m?: number
  mt?: number
  mb?: number
  ml?: number
  mr?: number

  wp?: string
  c?: string
  bg?: string
}

const MuiButton = (props: PropsIF) => {
  const fontRem = 1
  const {
    children,
    customStyle,
    submit,
    font,
    capitalize,
    outlined,
    h,
    w,
    p,
    px,
    py,
    m,
    mt,
    mb,
    ml,
    mr,
    wp,
    c,
    bg,
  } = props

  const type = submit ? 'submit' : 'button'
  const variant = outlined ? 'outlined' : 'contained'
  const fontSize = font ? `${fontRem * font}px` : `${fontRem * 14}px`
  const textTransform = capitalize ? 'capitalize' : undefined

  const width = w || wp || undefined
  const height = h || 'auto'

  const buttonStyle: React.CSSProperties = {
    padding: `${p}px` || 0,
    paddingTop: `${py}px` || 0,
    paddingBottom: `${py}px` || 0,
    paddingLeft: `${px}px` || 0,
    paddingRight: `${px}px` || 0,
    margin: `${m}px` || 0,
    marginTop: `${mt}px` || 0,
    marginBottom: `${mb}px` || 0,
    marginLeft: `${ml}px` || 0,
    marginRight: `${mr}px` || 0,
    color: c,
    backgroundColor: bg,
    height,
    width,
    fontSize,
    textTransform,
    ...customStyle,
  }

  return (
    <Button type={type} sx={buttonStyle} variant={variant}>
      {children}
    </Button>
  )
}

export default MuiButton
