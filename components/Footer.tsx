import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full mt-10' id='contact'>
        <div className='flex flex-col w-full justify-center items-center mb-5'>
            <h1 className='sm:text-5xl text-4xl font-bold text-center max-w-[80vw] sm:max-w-xl'>Ready to take<span className='text-purple'> your </span>digital presence to the next level?</h1>
            <p className='mt-10 mb-5 text-base sm:font-normal sm:text-lg text-white-200 text-center'>Reach out to me today and let&apos;s discuss how i can help you achieve your goals.</p>
            <MagicButton
                title='Let&apos;s get in touch'
                icon= {<FaLocationArrow />}
                position='right'
            />
        </div>
        <div className='flex sm:flex-row flex-col justify-between my-12 w-full items-center'>
            <p className='text-center max-sm:mb-3'>Copyright &#169; 2024 Mohamed Nouar</p>
            <div className='flex gap-3 max-sm:justify-center'>
                {socialMedia.map((item)=>(
                    <div className='bg-black-200 rounded-lg border border-white/[0.1] p-2.5'>
                        <img src={item.img} alt={item.img} className='size-5 '/>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer