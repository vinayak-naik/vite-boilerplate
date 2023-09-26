import React from 'react'

import { Box } from '~/components/reusable/layout/Box'
import MuiButton from '~/components/reusable/single/MuiButton'
import { Text } from '~/components/reusable/single/text'

import TestForm from './TestForm'

const HomePage = () => {
  return (
    <div>
      <Box flex column blue p={20} bb={6} bc="lightgrey">
        <Text bold>text</Text>
        <MuiButton capitalize>test button</MuiButton>
      </Box>
      <TestForm />
    </div>
  )
}

export default HomePage
