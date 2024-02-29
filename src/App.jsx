import React, { useState, useEffect, lazy, Suspense } from 'react';

//components
import ComingSoon from './Components/ComingSoon';
import Footer from './Components/Footer';
import Loader from './Components/Loader';
import Navbar from './Components/Navbar';

//css
import './App.css';

//routes
import { Route, Routes } from 'react-router-dom';

//bootstrap-css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

// Lazy-loaded components
const Home = lazy(() => import('./Components/Home'));
const About = lazy(() => import('./Components/About'));
const Contact = lazy(() => import('./Components/Contact'));
const Mining = lazy(() => import('./Components/Mining'));
const Project = lazy(() => import('./Components/Project'));
const MiningProject = lazy(() => import('./Components/MiningProject'));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

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
              <Route path='/coming-soon' element={<ComingSoon />} />
              <Route path='/coming-soon' element={<ComingSoon />} />
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
