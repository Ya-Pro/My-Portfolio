import React, { useState,useEffect } from 'react'
import Arrows from './Arrows';
import Dots from './Dots';
import Images from './Images'
import SLiderContent from './SLiderContent';
import './slider.css'
let len = Images.length - 1;
const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 :activeIndex+1)
        },6000)
            return ()=> clearInterval(interval)
    },[activeIndex])
  return (
      <div className='slider__content'>
          <SLiderContent activeIndex={activeIndex} Images={Images} />
          <Arrows prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
              nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)} />
          <Dots activeIndex={activeIndex} Images={Images} onclick={(activeIndex) => setActiveIndex(activeIndex)} />
    </div>
  )
}

export default Slider