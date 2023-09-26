import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import TestFormPage from '~/pages/TestForm'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/test-form" Component={TestFormPage} />
      <Route path="/" element={<Navigate to="/test-form" replace />} />
    </Routes>
  )
}
export default AppRoutes
