import React from "react";
import Card from "../Card";

const images = [
  { image: "/discount/2-7_1750934554.webp", text:"Hemen Keşfet!", id: 1 },
  { image:  "/discount/3-9_1750934797.webp", text:"İndirimleri Kaçırma!", id: 2 },
  { image: "/discount/4_1750934623.webp", text:"Fırsatları Kaçırma!", id: 3 },
  { image: "/discount/6-1_1750934562.webp", text:"İndirimi Yakala!", id: 4},
];

const DiscountSection = () => {
  return (
    <div className="container m-auto flex flex-col space-y-6 ">
      <div className="flex flex-col items-start space-y-3 ">
        <p className="text-gray-600 text-xl font-semibold">
          Fırsat Alarmı 🚨⏰{" "}
        </p>
        <p className="text-2xl text-slate-800 font-semibold">
          %40'a varan indirimi kaçırma!
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 space-x-4">
        {images.map((image, i) => (
          <Card key={i} image={image} />
        ))}
      </div>
    </div>
  );
};

export default DiscountSection;
