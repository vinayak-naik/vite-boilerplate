import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
// console.log(import.meta.env.VITE_API_URL)

const rootElement = document.getElementById('root')
render(<App />, rootElement)
