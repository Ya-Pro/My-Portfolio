import React from 'react'
import {About , Contact, Experience,Footer, Header, Nav, Testimonials,Services,Portfolio} from './components/component'
const App = () => {
  return (
      <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/> 
      <Footer/>
      </>
  )
}

export default App