import Counter from "@/components/Counter";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/redux/cart/cartSlice";
import { getProductById } from "@/redux/product/productSlice";
import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const [size, setSize] = useState("S");


  const { id } = useParams();
  const { count } = useSelector((state) => state.counter);
  const { singleProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  console.log("size", size);
  console.log("count", count);


  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const submitHandler = () => {
    dispatch(addToCart({ productId:id, quantity:count, size  }));
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
            className="max-w-[100px] text-center outline-none border border-gray-300 p-1 rounded-lg"
          >
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="2XL">2XL</option>
          </select>
          <Counter id= {id} />
          <Button onClick={submitHandler} className="w-full">
            Sepete Ekle
          </Button>
        </div>
      </div>

      <div className="border border-gray-300 rounded-lg">
        <h1 className="text-center">DEĞERLENDİRMELER</h1>
        <div className=""></div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
