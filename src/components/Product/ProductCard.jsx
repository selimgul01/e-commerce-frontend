import React from "react";
import { IoStar } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  console.log("product:", product);

  return (
    <div
      onClick={() => navigate(`/detay/${product._id}`)}
      className=" w-[350px] h-[450px] flex flex-col space-y-5 cursor-pointer hover:shadow-xl transition-all delay-100 p-3"
    >
      <img className="w-full h-1/2 object-contain" src={product.image} alt="" />
      <div className="flex flex-col space-y-2">
        <p className="text-xl text-slate-800 font-semibold">{product.title}</p>
        <p className="text-sm text-slate-600 font-semibold">
          {product.description}
        </p>
        <div className="flex items-center space-x-1">
          {Array(product.averageRating)
            .fill()
            .map((_, i) => (
              <IoStar key={i} className="text-blue-600" />
            ))}
        </div>
        <div className="flex items-end space-x-4">
          <p
            className={`${
              product.discountprice
                ? "text-slate-400 text-lg line-through "
                : " font-semibold"
            }`}
          >
            {product.price} TL
          </p>
          {product.discountprice && <p className="text-red-700 font-semibold"> {product.discountprice} TL</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
