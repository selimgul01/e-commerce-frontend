import React from "react";
import { IoStar } from "react-icons/io5";

const ReviewsItem = () => {
  return (
    <div className="flex items-center space-x-5 border-b pt-10 pb-5">
      <div className=" flex items-center justify-center border rounded-full w-[72px] h-[72px] bg-[#EEEEEE] font-bold text-slate-500 text-xl">
        SG
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-1">
          <IoStar className="text-blue-600" />
          <IoStar className="text-blue-600" />
          <IoStar className="text-blue-600" />
          <IoStar className="text-blue-600" />
          <IoStar className="text-blue-600" />
        </div>
        <div className="border rounded-xl bg-[#EEEEEE] w-[600px] h-[120px] p-5">
          <p>
            Hem kumaş kalitesi hem kesimi olarak tavsiye ederim, network ise
            gerisi hikaye. Kendi bedeninizi alın. 181 boy 82 kilo M aldım tam
            oturdu. Teşekürler network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsItem;
