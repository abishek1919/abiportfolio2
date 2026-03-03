import React from 'react'
import verify from '..//assets/icons8-verification-30.png'
import ImageModel from './ImageModel'
const CertificateCard = (props) => {
  return (
    <div className='flex flex-col relative overflow-hidden rounded-xl bg-[#292929b3] border border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20'>
        <div>
            <ImageModel src={props.image} />
        </div>
        <div className='p-6'>
            <h1 className='text-white font-bold text-lg'>{props.cname}</h1>
            <p className='mt-1 text-[#9ca3af] font-semibold font-roboto text-lg'>{props.issuedby}</p>
            <p className=' text-[#9ca3af] font-roboto text-sm'>{props.date}</p>
            <div className='bg-white py-1 px-2 rounded mt-5 w-fit flex justify-center items-center gap-2'>
                <img className='w-5' src={verify} />
                <a target="_blank" rel="noopener noreferrer" href={props.Verify} className='text-sm font-semibold'>Verification Link</a>
            </div>
        </div>
    </div>
  )
}

export default CertificateCard