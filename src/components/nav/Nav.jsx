import React from 'react'
import './nav.css'
import {TiHomeOutline} from 'react-icons/ti'
import {RiUserLine} from 'react-icons/ri'
import {BiBookHeart} from 'react-icons/bi'
import{RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ' '}><TiHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ' ' }><RiUserLine/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ' ' }><BiBookHeart/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className = {activeNav === '#services' ? 'active' : ' ' }><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ' ' }><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav