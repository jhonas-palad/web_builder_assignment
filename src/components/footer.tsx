import { Facebook, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer>
      <div className='py-10 md:pt-[91px] md:pb-[66px]'>
        <div className='px-10 grid lg:grid-cols-2 gap-4'>
          <div className=''>
            <div>
              <h2 className='font-serif text-3xl'>Julie Hansen Partnership</h2>
              <p>
              An elite group of the East Bay&apos;s most talented and visionary real estate professionals believed buyers and sellers deserved more from their real estate company. More service. More resources. More integrity. More global reach. In a word, more of everything people should expect when they buy or sell their homes.
              </p>
            </div>
            <div>
              <h3 className='uppercase font-bold'>Address</h3>
              <p>
                4733 Chabot Drive #100<br/>
                Pleasanton, CA 94588
              </p>
              <p>
                Julie Hansen-Orvis | CA DRE# 00934447
              </p>
            </div>
            <div>
              <h3 className='uppercase font-bold'>Contact Information</h3>
              <p>
              (925) 980-4925<br/>
              hansenpartners.re@gmail.com
              </p>
            </div>
            <div className='flex gap-2'>
              <div className='rounded-full w-10 h-10 bg-black flex justify-center items-center'>
                <Facebook color='white'/>
              </div>
              <div className='rounded-full w-10 h-10 bg-black flex justify-center items-center'>
                <Linkedin color='white'/>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between mt-10'>
            <form className='text-center border-[1px] p-6'>
              <h3 className='font-serif text-3xl'>Newsletter</h3>
              <p className=''>Subscribe to our Newsletter for latest news and updates Stay tuned!</p>
              <input className='border-b-[1px] bg-transparent w-full p-2' placeholder='Enter your email address'/>
              <button className='px-6 py-4 text-white font-bold bg-black/90 mt-10'>Subscribe</button>
            </form>
            <div className="flex object-contain gap-4 mt-10">
              <img className='w-[50px] object-contain' src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zbesma34ygwklawiysod/dark-realtor-logo_x1vczu"/>
              <img className='w-[50px] object-contain' src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/siun2nwoji9w7v0mssvy/dark-equal-logo_gahxpa"/>
              <img className='w-[50px] object-contain' src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qje0mcix0r0qeoiikumu/sereno-logo"/>
            </div>
          </div>
        </div>

          <p className='mt-10 text-center text-sm text-black/40'>
            Website Designed & Developed by Luxury Presence<br/>
            Copyright 2023 | Privacy Policy
          </p>

      </div>
    </footer>
  )
}

export default Footer