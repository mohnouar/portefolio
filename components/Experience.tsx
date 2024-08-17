import React from 'react'
import { Button } from './ui/MovingBorder'
import { workExperience } from '@/data'

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-10 mt-10'>
        {workExperience.map((card) => (
          <Button 
            key={card.id} 
            className=''
            duration={Math.floor(Math.random()*10000)+10000}
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
          >
            <div className='flex lg:flex-row flex-col items-center p-10'>
              <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16" />
              <div className='lg:ms-5'>
                <h2 className='text-white text-2xl font-bold pb-5 text-start'>{card.title}</h2>
                <p className='text-whith-100 font-semibold text-sm text-start'>{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience