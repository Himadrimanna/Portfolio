import React from 'react'
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from "react-icons/di";
import {SiTailwindcss} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {TbBrandNextjs} from 'react-icons/tb';
import {RiFlutterFill} from 'react-icons/ri';
import {SiMongodb} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';
import {FaNodeJs} from 'react-icons/fa';
import {FaPython} from 'react-icons/fa';
import {SiAdobephotoshop} from 'react-icons/si';
import {SiAdobepremierepro} from 'react-icons/si';
import {SiAdobeillustrator} from 'react-icons/si';
import {SiAdobeaftereffects} from 'react-icons/si';
import{FaJava} from 'react-icons/fa';
import "./experience.css"
function experience() {
  return (
	<section id='experience'>
        <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className="experince_details">
            <AiFillHtml5 className='experience_icon'/>
           <div>
           <h4>HTML</h4>
            <small className='text-light'>
              Experienced
            </small>
           </div>
          </article>
          <article className="experince_details">
            <DiCss3 className='experience_icon'/>
           <div>
           <h4>CSS</h4>
            <small className='text-light'>
              Experienced
            </small>
           </div>
            </article>
            <article className="experince_details">
            <SiTailwindcss className='experience_icon'/>
            <div>
            <h4>TAILWIND CSS</h4>
            <small className='text-light'>
              Experienced
            </small>
            </div>
            </article>
            <article className="experince_details">
            <FaReact className='experience_icon'/>
            <div>
            <h4>REACT JS</h4>
            <small className='text-light'>
              Intermediate
            </small>
            </div>
            </article>
            <article className="experince_details">
            <TbBrandNextjs className='experience_icon'/>
            <div>
            <h4>NEXT JS</h4>
            <small className='text-light'>
              Intermediate
            </small>
            </div>
            </article>
            <article className="experince_details">
            <RiFlutterFill className='experience_icon'/>
            <div>
            <h4>Flutter</h4>
            <small className='text-light'>
            Intermediate
            </small>
            </div>
            </article>
        </div>
      </div>
      {/********** backend*********** */}
      <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
          <article className="experince_details">
            <SiMongodb className='experience_icon'/>
            <div>
            <h4>MONGODB</h4>
            <small className='text-light'>
            Intermediate
            </small>
            </div>
          </article>
          <article className="experince_details">
            <GrMysql className='experience_icon'/>
            <div>
            <h4>MYSQL</h4>
            <small className='text-light'>
            Beginner
            </small>
            </div>
            </article>
            <article className="experince_details">
            <FaNodeJs className='experience_icon'/>
            <div>
            <h4>NODE JS</h4>
            <small className='text-light'>
            Intermediate
            </small>
            </div>
            </article>
            <article className="experince_details">
            <FaPython className='experience_icon'/>
            <div>
            <h4>PYTHON</h4>
            <small className='text-light'>
            Intermediate
            </small>
            </div>
            </article>
            <article className="experince_details">
            <FaJava className='experience_icon'/>
            <div>
            <h4>JAVA</h4>
            <small className='text-light'>
            Intermediate
            </small>
            </div>
            </article>
        </div>
      </div>

      {/**************graphic design****** */}
      <div className="experience_graphic_design">
        <h3>Graphic Design</h3>
        <div className="experience_content">
          <article className="experince_details">
            <SiAdobephotoshop className='experience_icon'/>
            <div>
            <h4>PHOTOSHOP</h4>
            <small className='text-light'>
              Experienced
            </small>
            </div>
          </article>
          <article className="experince_details">
            <SiAdobepremierepro className='experience_icon'/>
            <div>
            <h4>PREMIERE PRO</h4>
            <small className='text-light'>
              Experienced
            </small>
            </div>
            </article>
            <article className="experince_details">
            <SiAdobeaftereffects className='experience_icon' size={20}/>
            <div>
            <h4>AFTER EFFECTS</h4>
            <small className='text-light'>
              Experienced
            </small>
            </div>
            </article>
            <article className="experince_details">
            <SiAdobeillustrator className='experience_icon' size={25}/>
            <div>
            <h4>ADOBE ILLUSTRATOR</h4>
            <small className='text-light'>
              Experienced
            </small>
            </div>
            </article>
        </div>
      </div>
    </div>
  </section>
  )
}

export default experience