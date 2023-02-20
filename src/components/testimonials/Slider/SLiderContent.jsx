import React from 'react'

const SLiderContent = ({activeIndex,Images}) => {
  return (
      <section>
          {Images.map((slide, index) => (
              <div key={index} className={index === activeIndex ? "slides active" : "inactive"} >
              <div className="content">
                <h1>{slide.name}</h1>
                <h3>{slide.job}</h3>
                <p>{slide.say}</p>
              </div>
              <img src={slide.url} alt={slide.url} className="image__slide" />
              </div>
          ))}
    </section>
  )
}

export default SLiderContent