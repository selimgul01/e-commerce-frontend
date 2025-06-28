import React from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const Counter = () => {
  return (
    <div className="flex items-center justify-between border border-gray-300 px-2  rounded-lg cursor-pointer">
      <CiCircleMinus size={25} />
      <p className=" font-semibold w-8  h-8 text-center content-center"> 10 </p>
      <CiCirclePlus size={25} />
    </div>
  );
};

export default Counter;
