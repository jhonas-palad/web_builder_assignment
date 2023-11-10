
const Section6 = () => {
  return (
    <section>
      <div className='p-10 lg:p-[110px] grid gap-5'>
        <div className='text-center relative md:flex md:flex-row-reverse md:text-right'>
          <div className='min-h-[75px] flex-grow-1 basis-full md:ml-6 '>
            <img className='py-[10px]' src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/azjfmtzx6evxpubynfci/edit-page-11r2"/>
          </div>
          <div className='min-h-[75px] flex-grow-1 basis-full relative flex flex-col justify-center'>
              <h3 className='font-serif text-center text-3xl'>Over 33 Years of Real Estate Success</h3>
              <p className='text-justify'>We provide every one of our clients with a level of service they won&apos;t find anywhere else. We give them what they need, often before they know they need it. In real estate, almost everything can be negotiated. When you choose Hansen Partners It is experience is 100% nonnegotiable. And it&apos;s an experience like no other.</p>
          </div>
        </div>
        <div className='text-center relative md:flex md:text-right'>
          <div className='min-h-[75px] flex-grow-1 basis-full md:mr-6 '>
            <img className='py-[10px]' src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/m5ea1kpipv5tiflnfx8t/edited-p-12"/>
          </div>
          <div className='min-h-[75px] flex-grow-1 basis-full relative flex flex-col justify-center'>
            <h3 className='font-serif text-center text-3xl'>We Want To Create An Unforgettable Experience For You...</h3>
            <p className='text-justify'>We combine data gained from your home&apos;s Comparative Market Analysis with local market research to create a marketing plan designed to help you meet your selling goals. Your&apos;s carefully designed plan will include a range of online, print, and other marketing tools targeted to the best-qualified pool of buyers. Successfully marketing a home in today&apos;s real estate environment requires a firm with experience and flexibility. Hansen Partners provides both.</p>
          </div>
        </div>
        <div className='text-center md:flex flex-row-reverse'>
          <div className='min-h-[75px] flex-grow-1 basis-full md:ml-6  relative'>
            <img className='py-[10px] xl:relative sticky top-[10%]' src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/fuammgjubhjfvgcqleef/edit-image-056"/>
          </div>
          <div className='min-h-[75px] flex-grow-1 basis-full relative flex flex-col justify-center'>
            <h3 className='font-serif text-3xl'>
              The <span className='border-b-2 border-red-600'>
                Hansen 
              </span> Partners Communications 
            </h3>
            <p className='text-justify'>
              We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening with your home. We are available at the with a click of your tablet.
            </p>
            <p className='text-left'>Benefits:</p>
            <ul className='pl-5 list-disc text-justify'>
              {
                [
                  "Review all documents and sign in the comfort of your home or anywhere.",
                  "Stay up to date on all marketing activities, review materials, photos, etc. in real time.",
                  "Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.",
                  "You have your own email assigned just for you and your common space to quickly write a note, or quickly send a video message to us for fast communication using our Bomb bomb video messaging system."
                ].map((str, key) => (
                  <li key={key}><p>{str}</p></li>
                ))
              }
            </ul>
            <p className='text-justify'>
            We believe that transparency and guiding you and your family through the process is key to having the best experience.  During these uncertain times. It is a good feeling to know you have some one with a proven track record you can count on.  We will be here to handle your needs during the Real Estate process.  We think of it before a need even arises. Because, that is just what we do.  Who you work with does matter! 
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Section6