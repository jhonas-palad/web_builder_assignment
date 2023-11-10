
const Section5 = () => {
  return (
    <section className='bg-black bg-fifth-section bg-no-repeat bg-center bg-cover'>
      <div className='p-10 md:py-[60px] md:px-[40px] lg:p-[120px] text-white'>
        <h2 className='font-serif text-center'>The Buying Process</h2>
        <div className='bg-black/50 py-6 rounded-sm'>
          <div className='flex flex-wrap relative'>
 
              <div className='hidden lg:block absolute h-full w-[1px] bg-white/60 left-[33%] -translate-x-[33%]'/>
              <div className='hidden lg:block absolute h-full w-[1px] bg-white/60 right-[33%] -translate-x-[33%]'/>
              <div className='hidden md:block lg:hidden absolute h-full w-[1px] bg-white/60 left-[50%] -translate-x-[50%]'/>
              
              {
                [
                  {count: 1, desc: "Initial Consultation & Planning"},
                  {count: 2, desc: "Search for a home & Get Pre-Approved"},
                  {count: 3, desc: "Submit an offer"},
                  {count: 4, desc: "Complete Settlement process"},
                
                ].map(({count, desc}, key) => (
                  <div key={key} className='w-full md:w-1/2 lg:w-1/3  text-center p-6 sm:p-[28px] gap-4'>
                    <h4 className='text-6xl font-serif font-light'>{count}</h4>
                    <div className='text-lg uppercase font-semibold'>
                      {desc}
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section5