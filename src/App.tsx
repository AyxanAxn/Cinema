import React from 'react'
import { AppRoutes } from './routes'
import { Nav } from './components/Navigation'
import { HTTP } from './core/services/http'

HTTP.createClient('api')

function App() {
  return (
    <>
      <Nav />
      <AppRoutes />
    </>
  )
}

export default App
