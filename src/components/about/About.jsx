import React from 'react'
import './about.css'
import ME from '../../assets/sknew.jpeg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'> 
    <h5> Get to know me  </h5>
    <h2>About me </h2> 
    <div className="container about__container">
      <div className="about me">
        <div className="about__me-image">
          <img src={ME} alt="About Image"/>
        </div>
      </div>
      <div className="about__content">
      <div className="about__cards">

      <article className='about__card'>
      <FaAward className='about__icon'/>
        <h5> Experience </h5>
        <small> 0 years </small>
      </article>

      <article className='about__card'>
      <VscFolderLibrary className='about__icon'/>
        <h5> Projects </h5>
        <small> 4 completed </small>
      </article>
      </div>

      <p>
        Hi my name Shrinand Kulkarni, I am from Pune Maharashtra.
        In my leisure time i like to read about space and technology, play some computer games and listen some music.
        I have intrest in JAVA programming language and React js. I like to work on miny projects which add on to my 
        coding knowledge.x  
      </p>
      

      </div>
    </div>
    </section>

  )
}

export default about