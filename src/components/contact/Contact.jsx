import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>E-mail</h4>
            <h4>smsakib2403@gmail.com</h4>
            <a href="mailto:smsakib2403@gmail.com" target ="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whats App</h4>
            <h4>S M Shakib Hossain</h4>
            <a href="https://api.whatsapp.com/send?send?phone=+8801777075747" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h4>S M Shakib Hossain</h4>
            <a href="https://m.me/smshakib007">Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name ='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
