import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {RiFacebookBoxFill} from 'react-icons/ri'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/smshakib/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/doubleO-Seven" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/smshakib007" target="_blank"><RiFacebookBoxFill/></a>
    </div>
  )
}

export default HeaderSocials