import { Button } from "@/components/ui/button";
import { fetchOrder } from "@/redux/order/orderSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const OrderPage = () => {
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrder());
  }, [dispatch]);

  console.log("orders:", orders);

  return (
    <div className="container m-auto mt-10  ">
     

      {orders?.map((order) => (
        <div className="border p-5 rounded-xl bg-[#EEEEEE] mt-5">
          <div className="grid grid-cols-6 ">
            <img
              className="w-[90px] h-[90px] bg-gray-200 rounded-full object-contain"
              src={order.items[0].product.image}
              alt=""
            />
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-slate-500">Sipariş Tarihi</p>
              <p className="text-sm text-slate-700">{order.createdAt.substring(0,10)}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-slate-500">Sipariş Özeti</p>
              <p className="text-sm text-slate-700">1 Teslimat,{order.items.length} Ürün</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-slate-500">Alıcı</p>
              <p className="text-sm text-slate-700">{order.shippingAddress.fullName}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-slate-500">Tutar</p>
              <p className="text-sm text-slate-700">{order.totalPrice} TL</p>
            </div>
            <Button>Sipariş Detayı</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
