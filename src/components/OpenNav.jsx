import React from 'react'

const OpenNav = (props) => {
  return (
    <div className='absolute bg-white/20 backdrop-blur-md md:hidden  right-5 z-20 top-17 w-1/2 py-5 rounded-4xl items-end '>
        <ul className='flex flex-col font-roboto text-sm justify-center items-center text-white gap-4 lg:gap-6 '>
              <a href='#about' onClick={props.close} className='hover:text-blue-600'><li>ABOUT</li></a>
              <a href='#skills' onClick={props.close} className='hover:text-blue-600'><li>SKILLS</li></a>
              <a href='#experience' onClick={props.close} className='hover:text-blue-600'><li>EXPERIENCE</li></a>
              <a href='#projects' onClick={props.close} className='hover:text-blue-600'><li>PROJECTS</li></a>
              <a href='#education' onClick={props.close} className='hover:text-blue-600'><li>EDUCATION</li></a>
              <a href='#certifications' onClick={props.close} className='hover:text-blue-600'><li>CERTIFICATIONS</li></a>
              <a href='#contact' onClick={props.close} className='hover:text-blue-600'><li>CONTACT</li></a>
        </ul>
        
    </div>
  )
}

export default OpenNav
