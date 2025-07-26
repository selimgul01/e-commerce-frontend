import Reviews from "@/components/Reviews/Reviews";
import { Button } from "@/components/ui/button";
import { addToCart, clearStatus } from "@/redux/cart/cartSlice";
import { getProductById } from "@/redux/product/productSlice";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoStar } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const [size, setSize] = useState("S");

  const dispatch = useDispatch();

  const { id } = useParams();
  const { singleProduct } = useSelector((state) => state.product);
  const { status, feedbackMessage } = useSelector((state) => state.cart);

  const token = localStorage.getItem("token");


  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  if (token) {
    useEffect(() => {
      if (status === "success" && feedbackMessage) {
        toast.success(feedbackMessage);
        dispatch(clearStatus());
      } else if (status === "error" && feedbackMessage) {
        toast.error(feedbackMessage);
        dispatch(clearStatus());
      }
    }, [status, dispatch, feedbackMessage]);
  }

  const submitHandler = () => {
    if (token) {
      dispatch(addToCart({ productId: id, quantity: 1, size }));
    }else{
      toast.error("Önce Giriş Yapmalısın")
    }
  };

  return (
    <div className="container m-auto">
      <div className="flex lg:flex-row lg:justify-center flex-col  mt-10 lg:items-start  items-center lg:space-x-10 space-y-5 ">
        <img
          className=" lg:w-[500px] lg:h-[700px] md:w-[550px] md:h-[700px]  border  col-end-2  "
          src={singleProduct?.image}
          alt=""
        />
        <div className=" flex flex-col space-y-5  lg:max-w-[550px]  w-full">
          <p className="text-slate-800 font-bold xl:text-3xl lg:text-2xl md:text-xl">
            {singleProduct?.title}
          </p>
          <p className="lg:text-xl  font-semibold">{singleProduct?.description}</p>
          <div className="flex items-end space-x-4">
            <p
              className={`${
                singleProduct?.discountprice
                  ? "text-slate-400 text-lg line-through "
                  : " font-semibold"
              }`}
            >
              {singleProduct?.price} TL
            </p>
            {singleProduct?.discountprice && (
              <p className="text-red-700 font-semibold">
                {" "}
                {singleProduct?.discountprice} TL
              </p>
            )}
          </div>
          <div className="flex items-center space-x-3 ">
            <div className="flex items-center space-x-1">
              {singleProduct?.averageRating ? (
                Array(Math.round(singleProduct?.averageRating))
                  .fill()
                  .map((_, i) => <IoStar key={i} className="text-blue-600" />)
              ) : (
                <div></div>
              )}
            </div>

            <div className="flex items-center text-slate-600 text-sm  border-b-2 border-slate-600">
              {singleProduct?.numReviews === 0 ? <p className=" pl-1">Bu ürün henüz değerlendirilmedi</p> : 
              <div className=" flex items-center">
                <p>{singleProduct?.numReviews}</p>
                <p className=" pl-1">değerlendirme</p>
              </div> }
            </div>
          </div>

          <label htmlFor="" className="text-slate-800 font-semibold">
            Beden Seçiniz
          </label>
          <select
            onChange={(e) => setSize(e.target.value)}
            name="size"
            id="size"
            className="max-w-[150px] text-center outline-none border border-gray-300 p-1 rounded-lg"
          >
            <option value="" disabled={true}>
              Beden Seç
            </option>
            {singleProduct?.sizes?.map((size, i) => (
              <option key={i} value={size}>
                {size}
              </option>
            ))}
          </select>
          <Button onClick={submitHandler} className="w-full">
            Sepete Ekle
          </Button>
        </div>
      </div>

      <Reviews id={id} />
    </div>
  );
};

export default ProductDetailPage;
