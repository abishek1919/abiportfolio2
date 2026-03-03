import React from 'react'
import im from '../assets/abiPortfolio.jpeg'
import { motion as Motion } from "motion/react";

const AboutSection = () => {
  return (
    <section id="about" className='bg-white relative rounded-4xl overflow-hidden md:py-20 -mt-20 md:-mt-22 lg:-mt-58 z-20 px-8 lg:px-20 py-12'>
        <div className='grid gap-5 md:grid-cols-2'>
            <Motion.div
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className='text-black font-bold text-xl font-roboto lg:text-3xl '>ABISHEK </h1>
                <p className='text-black font-extrabold text-2xl font-poppins lg:text-6xl'>
                  Know more 
                  <span className='text-red-500 '>
                    <br className='hidden md:block ' />About me
                  </span>
                </p>

                <div className='font-roboto pt-5 lg:text-2xl space-y-6'>
                  <p>
                    I am a Software Developer with strong experience in building scalable applications and designing clean, maintainable system architectures. Proficient in Java, Python, SQL, with a solid understanding of data structures, object-oriented programming, and RESTful API development.
                  </p>

                  <p>
                    And an Automation QA Engineer with hands-on experience in designing and implementing robust test automation frameworks using Selenium, Playwright, Postman. Experienced in writing efficient test cases, performing end-to-end automation, validating database records with SQL, and ensuring software quality through structured testing practices.
                  </p>

                  <p>
                    And also Additionally I am experienced in developing real-time IoT-based smart systems, integrating hardware with software applications for intelligent monitoring and automation solution and conference-level project presentations, demonstrating strong technical leadership and problem-solving capabilities.
                  </p>
                </div>

            </Motion.div>

            <Motion.div
                className='flex justify-center items-center overflow-hidden rounded-xl hover:scale-[1.02] transition-all duration-300'
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <img 
                  className='rounded-xl outline-12 outline-gray-100 w-9/10 lg:max-w-120 sm:max-w-40 md:max-w-54' 
                  src={im} 
                  alt="img" 
                />
            </Motion.div>
        </div>
    </section>
  )
}

export default AboutSection
