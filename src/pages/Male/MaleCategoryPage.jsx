import React, { useEffect, useState } from "react";
import MaleCategory from "./MaleCategory";
import ProductCard from "@/components/Product/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "@/redux/product/productSlice";
import toast from "react-hot-toast";
import { clearFeedback } from "@/redux/favorite/favoriteSlice";

const MaleCategoryPage = ({search}) => {

  const [categorySearch,setCategorySearch] = useState("")

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { status, feedbackMessage } = useSelector((state) => state.favorite);

  useEffect(()=>{
    if (status === "success" && feedbackMessage) {
      toast.success(feedbackMessage)
      dispatch(clearFeedback())
    } else if (status === "error" && feedbackMessage){
      toast.error(feedbackMessage)
      dispatch(clearFeedback())
    }
  },[status,feedbackMessage,dispatch])

  useEffect(() => {
    if (search) {
    dispatch(getAllProducts({search:search}))
    } else if (categorySearch !== "Tüm Ürünler"){
      dispatch(getAllProducts({category:categorySearch}))
    }
    else{
      dispatch(getAllProducts())
    }
    
  }, [search, categorySearch,  dispatch]);

  return (
    <div className="container m-auto w-full mt-10">
      <MaleCategory categorySearch={categorySearch} setCategorySearch={setCategorySearch} />
      <div className=" my-20 grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-2">
        {products?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default MaleCategoryPage;
