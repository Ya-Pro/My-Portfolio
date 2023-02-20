import React from 'react'
import './services.css'
import {BsCheck2Circle}  from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>Hire me now</h5>
      <h1>My-Services</h1>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Video-Editing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2Circle/>
              <p>+1 year  Camtasia </p>
            </li>
            <li>
              <BsCheck2Circle/>
              <p>+2 year  Filmora</p>
            </li>
                        
            <li>
              <BsCheck2Circle/>
              <p>+1 month  PremierePro</p>
            </li>
                       
            <li>
              <BsCheck2Circle/>
              <p>+1 month finalCut Pro</p>
            </li>
          </ul>
        </article>
          <article className='service'>
          <div className="service__head">
            <h3>ICDL</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2Circle/>
              <p>+1 year PowerPoint </p>
            </li>
            <li>
              <BsCheck2Circle/>
              <p>+2 year Word</p>
            </li>
                        
            <li>
              <BsCheck2Circle/>
              <p>+1 year Excel</p>
            </li>
                       
            <li>
              <BsCheck2Circle/>
              <p>+1 month Access</p>
            </li>
          </ul>
        </article>
         <article className='service'>
          <div className="service__head">
            <h3>Web developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2Circle/>
              <p>+2 month Html5 </p>
            </li>
            <li>
              <BsCheck2Circle/>
              <p>+2 month Css3</p>
            </li>
                        
            <li>
              <BsCheck2Circle/>
              <p>+1 month Javascript</p>
            </li>
                       
            <li>
              <BsCheck2Circle/>
              <p>+1 week React</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services