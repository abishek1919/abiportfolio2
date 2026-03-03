import React from 'react'
import { techStack } from '../data/techStack'
import TechStackCard from './TechStackCard'

export const DisplayTechStack = () => {
  const rowPattern = [9, 8, 6, 4, 3, 1];
  let index = 0;
  const rows = rowPattern.map((count) => {
    const currentRow = techStack.slice(index, index + count);
    index += count;
    return currentRow;
  }).filter((row) => row.length > 0);

  return (
    <div className='relative mt-8 overflow-hidden rounded-2xl border border-white/8 bg-[radial-gradient(circle_at_center,rgba(56,97,181,0.22),rgba(17,24,39,0.28)_45%,rgba(17,24,39,0.85)_100%)] p-4 md:p-7'>
      <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_31px,rgba(255,255,255,0.04)_32px),linear-gradient(90deg,transparent_31px,rgba(255,255,255,0.04)_32px)] bg-[size:32px_32px] opacity-40' />

      <div className='relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:hidden'>
        {techStack.map((tech) => (
          <TechStackCard key={tech.id} logo={tech.logo} name={tech.name} />
        ))}
      </div>

      <div className='relative z-10 hidden flex-col gap-4 md:flex'>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className='flex justify-center gap-3'>
            {row.map((tech) => (
              <TechStackCard key={tech.id} logo={tech.logo} name={tech.name} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
