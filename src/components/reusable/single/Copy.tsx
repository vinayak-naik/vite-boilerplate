import React from 'react'

interface PropsIF {
  children: string
}

const FormikFieldLable = (props: PropsIF) => {
  const { children } = props
  return <div>{children}</div>
}

export default FormikFieldLable
