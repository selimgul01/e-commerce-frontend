import ProductCard from "@/components/Product/ProductCard";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const FavoritePage = () => {
  return (
    <div className="container m-auto mt-10">
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 space-x-3">
        <div className="relative">
          <ProductCard />
          <IoCloseCircleOutline className="absolute top-0 right-10 text-3xl hover:text-blue-700 cursor-pointer transition-all" />
        </div>
        <div className="relative">
          <ProductCard />
          <IoCloseCircleOutline className="absolute top-0 right-10 text-3xl hover:text-blue-700 cursor-pointer transition-all" />
        </div>

      </div>
    </div>
  );
};

export default FavoritePage;
