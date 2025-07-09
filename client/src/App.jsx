import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProtectdRoute from './auth/ProtectdRoute.jsx'
import AuthSuccess from './auth/AuthSuccess.jsx'
import Navbar from "./components/Navbar";
import Profile from './pages/Profile.jsx'

const App = ({ setThemeMode }) => {
  return (
    <>
      <Navbar setThemeMode={setThemeMode} />
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth-success' element={<AuthSuccess />} />
          <Route path='/dashboard' element={<ProtectdRoute> <Dashboard/> </ProtectdRoute>} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </>
  )
}

export default App
