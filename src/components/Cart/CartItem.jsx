import React, { useEffect } from "react";
import { FiTruck } from "react-icons/fi";
import Counter from "../Counter";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  clearStatus,
  decreaseQuantity,
  increaseQuantity, 
  removeFromCart,
} from "@/redux/cart/cartSlice";
import toast from "react-hot-toast";
import { currencyFormatter } from "@/utils/CurrencyFormatter";

const CartItem = ({ item }) => {
  
  const dispatch = useDispatch();


    const formatPrice = (price) => {
      if( price === null || price === undefined  ) return ""
      return currencyFormatter.format(price)
    }
  

  const incrementHandler = () => {
    dispatch(
      increaseQuantity({ productId: item.product._id, size: item.size })
    );
  }; 
  const decrementHandler = () => {
    dispatch(
      decreaseQuantity({ productId: item.product._id, size: item.size })
    );
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart({productId: item._id}));
  };



  return (
    <div className="border-b border-gray-300 flex lg:flex-row flex-col lg:items-center justify-between p-5 lg:space-x-10 space-y-5 shadow-xl select-none">
      <div className=" flex lg:flex-row flex-col lg:items-center lg:space-x-5 space-y-5">
        <img
          className="object-contain"
          src={item?.product?.image}
          alt=""
          width={100}
        />
        <div className=" flex flex-col space-y-2 max-w-[542px]">
          <h1 className=" text-slate-800 font-bold">{item?.product?.title}</h1>
          <div className="text-sm font-semibold text-slate-700">
            {item?.product?.description}
          </div>
          <div className="flex items-center ">
            <p className="text-slate-800 font-semibold">{item?.size}</p>
            <p className="text-slate-600 pl-2">beden</p>
          </div>
          <div className="flex items-center space-x-2">
            <FiTruck className="text-blue-800" />
            <p className="text-slate-600 text-sm">
              Şimdi sipariş verirsen 3 gün içinde kargoda.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <Counter
          decrementHandler={decrementHandler}
          incrementHandler={incrementHandler}
          quantity={item.quantity}
        />
      </div>

      <div className="flex items-center space-x-8 ">
        <p className=" font-semibold text-blue-800 cursor-pointer w-[60px] text-center ">
          
          {(item?.product?.discountprice ? item?.product?.discountprice : item?.product?.price) * item?.quantity} ₺
        </p>
        <div onClick={removeFromCartHandler} className=" w-[50px] h-[50px] content-center ">
          <div className=" hover:border-b hover:border-b-red-600 flex items-center justify-center cursor-pointer transition-all ">
            <p className="  text-red-700 pr-1">SİL</p>
            <MdDeleteOutline className="text-red-700" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
