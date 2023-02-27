import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Geti in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>mail@mail.com</h5>
            <a href="mailto:#" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>miticok</h5>
            <a href="mailto:#" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+394564567</h5>
            <a href="mailto:#" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS  */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact