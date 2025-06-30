import { decrement, increment } from "@/redux/counter/counterSlice";
import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch()
  console.log("count",count)

  const decrementHandler = () => {
    dispatch(decrement()) 
  }

  const incrementHandler = () => {
    dispatch(increment())  
  }


  return (
    
    <div className="max-w-[100px] flex items-center justify-between border border-gray-300 px-2  rounded-lg cursor-pointer">
      <CiCircleMinus onClick={decrementHandler} size={25} />
      <p className=" font-semibold w-8  h-8 text-center content-center"> {count} </p>
      <CiCirclePlus onClick={incrementHandler} size={25} />
    </div>
    
  );
};

export default Counter;
