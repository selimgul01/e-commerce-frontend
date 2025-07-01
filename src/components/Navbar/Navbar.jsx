import { Search } from "lucide-react";
import React from "react";
import { IoPersonOutline, IoHeartOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import NavbarBottom from "./NavbarBottom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const {items} = useSelector(state => state.cart)

  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-between py-5 px-10">
        <div onClick={() => navigate("/")} className="">
          ECOMMERCE
        </div>

        <div className="flex items-center border border-gray-300 py-1 px-3 w-1/3 space-x-3 hover:shadow-xl transition-all cursor-pointer ">
          <Search />
          <input
            type="text"
            className="w-full outline-none placeholder:text-sm"
            placeholder="Hadi gel aradığını hızlıca bulalım"
          />
        </div>

        <div className="flex items-center space-x-5 ">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <IoPersonOutline size={25} />{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <IoHeartOutline
            size={25}
            className="cursor-pointer hover:scale-105 transition-all"
          />
          <div className="flex items-center">
            <HiOutlineShoppingBag
              onClick={() => navigate("/sepet")}
              size={25}
              className="cursor-pointer hover:scale-105 transition-all relative"
            />
            <p className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-800  text-white text-sm">{items.length}</p>
          </div>
        </div>
      </div>
      <NavbarBottom />
    </>
  );
};

export default Navbar;
