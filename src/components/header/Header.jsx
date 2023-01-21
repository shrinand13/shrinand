import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/shrinand.jpeg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
<header>
  <div className=".container.header__container">
    <h5>Hello I'm</h5>
    <h1>Shrinand kulakrni </h1>
    <h5 className="text-light">Fullstack developer</h5>
    <CTA/>
    <HeaderSocials/>
    <div className="me">
      <img src={ME} alt="me"/>

    </div>

    <a href="#contact" className='scroll__down' >Scroll down </a> 

  

  </div>
</header>  )
}

export default header