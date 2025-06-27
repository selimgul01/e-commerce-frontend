import { Button } from "@/components/ui/button";
import React from "react";
import { IoStar } from "react-icons/io5";

const ProductDetailPage = () => {
  return (
    <div className="container m-auto flex justify-center space-x-16 mt-10 ">
      <img className=" w-[500px] h-[700px] border  col-end-2 " src="" alt="" />
      <div className=" flex flex-col space-y-2 ">
        <p className="text-slate-800 font-semibold text-2xl">Mustang</p>
        <p>Mustang Siyah Erkek Loose Fit Baskılı T-Shirt M4WM-TST-1985</p>
        <p>794,95 TL</p>
        <div className="flex items-center space-x-1 ">
          <IoStar className="text-blue-600" />
          <IoStar className="text-blue-600" />
          <IoStar className="text-blue-600" />
          <IoStar className="text-blue-600" /> 
          <IoStar className="text-blue-600"/>
        </div>
        <Button className="w-full">Sepete Ekle</Button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
