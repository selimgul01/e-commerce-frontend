import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { IoStar } from "react-icons/io5";
import { Label } from "../ui/label";
import Rating from "./Rating";
const CommentModal = ({ item }) => {
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  console.log("item,", item);

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Ürünü Değerlendir</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ürünü Değerlendir</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col mt-5">
              <div className="flex items-center space-x-2">
                <img
                  src={item.product.image}
                  alt=""
                  className="w-[90px] h-[90px] bg-gray-200 rounded-full object-contain"
                />
                <div className="">
                  <p className="font-bold">{item.product.title}</p>
                  <p>{item.product.description}</p>
                  <p>{item.size}</p>
                </div>
              </div>

              <div className="flex items-center space-x-10 pt-10">
                <p className="text-xl font-semibold">Ürünü Puanla</p>
                <Rating/>
              </div>
              <div className="pt-8 flex flex-col space-y-2">
                <Label>Yorumunuz</Label>
                <textarea className="h-[100px] w-full outline-none border border-gray-300 rounded-lg p-3" placeholder="Ürünün hem fiyatı uygun hem de göründüğü gibi kaliteli bir ürün." maxlength="2000" minlength="0"></textarea>
              </div>
              <Button className="mt-5">Yorum Yap</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CommentModal;
