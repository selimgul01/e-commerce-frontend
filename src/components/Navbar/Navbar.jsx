import { Search } from "lucide-react";
import React from "react";
import { IoPersonOutline, IoHeartOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import NavbarBottom from "./NavbarBottom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between py-5 px-10">
        <div className="">ECOMMERCE</div>

        <div className="flex items-center border border-gray-300 py-1 px-3 w-1/3 space-x-3 hover:shadow-xl transition-all cursor-pointer ">
          <Search />
          <input
            type="text"
            className="w-full outline-none placeholder:text-sm"
            placeholder="Hadi gel aradığını hızlıca bulalım"
          />
        </div>

        <div className="flex items-center space-x-5 ">
          <IoPersonOutline
            size={25}
            className="cursor-pointer hover:scale-105 transition-all"
          />
          <IoHeartOutline
            size={25}
            className="cursor-pointer hover:scale-105 transition-all"
          />
          <HiOutlineShoppingBag
            size={25}
            className="cursor-pointer hover:scale-105 transition-all"
          />
        </div>
      </div>
      <NavbarBottom/>
    </>
  );
};

export default Navbar;
