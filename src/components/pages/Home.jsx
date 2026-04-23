import React from 'react'
import Banner from '../layout/Banner'
import About from './About'
import Skills from '../layout/Skills'
import Services from './Services'
import Contact from '../layout/Contact'
import Project from './Projects'

const Home = () => {
  return (
    <>
    <Banner />
    <About/>
    <Skills/>
    <Services/>
    <Project/>
    <Contact/>
    </>
  )
}

export default Home