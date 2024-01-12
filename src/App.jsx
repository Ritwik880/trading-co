import React from 'react'
import Navbar from './Components/Navbar';

//css
import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import Team from './Components/Team';
import Timeline from './Components/Timeline';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Timeline/>
      <Team/>
      <Footer/>
    </>
  )
}

export default App