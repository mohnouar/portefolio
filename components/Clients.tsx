import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <section id='testimonials' className='py-20'>
        <h2 className='heading'>
            Kind words from 
            <span className='text-purple'> satisfied clients</span>
        </h2>
        <div className='flex flex-col items-center lg:mt-10'>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
        <div className='flex sm:gap-12 gap-3 sm:flex-nowrap flex-wrap justify-center mt-10'>
          {companies.map((companie)=> (
              <React.Fragment key={companie.id}>
                <div className='flex gap-2 items-center'>
                  <img src={companie.img} alt={companie.name} className="md:w-10 w-5"/>
                  <img src={companie.nameImg} alt={companie.name} className='md:w-24 w-20' 
                    width={companie.id === 4 || companie.id === 5 ? 100 : 150}
                  />
                </div>
              </React.Fragment>
            ))
          }
        </div>
    </section>
  )
}

export default Clients