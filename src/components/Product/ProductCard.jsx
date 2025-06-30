import React from "react";
import { IoStar } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {

  const navigate = useNavigate()

  return (
    <div onClick={()=> navigate(`/detay/${product._id}`)} className=" w-[350px] h-[450px] flex flex-col space-y-5 cursor-pointer hover:shadow-xl transition-all delay-100 p-3">
      <img
        className="w-full h-1/2 object-contain"
        src={product.image}
        alt=""
      />
      <div className="flex flex-col space-y-2">
        <p className="text-xl text-slate-800 font-semibold">
          {product.title}
        </p>
        <p className="text-sm text-slate-600 font-semibold">
          {product.description}
        </p>
        <div className="flex items-center space-x-1">
                    <IoStar className="text-blue-600" />
                    <IoStar className="text-blue-600" />
                    <IoStar className="text-blue-600" />
                    <IoStar className="text-blue-600" /> 
                    <IoStar className="text-blue-600"/>
                  </div>
        <p>{product.price} TL</p> 
      </div>
    </div>
  );
};

export default ProductCard;
