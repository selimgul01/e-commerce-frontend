import React from "react";
import OrderModal from "@/components/OrderModal/OrderModal";
import { currencyFormatter } from "@/utils/CurrencyFormatter";

const formatPrice = (price) => {
  if (price === null || price === undefined) return "";
  return currencyFormatter.format(price);
};
const OrderSummary = ({ totalAmount }) => {
  return (
    <div className=" border border-gray-300  p-5 flex flex-col  space-y-5 w-full ">
      <h1 className="text-xl font-semibold text-slate-800">Sipariş Özeti</h1>
      <div className="flex flex-col space-y-2">
        <p>
          Sepet Tutarı: <b>{formatPrice(totalAmount)}₺</b>
        </p>
        <p>
          Kargo Ücreti: <b>150 ₺</b>
        </p>
      </div>
      <OrderModal />
    </div>
  );
};

export default OrderSummary;
