import { Search } from "lucide-react";
import React, { useState } from "react";
import { IoPersonOutline, IoHeartOutline } from "react-icons/io5";
import { HiBars3BottomRight, HiOutlineShoppingBag } from "react-icons/hi2";
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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/auth/authSlice";
import toast from "react-hot-toast";
import { getAllProducts } from "@/redux/product/productSlice";

const Navbar = ({ items, favorites, isLoading, setSearch, search }) => {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchHandler = () => {
    dispatch(getAllProducts(search));
  };


  const logoutHandler = () => {
    dispatch(logout());
    toast.success("Çıkış Başarılı");
    !isLoading && navigate("/giris-yap");
  };

  return (
    <>
      <div className="flex items-center justify-between py-5 px-10 cursor-pointer">
        <div
          onClick={() => navigate("/")}
          className="lg:text-3xl text-lg font-bold text-red-500  pb-1 border-b-2 border-red-600"
        >
          
          Luxe Loom
        </div>

        <div className="hidden md:flex items-center border border-gray-300 py-1 px-3 lg:w-1/3 w-1/2 space-x-3 hover:shadow-xl transition-all cursor-pointer ">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="w-full outline-none placeholder:text-sm"
            placeholder="Hadi gel aradığını hızlıca bulalım"
          />
          <Search onClick={searchHandler} />
        </div>

        <div className="flex items-center space-x-5   ">
          <DropdownMenu className="outline-none">
            <DropdownMenuTrigger>
              <IoPersonOutline size={25} className=" cursor-pointer hover:scale-105 transition-all " />
            </DropdownMenuTrigger>

            {token ? (
              <DropdownMenuContent>
                <DropdownMenuLabel className="text-lg">
                  Hesabım
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-base cursor-pointer">
                  Profil
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigate("/siparislerim")}
                  className="text-base cursor-pointer"
                >
                  Siparişlerim
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base cursor-pointer">
                  Favorilerim
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={logoutHandler}
                  className="text-red-500 focus:text-red-800 transition-all cursor-pointer text-base"
                >
                  Çıkış Yap
                </DropdownMenuItem>
              </DropdownMenuContent>
            ) : (
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => navigate("/giris-yap")}
                  className="text-green-600 focus:text-green-800 transition-all cursor-pointer text-base"
                >
                  Giriş Yap
                </DropdownMenuItem>
              </DropdownMenuContent>
            )}
          </DropdownMenu>
          <div className="flex items-center">
            <IoHeartOutline
              size={25}
              onClick={() => navigate("/favoriler")}
              className="cursor-pointer hover:scale-105 transition-all "
            />

            {favorites?.items?.length > 0 && (
              <p className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-800  text-white text-sm">
                {favorites?.items?.length}
              </p>
            )}
          </div>

          <div className="flex items-center">
            <HiOutlineShoppingBag
              size={25}
              onClick={() => navigate("/sepet")}
              className="cursor-pointer hover:scale-105 transition-all relative "
            />
            {items?.length > 0 && (
              <p className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-800  text-white text-sm">
                {items?.length}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex md:hidden items-center justify-center w-full px-10 ">
        <div className="flex px-2 border border-gray-300 py-1 w-full space-x-3 hover:shadow-xl transition-all cursor-pointer">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="w-full outline-none placeholder:text-sm"
            placeholder="Hadi gel aradığını hızlıca bulalım"
          />
          <Search onClick={searchHandler} />
        </div>
      </div>
      <NavbarBottom />
    </>
  );
};

export default Navbar;
