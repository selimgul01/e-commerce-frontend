import React from "react";
import { IoStar } from "react-icons/io5";

const ReviewsItem = ({review}) => {

 

  return (
    <div className="flex items-center  border-b pt-10 pb-5 min-w-[800px]">
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex items-center space-x-1">
          {
            Array(review.rating).fill().map((_, i) => <IoStar key={i} className="text-blue-600" />)
            
          } 
        </div>
        <div className="border rounded-xl bg-[#EEEEEE] max-w-[600px] p-5">
          <p className="text-slate-800  font-semibold">
            {review.comment}
          </p>
          <p className="w-full border-b border-gray-400 pt-4"> </p>
          <p className="text-sm text-slate-500  pt-4">Kullanıcı bu ürünü satın aldı</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsItem;
