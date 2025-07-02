import React from 'react'
import ReviewsItem from './ReviewsItem'

const Reviews = () => {
  return (
    <div className=" border-gray-300  my-20 p-4">
        <h1 className="text-center text-3xl font-bold text-slate-600">DEĞERLENDİRMELER</h1>
        <h3 className='font-semibold text-slate-600 mt-5'>Bu ürün ile ilgili 58 değerlendirme var.</h3>
        <ReviewsItem/>
        <ReviewsItem/>
        <ReviewsItem/>
      </div>
  )
}

export default Reviews
