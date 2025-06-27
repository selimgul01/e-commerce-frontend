import React from "react";
import MaleCategory from "./MaleCategory";
import ProductCard from "@/components/Product/ProductCard";


const MaleCategoryPage = () => {
  return (
    <div className="container m-auto w-full mt-10">
      <MaleCategory  />
      <div className=" my-10">

        <ProductCard/>
      </div>
    </div>
  );
};

export default MaleCategoryPage;
