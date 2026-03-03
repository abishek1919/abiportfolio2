import React from 'react'
import hero from "../assets/Hero.png"
import { motion as Motion } from "motion/react";

const HeroSec = () => {
  return (
    <section id='home' className=' relative overflow-visible min-h-screen flex flex-col justify-between gap-4 pt-32 '>
      <div className='px-2.5 flex flex-col gap-3'>
        <Motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='text-4xl  md:text-6xl lg:text-8xl font-bold text-white px-5 text-center'
        >
          Hi! Welcome to My <span className='text-gray-400 hover:text-gray-400/80'>Portfolio</span>
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='text-xl lg:text-4xl md:text-2xl text-gray-300 px-1 md:px-7 text-center'
        >
          I&apos;m <span className='text-white font-bold text-2xl lg:text-5xl'>ABISHEK </span>, a
          <span className='text-2xl lg:text-5xl text-gray-400 font-bold '> Software Developer & Automation Tester</span>
          <br className='hidden md:block' />
          <span>From architecture to automation - I build systems end to end</span>
        </Motion.p>

        <div className='text-white text-s lg:text-2xl lg:mt-8 flex flex-col items-center md:mt-0 mt-12  gap-6 md:gap-4 md:flex-row md:justify-center'>
          <Motion.button
            className="bg-[#292929b3] px-1.5 rounded-xl w-44 h-10 text-lg lg:w-64 lg:h-16 text-center flex justify-center items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            onClick={() =>
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            See projects
          </Motion.button>

          <Motion.a
            href="/Abishek_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#292929b3] px-1.5 rounded-xl w-44 h-10 text-lg lg:w-64 lg:h-16 text-center flex justify-center items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Download Resume
          </Motion.a>
        </div>
      </div>

      <Motion.div
        className='md:py-10 flex justify-center relative z-10 px-5  py-10 md:px-10'
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img className='rounded-4xl  outline-6 outline-white/10 lg:w-3/4  sm:w-8/10 border-10  border-white/40' src={hero} alt='hero' />
      </Motion.div>
    </section>
  )
}

export default HeroSec
