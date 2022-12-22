import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './component/NavBar'
import Contact from './pages/Contact'
import Project from './pages/Project'
import About from './pages/About'

const App = () => {
  return (
    <div className='w-full h-screen relative bg-lightBlack'>
      <NavBar />
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about-me' element={<About />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </div>
  )
}

export default App