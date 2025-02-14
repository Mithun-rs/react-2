import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from "./component/Pages/About"
import Contact from "./component/Pages/Contact"
import Home from "./component/Pages/Home"
import Services from './component/Pages/Services'
const App = () => {
  return (
    <div className='App'>
     < Navbar/>
      <Routes>
      <Route path="/react-2" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
