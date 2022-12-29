import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Feed from './pages/Feed'

const App = () => {
  return (
    <div className='bg-gray-100'>
      <Routes>
        <Route path='/*' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App