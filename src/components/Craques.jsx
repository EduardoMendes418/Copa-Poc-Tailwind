import React from 'react'

import argentina from '../assets/pais/argentina.jpeg'
import brasil from '../assets/pais/brasil.jpeg'
import croacia from '../assets/pais/croacia.jpeg'
import franca from '../assets/pais/franca.jpeg'
import portugal from '../assets/pais/portugal.jpeg'
import belgica from '../assets/pais/belgica.jpeg'
import holanda from '../assets/pais/holanda.jpeg'
import inglaterra from '../assets/pais/inglaterra.jpeg'

const About = () => {
  return (
    <div name='about' className='w-full my-10'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Os 8 Craques da Copa</h2>
                <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.</p>
            </div>

            <div className='grid md:grid-cols-5 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <img className='w-full' src={argentina} alt="/" />
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <img className='w-full' src={brasil} alt="/" />
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <img className='w-full' src={croacia} alt="/" />
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <img className='w-full' src={franca} alt="/" />
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <img className='w-full' src={portugal} alt="/" />
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <img className='w-full' src={belgica} alt="/" />
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <img className='w-full' src={holanda} alt="/" />
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <img className='w-full' src={inglaterra} alt="/" />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About