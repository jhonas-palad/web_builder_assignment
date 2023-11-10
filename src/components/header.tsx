import React from 'react'
import Logo from './logo'
import { Menu } from 'lucide-react'

type Links = string[];

const links : Links = [
  'Meet the team',
  'Our communities',
  'Home valuation',
  'Services',
  'Testimonials',
  'Contact us'
]

export type HeaderContextP = {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>
}
export const HeaderContext = React.createContext<HeaderContextP | null>(null)

export const HeaderProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [hidden, setHidden] = React.useState(true)
  return (
    <HeaderContext.Provider value={{hidden, setHidden}}>
      {children}
    </HeaderContext.Provider>
  )
}
const Header = () => {
  const {setHidden} = React.useContext(HeaderContext) as HeaderContextP
  const observedElement = React.useRef<HTMLDivElement>(null);
  const headerRef = React.useRef<HTMLElement>(null);
  React.useEffect(()=>{
    const observed = observedElement.current
    const header = headerRef.current
    const observer = new IntersectionObserver((entries : IntersectionObserverEntry[])=>{
        entries.forEach(item => {
          header?.classList.toggle("bg-black-1", !item.isIntersecting)
        })
    }, {})
    observer.observe(observed as Element)

  },[headerRef])
  React.useEffect(()=>{
    const header = headerRef.current
    let lastScrollTop = window.pageYOffset
    function eventHandler() {
      const currentScroll = window.pageYOffset
      if(currentScroll <= 100){
        return
      }
      if (lastScrollTop > currentScroll){
        console.log("DOWN")
        // // Scroll Down
        header?.classList.add('translate-y-0')
        header?.classList.remove('-translate-y-full')
        setHidden(false)
      } else {
        // Scroll Up
        console.log("UP")
        header?.classList.add('-translate-y-full')
        header?.classList.remove('translate-y-0')
        setHidden(true)
      }
      
      
      lastScrollTop = currentScroll
    }
    window.addEventListener("scroll",eventHandler)
    return ()=> window.removeEventListener("scroll", eventHandler)
  },[headerRef, setHidden])
  return (
    <>
      <div ref={observedElement} className='absolute top-0'/>
      <header ref={headerRef} className='top-0 z-[99] fixed w-full text-white p-2 transition-all duration-150'>
        <div className='flex align-center w-full h-[80px]'>
          <div className='flex-1 flex items-center justify-between'>
            <a>
              <Logo/>
            </a>
            <ul className='lg:flex-1 lg:flex justify-center gap-6 hidden p-4'>
              {
                links.map(label => (
                  <li className=''>
                    <a href='#' className='text-sm xl:text-base font-semibold block border-b-[1px] border-transparent hover:border-white transition-colors ease-linear'>{label}</a>
                  </li>
                ))
              }
            </ul>
            <button className='mr-4'>
              <Menu size="1.5rem" className=''/>
            </button>

          </div>
        </div>
      </header>
    </>
  )
}

export default Header