import React from 'react'
import CTA from "./CTA"
import Me from '../../assets/ME.png'
import Header_Social from './header_socials'

function header() {
  return (
	<header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Himadri Manna</h1>
      <h5 className='text-light'>I'm a Mern Stack Developer along with a Android Developer, Graphic Designer and Content Creation as well.</h5>
      <CTA/>
      <Header_Social/>

      <div className='me'>
        <img src= {Me}alt=""/>
      </div>

      <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
  </header>
  )
}

export default header