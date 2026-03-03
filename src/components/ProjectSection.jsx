import React from 'react'
import DisplayProjects from './DisplayProjects'
import { DisplayTechStack } from './DisplayTechStack'
import { motion as Motion } from "motion/react";
import DisplayCertificate from './DisplayCertificate'
import DisplayProfessionalJourney from './DisplayProfessionalJourney'
import DisplayEducation from './DisplayEducation'

const SectionBlock = ({ id, title, children }) => {
  return (
    <Motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='mt-10 rounded-2xl border border-gray-800 bg-[#292929b3] p-5 md:p-7'
    >
      <h2 className='text-2xl md:text-3xl font-poppins font-semibold text-white'>{title}</h2>
      {children}
    </Motion.div>
  )
}

const ProjectSection = () => {
  return (
    <section id='portfolio' className='min-h-screen px-6 py-10 lg:px-36 '>
        <Motion.h1 
            initial={{ opacity: 0, y: 30 }}   // before appearing
            whileInView={{ opacity: 1, y: 0 }} // when in viewport
            viewport={{ once: true }}          // animate only once
            transition={{ duration: 1, ease: "easeOut" }}
            className='text-2xl md:text-3xl lg:text-5xl poppins text-white font-bold text-center'>Portfolio Showcase</Motion.h1>
        <Motion.p 
            initial={{ opacity: 0, y: 30 }}   // before appearing
            whileInView={{ opacity: 1, y: 0 }} // when in viewport
            viewport={{ once: true }}          // animate only once
            transition={{ duration: 1, ease: "easeOut" }}
            className=' text-gray-100 md:text-xl lg:text-2xl md:mt-5 text-center mt-3'>Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</Motion.p>
        <SectionBlock id="skills" title="Tech Stack">
          <DisplayTechStack />
        </SectionBlock>
        <SectionBlock id="experience" title="Professional Journey">
          <DisplayProfessionalJourney />
        </SectionBlock>
        <SectionBlock id="projects" title="Projects">
          <DisplayProjects />
        </SectionBlock>
        <SectionBlock id="certifications" title="Certifications">
          <DisplayCertificate />
        </SectionBlock>
        <SectionBlock id="education" title="Education">
          <DisplayEducation />
        </SectionBlock>

    </section>
  )
}

export default ProjectSection
