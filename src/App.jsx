import React from 'react'
import Navbar from './Components/Navbar';

//css
import './App.css'
import Home from './Components/Home/Home';
import Footer from './Components/Home/Footer'

import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact';
import Mining from './Components/Mining';
import MiningProject from './Components/MiningProject';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/mining' element={<Mining />} />
        <Route path='/mining-project' element={<MiningProject />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App