import React from 'react'
import Navbar from './Components/Navbar';

//css
import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Testimonial from './Components/Testimonial';
import Video from './Components/Video';
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Work/>
      <Contact/>
      <Testimonial/>
      <Video/>
      <Footer/>
    </>
  )
}

export default App