import React from 'react'
import {CiFacebook,CiLinkedin} from "react-icons/ci"
import {FiPhone} from 'react-icons/fi'
const HeaderSocials = () => {
  return (
      <div className='header__socials'>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><CiFacebook/></a>
          <a href="https://linkedin.com" target="_blank" rel='noreferrer'><CiLinkedin/></a>
          <a href="tel:01012227045" target="_blank" rel="noreferrer" ><FiPhone/></a>
    </div>
  )
}

export default HeaderSocials