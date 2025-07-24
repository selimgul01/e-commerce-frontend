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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/auth/authSlice";
import toast from "react-hot-toast";

const Navbar = ({items, favorites, isLoading}) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const logoutHandler = () => {
    dispatch(logout());
    toast.success("Çıkış Başarılı");
    !isLoading && navigate("/giris-yap");
  };

  return (
    <>
      <div className="flex items-center justify-between py-5 px-10">
        <div onClick={() => navigate("/")} className="text-sm md:text-lg lg:text-xl xl:text-2xl">
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

        <div className="flex items-center space-x-5  ">
          <DropdownMenu className="outline-none">
            <DropdownMenuTrigger>
              <IoPersonOutline  className="lg:text-2xl text-xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-lg">Hesabım</DropdownMenuLabel>
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
          </DropdownMenu>
          <div className="flex items-center">
            <IoHeartOutline
              onClick={() => navigate("/favoriler")}
              size={25}
              className="cursor-pointer hover:scale-105 transition-all"
            />

            { favorites?.items?.length > 0 && <p className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-800  text-white text-sm">
              {favorites?.items?.length}
            </p>}
          </div>

          <div className="flex items-center">
            <HiOutlineShoppingBag
              onClick={() => navigate("/sepet")}
              size={25}
              className="cursor-pointer hover:scale-105 transition-all relative"
            />
           { items?.length > 0 &&  <p className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-800  text-white text-sm">
              {items?.length}
            </p>}
          </div>
        </div>
      </div>
      <NavbarBottom />
    </>
  );
};

export default Navbar;
