import React, { useEffect } from "react";
import MaleCategory from "./MaleCategory";
import ProductCard from "@/components/Product/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "@/redux/product/productSlice";

// category: "Polo T-Shirt";
// createdAt: "2025-06-29T14:39:01.284Z";
// description: "Buratti % 100 Pamuk Regular Fit Düğmeli Polo Yaka T Shirt Erkek ";
// image: "https://statics-mp.boyner.com.tr/mnresize/1100/-/Boynerimages/8682105693817_2007527382_0.jpg?v=23331726";
// price: 400;
// stock: 25;
// title: "Buratti ";
// updatedAt: "2025-06-29T14:39:01.284Z";
// __v: 0;
// _id: "68615005b31f2da8e527cab6";

const MaleCategoryPage = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
console.log("products:", products)
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="container m-auto w-full mt-10">
      <MaleCategory />
      <div className=" my-20 grid grid-cols-4 gap-5">
        {
          products?.map((product)=>(
            <ProductCard product={product} key={product._id}  />

          ))
        }
      </div>  
    </div>
  );
};

export default MaleCategoryPage;
