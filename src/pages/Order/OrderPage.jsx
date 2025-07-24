import { fetchOrder } from "@/redux/order/orderSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Accordion,
  AccordionContent, 
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";
import CommentModal from "@/components/CommentModal/CommentModal";

const OrderPage = () => {
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchOrder());
  }, [dispatch]);

  console.log("orders:", orders);

  return (
    <div className="container m-auto my-10  ">
      {orders?.map((order) => (
        <div key={order._id} className="border p-5 rounded-xl bg-[#EEEEEE] mt-5">
          <Accordion className="w-full" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger  className="grid grid-cols-5">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-sm text-slate-500">Sipariş Tarihi</p>
                  <p className="text-sm text-slate-700">
                    {order.createdAt.substring(0, 10)}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <p className="text-sm text-slate-500">Sipariş Özeti</p>
                  <p className="text-sm text-slate-700">
                    1 Teslimat , {order.items.length} Ürün
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <p className="text-sm text-slate-500">Alıcı</p>
                  <p className="text-sm text-slate-700">
                    {order.shippingAddress.fullName}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-sm text-slate-500">Tutar</p>
                  <p className="text-sm text-slate-700">
                    {order.totalPrice} TL
                  </p>
                </div>
                
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-5 ">
                  {order.items.map((item) => (
                    <div key={item._id} className=" grid grid-cols-2 space-x-5  mt-5 cursor-pointer">
                      <div
                        onClick={() => navigate(`/detay/${item.product._id}`)}
                        className="flex space-y-2 max-w-[600px]"
                      >
                        <div className="flex">
                          <img
                            className="w-[90px] h-[90px] bg-gray-200 rounded-full object-contain"
                            src={item?.product?.image}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col space-y-1 pl-3">
                          <p className="text-slate-600 font-bold">
                            {item?.product?.title}
                          </p>
                          <p className="text-slate-500 ">
                            {item?.product?.description}
                          </p>
                          <p className="text-slate-500 ">{item?.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center ">
                        <CommentModal item = {item} />
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
