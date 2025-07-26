import React from "react";
import Card from "../Card";

const images = [
  {
    image: "/summer-discount/KK_favori_1_1750917271.webp",
    text: "%35'e Varan İndirim",
    id: 1,
  },
  {
    image: "/summer-discount/KK_favori_2_1750917268.webp",
    text: "699,99 TL'den Başlayan Elbiseler",
    id: 2,
  },
  {
    image: "/summer-discount/KK_favori_3_1750917266.webp",
    text: "Çantalarda %50'ye Varan İndirim",
    id: 3,
  },
  {
    image: "/summer-discount/KK_favori_4_1750917262.webp",
    text: "279,95 TL'den Başlayan Tişörtler",
    id: 4,
  },
];
const SummerDiscount = () => {
  return (
    <div className="container m-auto   ">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col items-start space-y-3 ">
          <p className="text-gray-600 text-xl font-semibold">
            Fırsat Alarmı 🚨⏰{" "}
          </p>
          <p className="text-2xl text-slate-800 font-semibold">
            %40'a varan indirimi kaçırma!
          </p>
        </div>
        <div className="overflow-x-scroll pb-2">
          <div className="flex items-center justify-between space-x-4  min-w-[870px]">
            {images.map((image, i) => (
              <Card key={i} image={image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerDiscount;
