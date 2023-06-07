import React from 'react'
import App from './App'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'

const Approutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<App></App>} />
        <Route path='/Home' element={<Home></Home>} />
      </Routes>
    </div>
  )
}

export default Approutes
