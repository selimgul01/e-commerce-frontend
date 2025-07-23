import ProductCard from "@/components/Product/ProductCard";
import { getFavorites } from "@/redux/favorite/favoriteSlice";
import React, { useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const FavoritePage = () => {

  const {favorites} = useSelector(state => state.favorite)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getFavorites())
  },[dispatch])
  
  console.log("favorites",favorites)

  return (
    <div className="container m-auto mt-10">
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 space-x-3">
        {
          favorites?.items?.map((product)=>(
            
              <ProductCard product={product.product} />
              
            
          ))
        }
        

      </div>
    </div> 
  );
};

export default FavoritePage;
