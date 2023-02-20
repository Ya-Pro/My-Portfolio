import React from 'react'
import './footer.css'
import {CiFacebook,CiLinkedin} from "react-icons/ci"
import {FiPhone} from 'react-icons/fi'
const Footer = () => {
  return (
    <section id='footer'>
      <footer className=' footer__container'>
        <a href="#header" className='footer__logo'>Sharif</a>
        <ul className="permalinks">
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><CiFacebook/></a>
          <a href="https://linkedin.com" target="_blank" rel='noreferrer'><CiLinkedin/></a>
          <a href="tel:01012227045" target="_blank" rel="noreferrer" ><FiPhone/></a>
        </div>
      </footer>
    </section>
  )
}

export default Footer