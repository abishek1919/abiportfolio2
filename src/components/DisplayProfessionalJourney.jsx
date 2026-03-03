import React from 'react'
import { professionalJourney } from '../data/professionalJourney'
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const DisplayProfessionalJourney = () => {
  const [expanded, setExpanded] = React.useState(() =>
    Object.fromEntries(professionalJourney.map((item) => [item.id, false]))
  );

  // Newest first (so 2025 appears at top)
  const orderedJourney = [...professionalJourney].sort((a, b) => {
    const yearA = Number(a.period.match(/\d{4}/)?.[0] || 0);
    const yearB = Number(b.period.match(/\d{4}/)?.[0] || 0);
    return yearB - yearA;
  });

  return (
    <div className='relative mt-8'>
      <div className='absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-white/25 md:block' />

      <div className='flex flex-col gap-12'>
        {orderedJourney.map((item, index) => {
          const isExpanded = expanded[item.id];

          // First item (latest) on RIGHT, second on LEFT
          const isRight = index % 2 === 0;

          return (
            <article key={item.id} className='relative md:grid md:grid-cols-2 md:gap-10'>
              
              <div className={`${isRight ? "md:col-start-2 md:justify-self-start" : "md:col-start-1 md:justify-self-end"} w-full md:max-w-[420px]`}>
                
                <div className='group rounded-xl border border-gray-700 bg-[#1f1f1f] p-5 shadow-lg shadow-black/20 
                                transition-all duration-300 ease-in-out 
                                hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/50'>
                  
                  <h3 className='text-xl font-poppins font-semibold text-white transition-colors duration-300 group-hover:text-blue-400'>
                    {item.role}
                  </h3>

                  <p className='mt-1 font-poppins text-base text-gray-200'>
                    {item.organization}
                  </p>

                  <div className='mt-3 flex flex-wrap gap-2 text-xs text-gray-300'>
                    <span className='inline-flex items-center gap-2 rounded-full border border-gray-600 bg-white/5 px-3 py-1'>
                      <FaCalendarAlt />
                      {item.period}
                    </span>

                    <span className='inline-flex items-center gap-2 rounded-full border border-gray-600 bg-white/5 px-3 py-1'>
                      <FaMapMarkerAlt />
                      {item.location}
                    </span>
                  </div>

                  <p className='mt-4 text-sm leading-6 text-gray-300'>
                    {item.summary}
                  </p>

                  <button
                    className='mt-4 inline-flex items-center gap-1 font-poppins text-sm text-blue-300 hover:text-blue-200'
                    onClick={() =>
                      setExpanded((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                    }
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                    <MdKeyboardArrowDown
                      className={`text-xl transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className='mt-5 space-y-5 border-t border-gray-700 pt-4'>
                      
                      <div>
                        <h4 className='font-poppins text-base font-semibold text-white'>
                          Key Achievements
                        </h4>

                        <ul className='mt-3 list-disc space-y-2 pl-5 text-sm text-gray-300'>
                          {item.achievements.map((achievement) => (
                            <li key={achievement}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className='font-poppins text-base font-semibold text-white'>
                          Technologies Used
                        </h4>

                        <div className='mt-3 flex flex-wrap gap-2'>
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className='rounded-full border border-gray-600 bg-white/5 px-3 py-1 text-xs text-gray-200 
                                         transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              </div>

              {/* Timeline Dot */}
              <span className='absolute left-1/2 top-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white/70 bg-[#1b1b1b] shadow-[0_0_10px_rgba(255,255,255,0.25)] md:block' />

              {/* Connector Line */}
              <span
                className={`absolute top-12 hidden h-[2px] w-10 bg-white/25 md:block ${
                  isRight
                    ? "left-1/2"
                    : "left-[calc(50%-2.5rem)] -translate-x-full"
                }`}
              />

              <div className={`hidden md:block ${isRight ? "md:col-start-1" : "md:col-start-2"}`} />

            </article>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayProfessionalJourney;