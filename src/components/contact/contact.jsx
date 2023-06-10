import React from 'react'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import './contact.css'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact=()=> {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0p9qbhs', 'template_t96oajm', form.current, 'aR-Urx9yb_y9spgof')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
	<section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <MdOutlineMail className='contact_icon'/>
          <h4>Email</h4>
          <h5>himadrimanna792@gmail.com</h5>
          <a href='mailto:himadrimanna792@gmail.com'target="_blank" rel="noreferrer">Send a message</a>
        </article>
        <article className="contact_option">
          <BsWhatsapp  className='contact_icon'/>
          <h4>Whatsapp</h4>
          <h5>+91 9029645244</h5>
          <a href='https://api.whatsapp.com/send?phone=+919029645244' target="_blank" rel="noreferrer">Send a message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='email' name='email'  placeholder='Your Email' required />
        <textarea name='message' rows='8'placeholder='Your Message' required></textarea>
        <button type='submit'className='btn btn-primary'>
          Send Message
        </button>
      </form>
    </div>
  </section>
  )
}

export default Contact