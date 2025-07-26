import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline, IoStar } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToFavorite, removeFavorite } from "@/redux/favorite/favoriteSlice";

const ProductCard = ({ product }) => {
  const [onMouseLeave, setOnMouseLeave] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()



  const addFavoritesHandler = () => {
    dispatch(addToFavorite({productId:product._id}))
  }

  const removeFavoriteHandler = () => {
    dispatch(removeFavorite({productId:product._id})) 
  }


  return (
    <div
      
      className=" 2xl:w-[350px] 2xl:h-[450px] xl:w-[300px] xl:h-[400px] md:w-[300px] md:h-[370px] w-[400px] h-[470px] flex flex-col space-y-5 cursor-pointer hover:shadow-xl transition-all delay-100 p-3 relative"
    >
      <div onClick={() => navigate(`/detay/${product?._id}`)} className="w-full h-full space-y-2">
        <img
          className="w-full h-1/2 object-contain"
          src={product?.image}
          alt="product"
        />
        <div className="flex flex-col space-y-2">
          <p className="text-xl text-slate-800 font-semibold">
            {product?.title}
          </p>
          <p className="text-sm text-slate-600 font-semibold">
            {product?.description}
          </p>
          <div className="flex items-center space-x-1">
            { product?.averageRating > 1 && Array(Math.round(product?.averageRating && product?.averageRating))
              .fill()
              .map((_, i) => (
                <IoStar key={i} className="text-blue-600" />
              ))}
          </div>
          <div className="flex items-end space-x-4">
            <p
              className={`${
                product?.discountprice
                  ? "text-slate-400 text-lg line-through "
                  : " font-semibold"
              }`}
            >
              {product?.price} TL
            </p>
            {product?.discountprice && (
              <p className="text-red-700 font-semibold">
                {product?.discountprice} TL
              </p>
            )}
          </div>
        </div>
      </div>
      {
        location.pathname === "/favoriler" ? 
       <div onClick={removeFavoriteHandler}>
        <IoCloseCircleOutline className="absolute top-0 right-5 text-3xl hover:text-blue-700 cursor-pointer transition-all" />
        </div> 
      :

      <div
        onClick={addFavoritesHandler}
        onMouseEnter={() => setOnMouseLeave(true)}
        onMouseLeave={() => setOnMouseLeave(false)}
        className=" absolute right-5 top-0  flex items-center  justify-center w-8 h-8 border rounded-full bg-slate-100  hover:scale-110 transition-all delay-100"
      >
        {onMouseLeave && <IoMdHeart size={21} className="text-blue-800  " />}
        {!onMouseLeave && (
          <IoHeartOutline size={21} className="text-blue-800  " />
        )}
      </div>

      }

      
    </div>
  );
};

export default ProductCard;
