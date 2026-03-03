import React from 'react'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import Footer from './components/Footer'
import Contact from './components/Contact'
const App = () => {
  return (
    <>
      <Navbar />
      <HeroSec />
      <AboutSection />
      <ProjectSection />
      <Contact />
      <Footer />
    </>
  )
}

export default App