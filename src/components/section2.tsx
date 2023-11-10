import React from 'react'
import SearchInput, { SearchBar, SearchList } from './searchinput'
import { ArrowRight } from 'lucide-react'
import { HeaderContext, HeaderContextP } from './header'
const Section2 = () => {
  const {hidden} = React.useContext(HeaderContext) as HeaderContextP
  return (
    <section  className={`-mt-14 bg-[#525252] sticky w-full z-10 text-white ${hidden?'top-0': 'top-[9%]' } transition-all duration-150`}>
        <div className='p-3 h-[59px] relative flex text-left items-center justify-center'>
          <div className='basis-[75%]'>
            <SearchBar>
              <SearchInput/>
              <SearchList/>
            </SearchBar>
          </div>
          <div className='self-stretch flex items-center absolute top-1/2 right-0 p-4 xl:pr-10 -translate-y-1/2'>
            <a className='hidden md:block text-sm font-sans font-bold mr-2'>BOOK AN APPOINTMENT</a>
            <ArrowRight size="1.2rem"/>
          </div>
        </div>
      </section>
  )
}

export default Section2