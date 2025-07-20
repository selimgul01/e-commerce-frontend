import React, { useEffect } from 'react'
import ReviewsItem from './ReviewsItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReviews } from '@/redux/review/reviewSlice'

const Reviews = ({id}) => {
  const {reviews, loading} = useSelector(state => state.review)
  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(fetchReviews({productId: id}))

  },[dispatch])

  console.log("reviews",reviews)

  return (
    <div className=" border-gray-300  my-20 p-4">
        <h1 className="text-center text-3xl font-bold text-slate-600">YORUMLAR</h1>
        <h3 className='font-semibold text-slate-600 mt-5'>Bu ürün ile ilgili {reviews.length} Yorum var.</h3>
        {
          reviews?.map((review)=> (
            <ReviewsItem key={review._id} review={review} />

          ))
        }
        
      </div>
  )
}

export default Reviews
