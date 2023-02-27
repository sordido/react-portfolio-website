import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {IoIosPeople} from 'react-icons/io'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, SetActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => SetActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => SetActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => SetActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#services" onClick={() => SetActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#portfolio" onClick={() => SetActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen /></a>
      <a href="#testimonials" onClick={() => SetActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><IoIosPeople /></a>
      <a href="#contact" onClick={() => SetActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav