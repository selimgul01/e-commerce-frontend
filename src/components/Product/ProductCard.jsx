import React from "react";

const ProductCard = () => {
  return (
    <div className=" w-[350px] h-[450px] flex flex-col space-y-5 cursor-pointer hover:shadow-xl transition-all delay-150 p-3">
      <img
        className="w-full h-1/2 object-contain"
        src="/maleCategoryImage/Jack-Jones-Yuvarlak-Yaka-Siyah-Erkek-T-Shirt_1725279414.webp"
        alt=""
      />
      <div className="flex flex-col space-y-2">
        <p className="text-xl text-slate-800 font-semibold">
          Altınyıldız Classics
        </p>
        <p className="text-sm text-slate-600 font-semibold">
          {" "}
          Erkek Bej Melanj Slim Fit Dar Kesim %100 Pamuk Bisiklet Yaka Kısa
          Kollu Tişört
        </p>
        <p>279,99 TL</p>
      </div>
    </div>
  );
};

export default ProductCard;
