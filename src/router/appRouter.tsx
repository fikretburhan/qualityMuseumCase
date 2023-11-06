import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import ProjectList from '../features/projectList'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectList />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter