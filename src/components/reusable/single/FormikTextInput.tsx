import { TextField } from '@mui/material'

interface PropsIF {
  error: string
  font?: number
  formikprops: any
}

const FormikTextInput = (props: PropsIF) => {
  const { error, formikprops, font } = props
  const fontRem = 1

  const fontSize = font ? `${fontRem * font}px` : `${fontRem * 14}px`

  const style = { style: { fontSize } }

  return (
    <TextField
      fullWidth
      size="small"
      variant="filled"
      label={formikprops.name}
      inputProps={style}
      InputLabelProps={style}
      helperText={error}
      error={Boolean(error)}
      {...formikprops} // eslint-disable-line
    />
  )
}
export { FormikTextInput }
