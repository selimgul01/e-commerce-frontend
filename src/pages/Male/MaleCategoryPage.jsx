import React, { useEffect } from "react";
import MaleCategory from "./MaleCategory";
import ProductCard from "@/components/Product/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "@/redux/product/productSlice";
import toast from "react-hot-toast";
import { clearFeedback } from "@/redux/favorite/favoriteSlice";

const MaleCategoryPage = () => {


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
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="container m-auto w-full mt-10">
      <MaleCategory />
      <div className=" my-20 grid grid-cols-4 gap-5">
        {products?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default MaleCategoryPage;
