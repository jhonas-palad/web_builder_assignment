import React from 'react'
type CardProps = {
  src: string;
  title: string;
  desc: string;
  className?: string;
}

export const Card : React.FC<CardProps>= ({title, src, desc, className}) => {
  return (
    <div className={`shadow-md text-center min-h-[75px] flex flex-col items-center ${className}`}>
      <img src={src} alt="" className='w-[50px] max-w-full'/>
      <div className='relative'>
        <h3 className='font-serif text-xl'>{title}</h3>
      </div>
      <div>
        <p className='text-sm md:text-base'>
        {desc}
        </p>
      </div>
    </div>
  )
}
const Section9 = () => {
  return (
    <section className='relative'>
      <div className='p-10 lg:p-[110px]'>
        <div>
          <h3 className='text-lg md:text-xl text-center'>Through our international affiliations, we have a strong presence in over 50 countries. Our luxury listings are sent to prominent international real estate sites, reaching over 70 million potential buyers and investors worldwide through our relationships with:</h3>
        </div>
        <div className=''>
          <div className='mx-auto relative lg:w-[500px] gap-6'>
            {/* <img className='w-[200px] md:w-[300px] md:absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[-1]' src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/vxnwvueubpgtfzn1k3cs/edited-p25"/> */}
            <img className='w-[300px] lg:w-[400px] z-[-1] mx-auto' src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/vxnwvueubpgtfzn1k3cs/edited-p25"/>
            <div className='grid md:grid-cols-2 md:grid-row-2 gap-4 mt-10'>

              {
                  [
                    {
                      title: "Responsive",
                      src: "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/rmtn3r5zpsljdsncbwa4/image-007",
                      desc: "I am always available via phone, text, or email.",
                      className: "border-[1px] relative lg:absolute lg:w-[200px] lg:top-14 lg:right-full p-2 bg-white rounded-lg shadow-lg"
                    }, 
                    {
                      title: "Syndication",
                      src: "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ks8ztlvw2b35q5qgs6xn/image-011",
                      desc: "I market your property locally, nationally, and internationally",
                      className: "border-[1px] relative lg:absolute lg:w-[200px] lg:bottom-14 lg:left-full p-2 bg-white rounded-lg shadow-lg"
                    },
                    {
                      title: "Virtual Tour",
                      src: "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zr3bugldblvebixagfs1/image-009",
                      desc: "Let's make your home stand out with a hight quality virtual tour",
                      className: "border-[1px] relative lg:absolute lg:w-[200px] lg:top-[20px] lg:-right-[100px] p-2 bg-white rounded-lg shadow-lg"
                    }, 
                    {
                      title: "Photography",
                      src: "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/dywgmsgzddtcsqxagbwh/image-013",
                      desc: "Beautiful, high-end photography is a central part of our marketing plan for your property",
                      className: "px-10 border-[1px] relative lg:px-2 lg:absolute lg:w-[200px] lg:bottom-[20px] lg:-left-[100px] p-2 bg-white rounded-lg shadow-lg"
                    }
                  ].map((value)=> (
                      <Card {...value}/>
                  ))
                }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section9