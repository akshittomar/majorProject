import { useState } from 'react'
import './App.css'
import Home from '../src/components/Home'
import Navbar from '../src/components/Navbar'
import About from './components/About'
import CropGuide from './components/CropGuide'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  

  return (
    <div style={{overflow:"hidden"}}  >
      <Router>
    <Navbar></Navbar>
    <Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/about' element={<About/>}/>
  <Route exact path='/cropguide' element={<CropGuide/>}/>
    </Routes>
    </Router>
    </div>
  )
}

export default App
