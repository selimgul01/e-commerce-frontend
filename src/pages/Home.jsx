import CouponSection from '@/components/Coupon/CouponSection'
import DiscountSection from '@/components/Discount/DiscountSection'
import Hero from '@/components/Hero/Hero'
import SummerDiscount from '@/components/SummerDiscount/SummerDiscount'
import { getCart } from '@/redux/cart/cartSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

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
