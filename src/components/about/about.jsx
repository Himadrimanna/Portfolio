import React from 'react'
import "./about.css"
import Me from '../../assets/ME.png'
const about = () => {
  return (
	<section id='about'>

    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about_container" >
       <div className="about_me">
        <div className="about_me-image">
        <img src= {Me}alt="About Image"/>
        </div>
       </div>

       <div className="about_content">
        <p className='intro'>
          I am Himadri Manna. An Explorer, Designer, problem solver and a developer. I am currently pursuing my BTech in Information technology from Vidyavardhini's College of Engineering and technology. My main interest lie in web and android application development.Through out the years, I have worked and explored various technologies including javascript Frameworks like ReactJs, NextJs etc, Native app development like Flutter and backend Frameworks like Express working on NodeJs.
        </p>
        <p className='second_intro'>
          Along with application development I am also interseted in Cybersecurity and Graphic Designing. My other hobbies include Charcoal Sketching and Painting.
        </p>

        <div className="contact">
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
       </div>
    </div>
  </section>
  )
}

export default about