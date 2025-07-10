import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "desktop-34-1_1750051617.webp",
  "slider-copy-4-3_1749620671.webp",
  "garanti-slider-copy-9_1750401841.webp",
];

const Hero = () => {
  return (
    <div className="container m-auto mt-10 ">
      <Carousel className="w-full">
        <CarouselContent >
          {images.map((image, i) => (
            <CarouselItem key={i}>
              <div className="w-full h-1/4 flex items-baseline justify-center ">
                <img src={`/hero/${image}`} alt="" className="" />
                
              </div>
              
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Hero;
