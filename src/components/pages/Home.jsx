import React from 'react'
import Banner from '../layout/Banner'
import About from './About'
import Skills from '../layout/Skills'
import Services from './Services'
import Contact from '../layout/Contact'

const Home = () => {
  return (
    <>
    <Banner />
    <About/>
    <Skills/>
    <Services/>
    <Contact/>
    </>
  )
}

export default Home