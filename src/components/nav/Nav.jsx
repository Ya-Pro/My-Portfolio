import {React, useState } from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { MdReviews } from 'react-icons/md'
import {VscProject} from 'react-icons/vsc'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header');
  return (
    <nav>
      <a href="#header" onClick={()=> setActiveNav("#header")} className = { activeNav === '#header' ? 'active' : ''}  ><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav("#about")} className = { activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
     <a href="#experience" onClick={()=> setActiveNav("#experience")} className = { activeNav === '#experience' ? 'active' : ''}><RiServiceLine/></a> 
     <a href="#services" onClick={()=> setActiveNav("#services")} className = { activeNav === '#services' ? 'active' : ''}><BiBook/></a>
     <a href="#portfolio" onClick={()=> setActiveNav("#portfolio")} className = { activeNav === '#portfolio' ? 'active' : ''}><VscProject/></a>
     <a href="#testimonials" onClick={()=> setActiveNav("#testimonials")} className = { activeNav === '#testimonials' ? 'active' : ''}><MdReviews/></a>
     <a href="#contact" onClick={()=> setActiveNav("#contact")} className = { activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav