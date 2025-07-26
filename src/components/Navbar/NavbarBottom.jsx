import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";

const categories = [
  "Kadın",
  "Erkek",
  "Çocuk",
  "Spor & Outdoor",
  "Ayakkabı & Çanta",
  "Kozmetik",
  "Ev & Yaşam & Elektronik",
  "Saat & Aksesuar",
  "Outlet",
  "Hediye",
  "Kampanyalar",
  "Markalar",
];

const NavbarBottom = () => {
  const navigate = useNavigate();
 
  return (
    <div className="container m-auto  mt-5 xl:overflow-hidden overflow-x-scroll">
      <div className="w-full flex items-center justify-center space-x-5 min-w-[1280px] pb-5">
        {categories?.map((category, i) => (
          <span
            onClick={() => navigate(`/${category}`)}
            key={i}
            className={`${
              category === "Kampanyalar" ? "text-red-500" : "text-slate-600"
            } cursor-pointer pb-1 hover:scale-105 transition-all `}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NavbarBottom;
