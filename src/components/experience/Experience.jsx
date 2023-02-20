import React from 'react'
import './experience.css'
import { TfiHtml5 } from 'react-icons/tfi'
import { IoLogoCss3 } from 'react-icons/io'
import { TbBrandJavascript, TbBrandBootstrap } from 'react-icons/tb'
import {FaReact,FaVideo} from 'react-icons/fa'
import { SiTypescript,SiMicrosoftword,SiMicrosoftpowerpoint,SiMicrosoftexcel } from 'react-icons/si'
import { DiPhotoshop } from 'react-icons/di'
import {IoFilmOutline} from 'react-icons/io5'

// the experience component
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills of me</h5>
      <h1>Experience</h1>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Developer</h3>
          <div className="experience__content">
            <div className="experience__details">
              <TfiHtml5  className='experience__icons'/>
              <div>
                <h4>Html</h4>
              <small>Intermediate</small></div>
            </div>
            <div className="experience__details">
              <IoLogoCss3 className='experience__icons'/>
              <div>
                <h4>Css3</h4>
              <small>Intermediate</small></div>
            </div>
                        <div className="experience__details">
              <TbBrandJavascript className='experience__icons'/>
              <div>
              <h4>JavaScript</h4>
              <small>Intermediate</small>
              </div>
            </div>

                        <div className="experience__details">
              <TbBrandBootstrap className='experience__icons' />
              <div>

              <h4>Bootstrap</h4>
              <small>Beginner</small>
              </div>
            </div>
                        <div className="experience__details">
              <SiTypescript className='experience__icons'/>
              <div>
              <h4>TypeScript</h4>
              <small>Beginner</small>
              </div>
            </div>
                        <div className="experience__details">
              <FaReact className='experience__icons'/>
              <div>

              <h4>React</h4>
              <small>Beginner</small>
              </div>
            </div>
          </div>
        </div>
        {/* the graphics experience part */}
        <div className="experience__graphics">
              <h3>Graphics & Designer</h3>
          <div className="experience__content">
            <div className="experience__details">
              <FaVideo className='experience__icons'/>
              <div>

              <h4>Video__editing</h4>
              <small>Professional</small>
              </div>
            </div>
                        <div className="experience__details">
                                      <IoFilmOutline className='experience__icons'/>
              <div>
                
              <h4>Filmora</h4>
              <small>Professional</small>
</div>
            </div>
            <div className="experience__details">
              <DiPhotoshop className='experience__icons'/>
              <div>

              <h4>Photoshop</h4>
              <small>Intermediate</small>
              </div>
            </div>
                        <div className="experience__details">
              <SiMicrosoftword className='experience__icons'/>
              <div>

              <h4>Word</h4>
              <small>Intermediate</small>
              </div>
            </div>
                        <div className="experience__details">
              <SiMicrosoftpowerpoint className='experience__icons'/>
              <div>

              <h4>PowerPoint</h4>
              <small>Professional</small>
              </div>
            </div>
                                    <div className="experience__details">
              <SiMicrosoftexcel className='experience__icons'/>
              <div>

              <h4>Excel</h4>
              <small>Professional</small> 
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience