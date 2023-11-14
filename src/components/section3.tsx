import React from 'react'
import macDesign from '../assets/mac-design.png'

type CardProps = {
  src: string;
  title: string;
  desc: string;
}
export const Card : React.FC<CardProps>= ({title, src, desc}) => {
  return (
    <div className='text-center min-h-[75px] flex flex-col items-center flex-grow basis-[100%]'>
      <img src={src} alt="" className='w-[30%] max-w-full'/>
      <div className='relative'>
        <h3 className='font-serif text-[29px]'>{title}</h3>
      </div>
      <div>
        <p className='text-base md:text-sm xl:text-lg'>
        {desc}
        </p>
      </div>
    </div>
  )
}

const Section3 = () => {
  return (
    <section className=''>
        <div className='p-[40px] lg:p-[110px] flex flex-col justify-center'>
          <div className='container text-center self-center'>
            <h2 className='font-serif mb-7'>
              Comprehensive Marketing Plan
            </h2>
          </div>
          <div className='flex flex-col md:flex-row items-stretch justify-start flex-nowrap p-[10px]'>
            {
              [
                {
                  title: "Responsive",
                  src: "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/rmtn3r5zpsljdsncbwa4/image-007",
                  desc: "I am always available via phone, text, or email."
                }, 
                {
                  title: "Syndication",
                  src: "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ks8ztlvw2b35q5qgs6xn/image-011",
                  desc: "I market your property locally, nationally, and internationally"
                }].map((value)=> (
                  <Card {...value}/>
              ))
            }
          </div>
          <img className='w-[70%] self-center rounded-sm mix-blend-multiply' src={macDesign}/>
          <div className='flex flex-col md:flex-row items-stretch justify-start flex-nowrap p-[10px] mb-[10px]'>
            {
              [
                {
                  title: "Virtual Tour",
                  src: "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zr3bugldblvebixagfs1/image-009",
                  desc: "Let's make your home stand out with a hight quality virtual tour"
                }, 
                {
                  title: "Photography",
                  src: "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/dywgmsgzddtcsqxagbwh/image-013",
                  desc: "Beautiful, high-end photography is a central part of our marketing plan for your property"
                }].map((value)=> (
                  <Card {...value}/>
              ))
            }
          </div>
          <div className='grid md:grid-cols-2 md:grid-rows-4'>

            <div className='bg-black flex justify-center items-center'>
              <h2 className='text-white text-center font-serif text-[29px] xl:text-5xl '>Decor<br/>Guidance</h2>
            </div>
            <div className='mb-2 md:mb-0'>
              <img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/ghtq7jtce7tsgdjtosrs/image-025" alt="" />
            </div>
            <div className=''>
              <img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/axx0whb7xfmlwhvcckrr/image-023" alt="" />
            </div>
            <div className='p-6 flex flex-col justify-center items-center'>
              <div>
                <h3 className='text-3xl xl:text-5xl font-serif'>My Staging Expertise</h3>
                <ul className='list-disc flex flex-col gap-2 pl-5'>
                  {
                    [
                      "Unclutter and organize your home",
                      "Neatly arrange drawers and cabinets",
                      "Keep pets outdoors or off the premises",
                      "Play soft music"
                    ].map((str, index) => (
                      <li className='md:text-sm lg:text-lg' key={index}> {str}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className='bg-black flex justify-center items-center'>
              <h2 className='text-white text-center font-serif text-[29px] xl:text-5xl '>Intentional<br/>Layout</h2>
            </div>
            <div className='mb-2 md:mb-0'>
              <img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/tvntwvzwsjyi3ndwtpux/image-022" alt="" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/lpaq7euqjebackcuwsdu/image-024" alt="" />
            </div>
            <div className='p-6 flex flex-col justify-center items-center'>
              <div>
                <ul className='list-disc flex flex-col lg:gap-3 gap-2 pl-5'>
                  {
                    [
                      "Unclutter and organize your home",
                      "Neatly arrange drawers and cabinets",
                      "Keep pets outdoors or off the premises",
                      "Play soft music"
                    ].map((str, index) => (
                      <li className='md:text-base lg:text-lg' key={index}> {str}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Section3