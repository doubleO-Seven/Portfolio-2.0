import React from 'react'
import './nav.css'
import {TiHomeOutline} from 'react-icons/ti'
import {RiUserLine} from 'react-icons/ri'
import {BiBookHeart} from 'react-icons/bi'
import{RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><TiHomeOutline/></a>
      <a href="#about"><RiUserLine/></a>
      <a href="#experience"><BiBookHeart/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav