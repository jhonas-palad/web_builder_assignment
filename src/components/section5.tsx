
import { ListTodo,  Search, Send, CheckCircle } from "lucide-react"
const Section5 = () => {
  return (
    <section className='bg-no-repeat bg-center bg-cover'>
      <div className='p-10 lg:p-[110px]'>
        <div className="bg-fifth-section p-10 rounded-lg text-white">
          <h2 className='font-serif text-center'>The Buying Process</h2>
          <div className='grid justify-stretch md:grid-cols-[1fr_1fr] relative gap-2'>

              {/* <div className='hidden lg:block absolute h-full w-[1px] bg-white/60 left-[33%] -translate-x-[33%]'/>
              <div className='hidden lg:block absolute h-full w-[1px] bg-white/60 right-[33%] -translate-x-[33%]'/>
              <div className='hidden md:block lg:hidden absolute h-full w-[1px] bg-white/60 left-[50%] -translate-x-[50%]'/> */}
              
              {
                [
                  {Icon: ListTodo, desc: "Initial Consultation & Planning"},
                  {Icon: Search, desc: "Search for a home & Get Pre-Approved"},
                  {Icon: Send, desc: "Submit an offer"},
                  {Icon: CheckCircle, desc: "Complete Settlement process"},

                ].map(({Icon, desc}, key) => (
                  <div key={key} className='relative md:min-h-[200px] cursor-default hover:bg-black/80 hover:text-white bg-gray-200/20 md:backdrop-blur-none duration-150 border-[1px] shadow-sm flex-1 rounded-md flex justify-center items-center flex-col p-6 sm:p-[28px] gap-4'>

                    <div className="">
                      <Icon size="2rem"/>
                    </div>
                    <div className='text-base uppercase font-semibold'>
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

export default Section5