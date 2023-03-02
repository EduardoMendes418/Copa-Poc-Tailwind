import React from 'react'
import bgImg from '../assets/la2.jpg'
import taca from '../assets/logo-copa.png'

const Hero = () => {
  return (
    <div name='home' className='w-full  h-screen bg-gray-50 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-40 py-30'>
                <img className='w-full' src={taca} alt="/" />
            </div>
            <div className='my-30 px-20' >
                <img className='w-full' src={bgImg} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Hero