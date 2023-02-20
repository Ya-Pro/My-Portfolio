import React from 'react'
import Slider from './Slider/Slider'
import './testimonials.css'
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h1>Testimonials</h1>
      <div className="container testimonials__container">
        <Slider/>
      </div>
    </section>
  )
}

export default Testimonials