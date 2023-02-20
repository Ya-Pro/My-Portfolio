import React from 'react'
import {FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft} from 'react-icons/fa'
const Arrows = ({prevSlide,nextSlide}) => {
  return (
      <div>
          <span className='prev' onClick={prevSlide}><FaRegArrowAltCircleLeft/></span>
          <span className='next' onClick={nextSlide}><FaRegArrowAltCircleRight/></span>
    </div>
  )
}

export default Arrows