import { CheckCheck, HeartHandshake, ListTodo, Store, Tag } from "lucide-react"

const Section4 = () => {
  return (
    <section className=''>
      <div className='p-10 md:py-[60px] md:px-[40px] lg:p-[120px]'>
        <div className="md:bg-fourth-section rounded-lg p-10 bg-no-repeat bg-center bg-cover md:text-white">
          <h2 className='font-serif text-center'>The Selling Process</h2>
          <div className='flex flex-wrap justify-center relative gap-6 '>
            {/* <div className='hidden lg:block absolute h-full w-[1px] bg-white/60 left-[33%] -translate-x-[33%]'/>
            <div className='hidden lg:block absolute h-full w-[1px] bg-white/60 right-[33%] -translate-x-[33%]'/>
            <div className='hidden md:block lg:hidden absolute h-full w-[1px] bg-white/60 left-[50%] -translate-x-[50%]'/> */}
            
            {/* {
              [
                {Icon: ListTodo, desc: "Initial Consultation & Planning"},
                {Icon: Store, desc: "Devise & Execute Marketing Plan"},
                {Icon: HeartHandshake, desc: "Review offers & Reach agreement with buyer"},
                {Icon: CheckCheck, desc: "Complete Transaction process"},
                {Icon: Tag, desc: "After - Sale service"},
              
              ].map(({Icon, desc}, key) => (
                <div key={key} className='cursor-default hover:bg-black-1 hover:text-white md:hover:bg-white md:hover:text-black duration-150 border-[1px] shadow-sm flex-1 rounded-md flex justify-center items-center flex-col md:text-white p-6 sm:p-[28px] gap-4'>
                  <div className="">
                    <Icon size="2rem"/>
                  </div>
                  <div className='uppercase font-semibold'>
                    {key + 1}. {desc}
                  </div>
                </div>
              ))
            } */}
            {
              [
                {Icon: ListTodo, desc: "Initial Consultation & Planning"},
                {Icon: Store, desc: "Devise & Execute Marketing Plan"},
                {Icon: HeartHandshake, desc: "Review offers & Reach agreement with buyer"},
                {Icon: CheckCheck, desc: "Complete Transaction process"},
                {Icon: Tag, desc: "After - Sale service"},
              
              ].map(({Icon, desc}, key) => (
                  <div key={key} className='relative cursor-default hover:bg-black/80 hover:text-white bg-gray-200/20 backdrop-blur-sm md:backdrop-blur-none duration-150 border-[1px] shadow-sm flex-1 rounded-md flex justify-center items-center flex-col p-6 sm:p-[28px] gap-4'>
                    <div className="">
                      <Icon size="2rem"/>
                    </div>
                    <div className='uppercase font-semibold'>
                      {key + 1}. {desc}
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

export default Section4