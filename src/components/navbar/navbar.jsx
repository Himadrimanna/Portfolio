import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BsFiles} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import './navbar.css'
import {useState} from 'react'


const Navbar =() => {
  const[activenavbar,setActiveNav]= useState('#')
  return (
	<nav>
    <a href='#' onChange={()=>setActiveNav("#")}  onClick={()=>setActiveNav('#')}className={activenavbar ==='#'?'active':''}><AiOutlineHome/></a>
    <a href='#about' onClick={()=>setActiveNav('#about')}className={activenavbar ==='#about'?'active':''}><AiOutlineUser/></a>
    <a href='#experience'onClick={()=>setActiveNav('#experience')}className={activenavbar ==='#experience'?'active':''}><BiBook/></a>
    <a href='#portfolio'onClick={()=>setActiveNav('#portfolio')}className={activenavbar ==='#portfolio'?'active':''}><BsFiles/></a>
    <a href='#contact'onClick={()=>setActiveNav('#contact')}className={activenavbar ==='#contact'?'active':''}><BiMessageSquareDetail/></a>

  </nav>
  )
}

export default Navbar