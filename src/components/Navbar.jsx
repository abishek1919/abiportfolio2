import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import OpenNav from './OpenNav';
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-[#292929b3] absolute top-0 left-0 right-0 h-12 md:h-14 z-100 px-5 py-2 flex justify-between items-center'>
          <div className='w-20 md:w-28' />
          {open?<IoClose onClick={()=>setOpen(false)} className='md:hidden text-white' />:<GiHamburgerMenu onClick={()=>setOpen(true)} className='md:hidden text-white' />}
          
          <div className='hidden md:block'>
            <ul className='flex font-roboto text-sm lg:text-base font-semibold text-white/90 gap-3 lg:gap-6'>
              <a href='#about' className='hover:text-blue-600'><li>About</li></a>
              <a href='#skills' className='hover:text-blue-600'><li>Skills</li></a>
              <a href='#experience' className='hover:text-blue-600'><li>Experience</li></a>
              <a href='#projects' className='hover:text-blue-600'><li>Projects</li></a>
              <a href='#education' className='hover:text-blue-600'><li>Education</li></a>
              <a href='#certifications' className='hover:text-blue-600'><li>Certifications</li></a>
              <a href='#contact' className='hover:text-blue-600'><li>Contact</li></a>
            </ul>
          </div>
          {open&& <OpenNav close={()=>setOpen(false)}/>}
         
    </nav> 
  )
}

export default Navbar
