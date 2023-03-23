import React from 'react'
import Header from './componnets/header/Header'
import Nav from './componnets/nav/Nav'
import About from './componnets/about/About'
import Experience from './componnets/experience/Experience'
import Services from './componnets/services/Services'
import Portfolio from './componnets/portfolio/Portfolio'
import Testi from './componnets/testimoniols/Testi'
import Contact from './componnets/contact/Contact'
import Footer from './componnets/footer/Footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testi />
        <Contact />
        <Footer />
    </>
  )
}

export default App