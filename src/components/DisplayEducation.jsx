import React from 'react'
import { education } from '../data/education'

const DisplayEducation = () => {
  return (
    <div className='grid gap-6 mt-8'>
      {education.map((item) => (
        <div
          key={item.id}
          className='group rounded-xl border border-gray-800 bg-[#1f1f1f] p-5 md:p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-500/20'
        >
          <div className='flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
            <div className='md:pr-6'>
              <h3 className='text-white text-xl font-poppins font-semibold'>{item.degree}</h3>
              <p className='mt-1 text-gray-300 font-roboto text-base'>{item.institution}</p>
              <p className='mt-1 text-sm text-gray-400 font-roboto'>{item.year}</p>
              <p className='mt-4 text-sm text-gray-300 font-roboto'>{item.details}</p>
            </div>

            <div className='self-end md:self-start flex h-18 w-18 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-lg border border-gray-600 bg-white/5 p-2 transition-all duration-300 group-hover:border-blue-400'>
              <img
                src={item.logo}
                alt={`${item.institution} logo`}
                className='h-full w-full object-contain'
                loading='lazy'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayEducation
