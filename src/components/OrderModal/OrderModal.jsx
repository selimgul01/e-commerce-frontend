import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { clearStatus, createOrder, fetchOrder } from "@/redux/order/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/redux/cart/cartSlice";
import toast from "react-hot-toast";

const OrderModal = () => {

  const {success,orders,error} = useSelector(state => state.order)
  const dispatch = useDispatch()

  const [shippingData,setShippingData] = useState({ fullName:"", city:"", street:"", phone:"" })

  useEffect(()=>{
    if (success) { 
      dispatch(clearCart())
      toast.success("Siparişiniz Alındı")
      dispatch(clearStatus())
    }
  },[success,error,dispatch])


  useEffect(()=>{
    dispatch(fetchOrder())
  },[dispatch])

  console.log("success",success)
  console.log("shippingData",shippingData)


  const shippingDataChangeHandler = (e) => {
    setShippingData((prev)=>({...prev, [e.target.name]: e.target.value})) 
  }

  const orderCreateHandler = () => {
    dispatch(createOrder({shippingAddress:shippingData}));
  };


  return (
    <Dialog>
      <form action="">
        <DialogTrigger asChild>
          <Button className="w-full"> Sepeti Onayla </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle className="text-center">Sipariş Oluştur</DialogTitle>
          <div className="grid gap-4 mt-4">
            <div className="grid gap-3">
              <Label htmlFor="fullName">İsim Soyisim</Label>
              <Input onChange={shippingDataChangeHandler} name="fullName"  />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="city">Şehir</Label>
              <Input onChange={shippingDataChangeHandler} name="city" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="street">Sokak</Label>
              <Input onChange={shippingDataChangeHandler} name="street" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phone">Telefon</Label>
              <Input onChange={shippingDataChangeHandler}  name="phone" />
            </div>
          </div>
          <DialogFooter>
          <DialogClose asChild>
            <Button onClick={orderCreateHandler} className="w-full">
              Siparişi Oluştur
            </Button>
          </DialogClose>
          </DialogFooter>
          
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default OrderModal;
