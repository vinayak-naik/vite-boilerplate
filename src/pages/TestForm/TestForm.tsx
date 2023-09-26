import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { Box } from '~/components/reusable/layout/Box'
import { FormikTextInput } from '~/components/reusable/single/FormikTextInput'

const TestForm = () => {
  const initialValues = {
    amount: 0,
  }

  const validationSchema = Yup.object({
    amount: Yup.number()
      .required('Please enter any amount')
      .typeError('You must specify a number')
      .min(1, 'Minimum bet amount is 1 MSCN')
      .max(1000, 'Maximum bet amount is 1000 MSCN'),
  })

  const onSubmit = async () => {}
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({ getFieldProps }) => {
          return (
            <div>
              <h1>Participate for </h1>
              <Form autoComplete="off" method="post">
                <Box flex column g={10}>
                  <FormikTextInput error="" formikprops={getFieldProps('amount')} />

                  <FormikTextInput error="" formikprops={getFieldProps('name')} />
                </Box>
              </Form>
            </div>
          )
        }}
      </Formik>
    </div>
  )
}

export default TestForm
