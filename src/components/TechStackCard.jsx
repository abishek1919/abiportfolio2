import React from 'react'
import { SiCss3, SiSelenium } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { TbTestPipe } from 'react-icons/tb'
import { MdOutlineAutoAwesome } from 'react-icons/md'
import { GiTheaterCurtains } from 'react-icons/gi'

const TechStackCard = (props) => {
  const [imageError, setImageError] = React.useState(false);

  const fallbackIconMap = {
    CSS: SiCss3,
    "VS Code": VscVscode,
    Playwright: GiTheaterCurtains,
    TestNG: TbTestPipe,
    Selenium: SiSelenium,
    "Allure Reports": MdOutlineAutoAwesome
  };

  const FallbackIcon = fallbackIconMap[props.name];

  return (
    <div className='group flex h-24 w-24 md:h-26 md:w-26 flex-col items-center justify-center rounded-xl border border-white/12 bg-white/[0.03] px-2 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-blue-300/40 hover:bg-white/[0.08] hover:shadow-[0_0_28px_rgba(59,130,246,0.22)]'>
      {imageError && FallbackIcon ? (
        <FallbackIcon className='h-6 w-6 text-white' />
      ) : (
        <img
          className='h-6 w-6 object-contain md:h-7 md:w-7'
          src={props.logo}
          alt={props.name}
          loading='lazy'
          onError={() => setImageError(true)}
        />
      )}
      <p className='mt-2 text-center font-poppins text-[11px] leading-tight text-white/90 md:text-xs'>
        {props.name}
      </p>
    </div>
  )
}

export default TechStackCard
