import React from 'react'

const Dots = ({activeIndex,onclick,Images}) => {
  return (
      <div className='dots'>
          {Images.map((slide, index) => (
              <span key={index} className={`${activeIndex === index ? "dot active-dot" : "dot"}`} onClick={() => onclick(index)}></span>
          ))}
    </div>
  )
}

export default Dots