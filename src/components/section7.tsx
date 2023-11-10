
const Section7 = () => {
  return (
    <section>
      <div className='p-10 lg:p-[110px]'>
        <div className='text-center'>
          <h2 className='font-serif text-4xl'>We Market Your Home to The World</h2>
          <p className='font-bold text-red-600'>
            Our Online Marketing Strategy
          </p>
          <p className='text-sm'>
            The Bay Area remains one of the world's most sought-after regions to live in, and when looking to sell, it is vital that your home be marketed online to audiences locally, nationally, and internationally.
          </p>
        </div>
        <div className='grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 gap-3 text-white'>
          {
            [
              {
                title: "Local Exposure",
                desc: "Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all Bay Area neighborhoods, we make sure your home receives targeted local exposure. When you list your home with Hansen Partners it will automatically appear on Nextdoor in your neighborhood."
              },
              {
                title: "National Exposure",
                desc: "We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and increasing exposure. We  will receive every inquiry about your property directly.",
              },
              {
                title: "International Exposure",
                desc: "To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent international real estate portals, including: Wall Street Journal, LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com,China.apr.com, Caimeiju, Juwai, Country Life UK"
              }
            ].map(({title, desc}, index) => (
              <div key={index} className={` ${index%2==0 ? 'bg-gradient-to-b from-black/70 to-black/80' : 'border-[1px] text-black'}  p-6 rounded-sm shadow-md duration-100`}>
                <h4 className='mb-1 font-bold text-xl'>{title}</h4>
                <p className='text-justify text-base lg:text-sm xl:text-base'>{desc}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className='w-full bg-black/10 py-16 mt-10'>
        <img className="mix-blend-multiply w-[450px] sm:w-[500px] mx-auto" src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/olcvsnzpdrd5tov8dbci/image-057"/>
      </div>
    </section>
  )
}

export default Section7