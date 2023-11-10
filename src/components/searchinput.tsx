import { Search } from 'lucide-react'
import React from 'react'

type SearchContextP = {
  search: string | null,
  show: boolean,
  setSearch: React.Dispatch<React.SetStateAction<string>>
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchContext = React.createContext<SearchContextP | null>(null)


export const SearchBar: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [search, setSearch] = React.useState("")
  const [show, setShow] = React.useState<boolean>(false)
  return (
    <SearchContext.Provider value={{show, search, setSearch, setShow}}>
      {children}
    </SearchContext.Provider>
  )
}
const SearchInput = () => {
  const {setSearch, setShow, search} = React.useContext(SearchContext) as SearchContextP
  return (
    <>
      <div className='flex text-white items-center gap-1'>
        <Search size="1rem" className='font-bold'/>
        <input type="text" value={search as string} onChange={(e) => {
          const {value} = e.target
          if(!value.trim()){
            setShow(false)
          }
          else setShow(true)

          setSearch(e.target.value)
        }} 
      
          className='text-sm tracking-wide bg-transparent w-1/2 px-2 focus-visible:outline-none' placeholder="Search by Address or Area" />
      </div>
    </>
  )
}

export const SearchList = () => {
  const {show, search} = React.useContext(SearchContext) as SearchContextP
  return (
    <div className={`${show ? '' : 'hidden'} absolute bottom-full bg-[#525252] w-[75%]`}>
      <div className='p-6 overflow-hidden break-words'>
        <p className='text-xs'>Search for: {search}</p>
        <div className='pt-4'>
          <a className='text-base'>Home search</a>
        </div>
      </div>
    </div>
  )
}

export default SearchInput