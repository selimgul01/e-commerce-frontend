import DiscountSection from '@/components/Discount/DiscountSection'
import Hero from '@/components/Hero/Hero'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col '>
      <Hero/>
      <DiscountSection/>
    </div>
  )
}

export default Home
