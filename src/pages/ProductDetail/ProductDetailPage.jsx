import Counter from "@/components/Counter";
import Reviews from "@/components/Reviews/Reviews";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/redux/cart/cartSlice";
import { getProductById } from "@/redux/product/productSlice";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoStar } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const [size, setSize] = useState("S");


  const { id } = useParams();
  const { singleProduct } = useSelector((state) => state.product);
  const { isSuccessful } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log("size", size);


  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const submitHandler = () => {
    isSuccessful && toast.success("Ürün Sepete Eklendi")
    dispatch(addToCart({ productId:id, quantity: 1, size  }));
    
  };

  

  return (
    <div className="container m-auto">
      <div className=" flex justify-center space-x-16 mt-10 ">
        <img
          className=" w-[500px] h-[700px] border  col-end-2 "
          src={singleProduct?.image}
          alt=""
        />
        <div className=" flex flex-col space-y-5 ">
          <p className="text-slate-800 font-bold text-3xl">
            {singleProduct?.title}
          </p>
          <p className="text-xl font-semibold">{singleProduct?.description}</p>
          <p className="text-xl font-semibold">{singleProduct?.price} TL</p>
          <div className="flex items-center space-x-3 ">
            <div className="flex items-center space-x-1">
              <IoStar className="text-blue-600" />
              <IoStar className="text-blue-600" />
              <IoStar className="text-blue-600" />
              <IoStar className="text-blue-600" />
              <IoStar className="text-blue-600" />
            </div>

            <p className="text-slate-600 text-sm  border-b-2 border-slate-600">
              5 değerlendirme
            </p>
          </div>

          <label htmlFor="">Beden</label>
          <select
            onChange={(e) => setSize(e.target.value)}
            name="size"
            id="size"
            className="max-w-[150px] text-center outline-none border border-gray-300 p-1 rounded-lg"
          >
            <option value="" disabled={true} >Beden Seç</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="2XL">2XL</option>
          </select>
          <Button onClick={submitHandler} className="w-full">
            Sepete Ekle
          </Button>
        </div>
      </div>

      <Reviews/>
    </div>
  );
};

export default ProductDetailPage;
