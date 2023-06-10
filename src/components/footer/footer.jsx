import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from "react-icons/bs"
import './footer.css'

function footer() {
  return (
	<footer>
    <a href='#' className='logo'>HIMADRI MANNA</a>
    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>

    <div className='footer_social'>
    <a href='https://www.linkedin.com/in/himadri-manna-902964rd/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
		<a href='https://github.com/Himadrimanna' target="_blank" rel="noreferrer"><BsGithub/></a>
		<a href='https://www.instagram.com/___hr.md___125___/' target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>

    <div className="footer_social-after"></div>

    <div className='footer_copyright'>
      <h3>&copy; Himadri Manna. All rights reserved.</h3>
    </div>
  </footer>
  )
}

export default footer