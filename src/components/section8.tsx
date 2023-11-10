const Section8 = () => {
  return (
    <section>
      <div className='p-10 lg:p-[110px]'>
        <div className='block md:grid md:grid-cols-2 items-center'>
          <div className='mb-10 md:mr-6'>
            <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/og3ockhby4gghmrdfseo/edited-p-19" alt="" />
          </div>
          <div className='flex flex-col wrap items-stretch'>

            <div className='flex gap-6 items-center justify-around'>
              {
                [
                  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/p4rjc7oqvxtccrdqejbt/image-060",
                  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ichuh7qj1rsu7mqxpl5p/image-069",
                  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/t3i3guvh1dnpwu8mrvuf/image-070"
                ].map((link, key)=> (
                  <img className='w-20 object-contain' key={key} src={link}/>
                ))
              }
            </div>
            <div className='text-center mt-6 text-sm lg:text-base'>
              <p>
                Leading Real Estate Companies of The World® & Luxury Portfolio International
              </p>
              <p>
                JRockcliff is a founding member of Luxury Portfolio International®, the luxury division of Leading Real Estate Companies of the World®. With more than 500 member firms around the world, Our luxury listings are exposed to a vast global audience and reach potential buyers and investors in over 50 countries.
              </p>
              <p className='font-serif font-bold text-center'>
                Who's Who in Luxury Real Estate
              </p>
              <p>
                Who&apos;s Who in Luxury Real Estate is a global collection of luxury real estate brokers.
              </p>
            </div>
          </div>
          
        </div>
        <div className='flex flex-col-reverse md:grid md:grid-cols-2 items-center '>
          <div className='flex flex-col wrap items-stretch'>
            <div className='text-center text-sm lg:text-base'>
              <p>Through our international affiliations, we have a strong presence in over 50 countries. Our luxury listings are sent to prominent international real estate sites, reaching over 70 million potential buyers and investors worldwide through our relationships with:</p>
            </div>
            <div className='flex gap-6 items-center justify-around'>
              {
                [
                  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/p4rjc7oqvxtccrdqejbt/image-060",
                  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ichuh7qj1rsu7mqxpl5p/image-069",
                  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/t3i3guvh1dnpwu8mrvuf/image-070"
                ].map((link, key)=> (
                  <img className='w-20 object-contain' key={key} src={link}/>
                ))
              }
            </div>
            <div className='text-center mt-6 text-sm lg:text-base'>
              <p>
                We also have several well-positioned affiliate offices in China, providing our clients with access to buyers in Hong Kong, Shanghai, and Beijing. 
              </p>
            </div>
          </div>
          <div className='my-10 md:ml-6'>
            <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ebvif7iqcx0lcjlvwyuz/edited-page-20" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section8