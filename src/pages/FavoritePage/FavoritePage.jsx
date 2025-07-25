import ProductCard from "@/components/Product/ProductCard";
import { clearFeedback, getFavorites } from "@/redux/favorite/favoriteSlice";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const FavoritePage = () => {
  const { favorites, status, feedbackMessage } = useSelector(
    (state) => state.favorite
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  useEffect(() => {
    if (status === "success" && feedbackMessage) {
      toast.success(feedbackMessage);
      dispatch(clearFeedback());
    } else if (status === "error" && feedbackMessage) {
      toast.error(feedbackMessage);
      dispatch(clearFeedback());
    }
  }, [feedbackMessage, status, dispatch]);

  console.log("favorites", favorites);

  return (
    <div className="container m-auto mt-10">
      {favorites?.items?.length > 0 ? (
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 space-x-3">
          {favorites?.items?.map((product) => (
            <ProductCard product={product.product} />
          ))}
        </div>
      ) : (
        <div className="container m-auto flex items-center justify-center mt-20 text-5xl text-slate-700">
          Henüz Favori Ürünlerinizi Eklemediniz
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
