import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "@/redux/cart/cartSlice";
import CartItem from "@/components/Cart/CartItem";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const CartPage = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const totalAmount = items.reduce((acc, item) => {
    return acc + item.quantity * item.product.price;
  }, 0);

  const orderHandler = () => {
    toast.success("Siparişiniz Alındı");
    dispatch(clearCart())
    dispatch()
  };
  return (
    <>
      {items.length > 0 ? (
        <div className="container m-auto mt-10 flex space-x-14 justify-center ">
          <div className="flex flex-col space-y-10">
            {items?.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>

          <div className=" border border-gray-300 rounded-lg p-5 flex flex-col space-y-5 w-60 max-h-52">
            <h1 className="text-xl font-semibold text-slate-800">
              Sipariş Özeti
            </h1>
            <div className="flex flex-col space-y-2">
              <p>
                Sepet Tutarı: <b>{totalAmount}₺</b>
              </p>
              <p>
                Kargo Ücreti: <b>150 ₺</b>
              </p>
            </div>

            <Dialog>
              <form action="">
                <DialogTrigger asChild>
                  <Button className="w-full"> Sepeti Onayla </Button>
                </DialogTrigger>
                <DialogContent>
                  
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="name-1">İsim Soyisim</Label>
                      <Input />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="username-1">Şehir</Label>
                      <Input />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="">Adres</Label>
                      <Input />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="">Telefon</Label>
                      <Input />
                    </div>
                  </div>
                  <Button onClick ={orderHandler} className="w-full"> Siparişi Oluştur</Button>
                </DialogContent>
              </form>
            </Dialog>
          </div>
        </div>
      ) : (
        <div className="container m-auto flex items-center justify-center mt-20 text-5xl text-slate-700">
          Sepetinize Henüz Ürün Eklemediniz
        </div>
      )}
    </>
  );
};


export default CartPage;
