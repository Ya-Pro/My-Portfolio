import React from 'react'
import './header.css'
import CTA from './CTA'
import sharif from '../../assets/sharif.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Sharif Atallah</h1>
        <h5>Junior Web Developer</h5>
        <CTA />
        <div className="sharif">
          <img src={sharif} alt="sharif" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header