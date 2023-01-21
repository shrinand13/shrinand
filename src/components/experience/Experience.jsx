import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
    <h5> the skills i have</h5>
    <h2> my skills</h2>
    
    <div className="container experience__container">
    <div className="experience_frontend">
    <h3>Frontend Devlopment</h3>
    <div className="experience__content" >
    <article className='experience__detail'>  
    <BsPatchCheckFill/>

    <h4>Html</h4>
    <small className='text-light'>Experienced </small>
    </article>
    <article className='experience__detail'>  
    <BsPatchCheckFill/>

    <h4>CSS</h4>
    <small className='text-light'>Intermidiate </small>
    </article>
    <article className='experience__detail'>  
    <BsPatchCheckFill/>

    <h4>JavaScript</h4>
    <small className='text-light'>Experienced </small>
    </article>
    <article className='experience__detail'>  
    <BsPatchCheckFill/>

    <h4>React</h4>
    <small className='text-light'>Experienced </small>
    </article>
    <article className='experience__detail'>  
    

  
    </article>

    </div>
 </div>
    {/* end of front end */}

    <div className="experience_backend"></div>
    <h3>Backend Devlopment</h3>
    <div className="experience__content" >
    <article className='experience__detail'>  
    <BsPatchCheckFill/>

    <h4>Java</h4>
    <small className='text-light'>Experienced </small>
    </article>
    <article className='experience__detail'>  
    <BsPatchCheckFill/>

    <h4>Python</h4>
    <small className='text-light'>Basic </small>
    </article>
    <article className='experience__detail'>  
    <BsPatchCheckFill/>

    <h4>MySql</h4>
    <small className='text-light'>Basic</small>
    </article>
    <article className='experience__detail'>  
    


  
    </article>
    </div>
  

      
    </div>
    </section>
  )
}

export default Experience