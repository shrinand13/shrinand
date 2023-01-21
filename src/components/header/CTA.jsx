import React from 'react'
import CV from '../../assets/sk.pdf'

const CTA = () => {
  return (
    <div className='cta'>
    <a href={CV} download className='btn'>Download CV </a>
    <a href="#about" className='btn btn-primary'> Lets talk</a>
        </div>
  )
}

export default CTA