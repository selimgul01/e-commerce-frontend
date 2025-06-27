import CouponSection from '@/components/Coupon/CouponSection'
import DiscountSection from '@/components/Discount/DiscountSection'
import Hero from '@/components/Hero/Hero'
import SummerDiscount from '@/components/SummerDiscount/SummerDiscount'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col space-y-24'>
      <Hero/>
      <DiscountSection/>
      <CouponSection/>
      <SummerDiscount/>
    </div>
  )
}

export default Home
