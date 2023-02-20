import React from 'react'
import './about.css'
import sharif from '../../assets/sharif.png'
import { TbAward } from 'react-icons/tb'
import {FaUsers} from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h1>About me</h1>
      {/* the container of about  */}
      <div className="container about__container">
        {/* the image of  me */}
        <div className="about__me">
          <div className="about__me___img">
            <img src={sharif} alt="sharif" />
          </div>
        </div>
        {/* the about__content of sharif */}
        <div className="about__content">
        <div className="about__cards">
            <div className="about__card">
              <TbAward className='about__icon' />
              <h5>Experience</h5>
              <h6>+1 month working</h6>
            </div>
                <div className="about__card">
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <h6>5+ worldwide</h6>
            </div>
                <div className="about__card">
              <FaUsers className='about__icon' />
              <h5>Projects</h5>
              <h6>8+ Completed</h6>
          </div>
          </div>
          <p>Hello Guys, In this about section I will tell you about myself in a glimpse. My name is Sharif Tarek Atallah I'm a mechanical engineer for 5 years and I have a bit of knowledge about videos and photos editing and now I'm deep into the web developing field</p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About