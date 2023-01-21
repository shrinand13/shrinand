import React from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md'

const contact = () => {
  return (
    <section id='contact'>
    <h5> Get In Touch </h5>
    <h2>  Contact Me </h2>
    <div className="container contact__container">
    <div className="conatct__options">
    <article className="conatct__option">
    <MdOutlineEmail/>
      <h4> Email </h4>
      <h5> shrinand13@gmail.com </h5>
      
    </article>

    </div>

   
    </div>
    </section>
  )
}

export default contact