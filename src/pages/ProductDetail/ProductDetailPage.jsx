import { Button } from "@/components/ui/button";
import React from "react";
import { IoStar } from "react-icons/io5";

const ProductDetailPage = () => {
  return (
    <div className="container m-auto">
    <div className=" flex justify-center space-x-16 mt-10 ">
      <img className=" w-[500px] h-[700px] border  col-end-2 " src="" alt="" />
      <div className=" flex flex-col space-y-5 ">
        <p className="text-slate-800 font-bold text-3xl">Mustang</p>
        <p className="text-xl font-semibold">Mustang Siyah Erkek Loose Fit Baskılı T-Shirt M4WM-TST-1985</p>
        <p className="text-xl font-semibold">794,95 TL</p>
        <div className="flex items-center space-x-3 ">
          <div className="flex items-center space-x-1">
            <IoStar className="text-blue-600" />
            <IoStar className="text-blue-600" />
            <IoStar className="text-blue-600" />
            <IoStar className="text-blue-600" /> 
            <IoStar className="text-blue-600"/>
          </div>
          
          <p className="text-slate-600 text-sm  border-b-2 border-slate-600"> 5 değerlendirme</p>
          
        </div>

        <label htmlFor="">Beden</label>
          <select name="" id="">
            <option value="">2XL</option>
            <option value="">XL</option>
            <option value="">L</option>
            <option value="">M</option>
            <option value="">S</option>
            <option value="">XS</option>
          </select>
        <Button className="w-full">Sepete Ekle</Button>
      </div>
    </div>

    <div className="border border-gray-300 rounded-lg">
      <h1 className="text-center">DEĞERLENDİRMELER</h1>
      <div className="">
        
      </div>
    </div>
    </div>
  );
};

export default ProductDetailPage;
