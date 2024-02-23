import React from 'react'
import Navbar from './Components/Navbar';

//css
import './App.css'
import Home from './Components/Home';
import Footer from './Components/Footer'

import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Mining from './Components/Mining';
import MiningProject from './Components/MiningProject';
import Project from './Components/Project';
import Construction from './Components/Construction';
import RealEstate from './Components/RealEstate';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/mining' element={<Mining />} />
        <Route path='/project' element={<Project />} />
        <Route path='/mining-project' element={<MiningProject />} />
        <Route path='/construction' element={<Construction />} />
        <Route path='/real-estate' element={<RealEstate />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App