import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProtectdRoute from './auth/ProtectdRoute.jsx'
import AuthSuccess from './auth/AuthSuccess.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/auth-success' element={<AuthSuccess />} />
        <Route path='/dashboard' element={<ProtectdRoute> <Dashboard/> </ProtectdRoute>} />
      </Routes>
    </div>
  )
}

export default App
