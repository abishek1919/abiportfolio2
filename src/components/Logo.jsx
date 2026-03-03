import React from 'react'

const Logo = () => {
  return (
    <div className='flex flex-col gap-0'>
        <a href='#Herosec' className='text-[#e7e7e7] font-poppins font-semibold text-[16px]'><span className='hover:text-blue-500'>Hv</span><span className=" bg-linear-to-br from-neutral-300 via-neutral-500/70 to-neutral-300/30 bg-clip-text text-transparent ">Singh</span></a>
        <div className='flex items-center -mt-1 gap-1'>
            <div className='bg-[#d4d4d4] w-7 h-1.5'></div>
            <p className='text-[#e7e7e7] text-[7px]'>portfolio</p>
        </div>
    </div>
  )
}

export default Logo