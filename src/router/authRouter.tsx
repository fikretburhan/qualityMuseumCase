import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from '../features/auth/Components/login'
import Signup from '../features/auth/Components/signup'

const AuthRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
  )
}


export default AuthRouter