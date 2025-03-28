import React from 'react'
import Navbar from '../components/Navbar'
 import HeroImg from '../components/HeroImg'
 import Footer from '../components/Footer'
import Work from '../components/Work'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import ContactMe from '../components/ContactMe'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <AboutMe/>
      <Experience/>
      <Skills/>
      <Work/>
      <Certifications/>
      <ContactMe/>
      
      <Footer/>
    </div>
  )
}

export default Home