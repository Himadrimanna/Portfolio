import React from 'react'
import "./header.css"
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from "react-icons/bs"

function header_socials() {
  return (
	<div className='header_socials'>
		<a href='https://www.linkedin.com/in/himadri-manna-902964rd/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
		<a href='https://github.com/Himadrimanna' target="_blank" rel="noreferrer"><BsGithub/></a>
		<a href='https://www.instagram.com/___hr.md___125___/' target="_blank" rel="noreferrer"><BsInstagram/></a>
	</div>
  )
}

export default header_socials