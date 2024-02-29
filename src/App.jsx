import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Loader from './Components/Loader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import ComingSoon from './Components/ComingSoon';

// Lazy-loaded components
const Home = lazy(() => import('./Components/Home'));
const About = lazy(() => import('./Components/About'));
const Contact = lazy(() => import('./Components/Contact'));
const Mining = lazy(() => import('./Components/Mining'));
const Project = lazy(() => import('./Components/Project'));
const MiningProject = lazy(() => import('./Components/MiningProject'));
const Construction = lazy(() => import('./Components/Construction'));
const RealEstate = lazy(() => import('./Components/RealEstate'));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate the delay before loading content
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timeout on component unmount (optional)
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/mining' element={<Mining />} />
              <Route path='/project' element={<Project />} />
              <Route path='/mining-project' element={<MiningProject />} />
              <Route path='/construction' element={<Construction />} />
              <Route path='/real-estate' element={<RealEstate />} />
              <Route path='/coming-soon' element={<ComingSoon />} />
            </Routes>
          </Suspense>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
