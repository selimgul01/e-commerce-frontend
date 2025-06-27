import React from 'react'
import Card from '../Card';


const images = [
  { image: "/coupon/Cherie_1750945257.webp", text:"4000TL'ye 400 TL Kupon", id: 1 },
  { image:  "/coupon/magna_1750945255.webp", text:"1500 TL'ye 300 TL Kupon", id: 2 },
  { image: "/coupon/mizuno_1750945253.webp", text:"3000 TL'ye 500 TL Kupon", id: 3 },
  { image: "/coupon/supermino_1750945247.webp", text:"2500 TL'ye 500 TL Kupon", id: 4},
];
const CouponSection = () => {
  return (
     <div className="container m-auto flex flex-col space-y-6 ">
      <div className="flex flex-col items-start space-y-3 ">
        <p className="text-gray-600 text-xl font-semibold">
          Kupon Avı Başladı 🦋
        </p>
        <p className="text-2xl text-slate-800 font-semibold">
          Acelet et, fırsatı kaçırma!
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 space-x-4 ">
        {images.map((image, i) => (
          <Card key={i} image={image} />
        ))}
      </div>
    </div>
  )
}

export default CouponSection
