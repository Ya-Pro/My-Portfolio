import React from 'react'
import './portfolio.css'
import first from '../../assets/first.PNG'
import  second from '../../assets/second.PNG'
import third from '../../assets/third.PNG'
import fourth from '../../assets/fourth.PNG'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h1>Portfolio</h1>
      <div className="container portfolio__container">
        <div className="portfolio__item">
          <div className="portfolio__image">
            <img src={first} alt="" />
          </div>
          <h3>First Project</h3>
          <a href="https://github.com/Ya-Pro" targe="_blank" className='btn'>Github</a>
          <a href="https://ya-pro.github.io/First-Project/" targe="_blank" className='btn btn-primary'>Live Demo</a>
        </div>
                <div className="portfolio__item">
          <div className="portfolio__image">
            <img src={second} alt="" />
          </div>
          <h3>Nour Library</h3>
          <a href="https://github.com/Ya-Pro" targe="_blank" className='btn'>Github</a>
          <a href="https://ya-pro.github.io/Nour-library/" targe="_blank" className='btn btn-primary'>Live Demo</a>
        </div>
                <div className="portfolio__item">
          <div className="portfolio__image">
            <img src={third} alt="" />
          </div>
          <h3>Pure Soft</h3>
          <a href="https://github.com/Ya-Pro" targe="_blank" className='btn'>Github</a>
          <a href="https://ya-pro.github.io/Pure-Soft-Company/" targe="_blank" className='btn btn-primary'>Live Demo</a>
        </div>
                <div className="portfolio__item">
          <div className="portfolio__image">
            <img src={fourth} alt="" />
          </div>
          <h3>Novel Seo</h3>
          <a href="https://github.com/Ya-Pro" targe="_blank" className='btn'>Github</a>
          <a href="https://ya-pro.github.io/Novel-Seo/" targe="_blank" className='btn btn-primary'>Live Demo</a>
      </div>
      </div>
    </section>
  )
}

export default Portfolio