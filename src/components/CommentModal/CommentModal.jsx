import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogClose,
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
import { createReview, resetReviewStatus } from "@/redux/review/reviewSlice";
import toast from "react-hot-toast";
const CommentModal = ({ item }) => {
  const { message } = useSelector((state) => state.review);
  const dispatch = useDispatch();

  const [ratingData, setRatingData] = useState(0)
  const [comment, setComment] = useState("")

  console.log("message", message)

  const commentChangeHandler = (e) => {
    setComment(e.target.value)
  }

  const handleClick = () => {
     dispatch(createReview({productId: item.product._id, comment: comment , rating:ratingData }))
  }

  useEffect(() => {
  if (message) {
    toast.success(message, {
      id: "review-success-toast", 
    });
    dispatch(resetReviewStatus());
  }
}, [message]);

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
                <Rating setRatingData = {setRatingData} />
              </div>
              <div className="pt-8 flex flex-col space-y-2">
                <Label>Yorumunuz</Label>
                <textarea onChange={commentChangeHandler} className="h-[100px] w-full outline-none border border-gray-300 rounded-lg p-3" placeholder="Ürünün hem fiyatı uygun hem de göründüğü gibi kaliteli bir ürün." maxlength="2000" minlength="0"></textarea>
              </div>
              <DialogClose>
                <Button onClick = {handleClick} className="mt-5">Yorum Yap</Button>
              </DialogClose>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CommentModal;
