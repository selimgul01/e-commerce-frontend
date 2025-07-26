import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearStatus, getCart } from "@/redux/cart/cartSlice";
import CartItem from "@/components/Cart/CartItem";
import toast from "react-hot-toast";
import { currencyFormatter } from "@/utils/CurrencyFormatter";
import OrderSummary from "@/components/Cart/OrderSummary";

const CartPage = () => {
  const { status, feedbackMessage, items } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    if (status === "success" && feedbackMessage) {
      toast.success("Ürün Sepetten Çıkarıldı");
      dispatch(clearStatus());
    }
  }, [status, feedbackMessage, dispatch]);

  const formatPrice = (price) => {
    if (price === null || price === undefined) return "";
    return currencyFormatter.format(price);
  };

  const totalAmount = items?.reduce((acc, item) => {
    return (
      acc +
      item.quantity *
        (item?.product?.discountprice
          ? item?.product?.discountprice
          : item?.product?.price)
    );
  }, 0);

  return (
    <>
      {items.length > 0 ? (
        <div className=" container m-auto  my-10 flex  lg:flex-row lg:justify-center flex-col  lg:space-x-14 space-y-14">
          <div className="flex items-center justify-center">
            <div className="flex flex-col space-y-10">
              {items?.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </div>
          </div>
          <div className=" flex items-start min-w-[200px]">
            <OrderSummary totalAmount={totalAmount} />
          </div>
        </div>
      ) : (
        <div className="container m-auto flex items-center justify-center mt-20 text-5xl text-slate-700 text-center">
          Sepetinize Henüz Ürün Eklemediniz
        </div>
      )}
    </>
  );
};

export default CartPage;
