import Counter from "@/components/Counter";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  return (
    <div className="container m-auto mt-10 flex space-x-14 ">
      
        <div className="flex flex-col space-y-10">
          <div className="border-b border-gray-300 flex items-center justify-between p-5 space-x-10 shadow-xl">
            <div className=" flex items-center space-x-5">
              <img
                src="/maleCategoryImage/Mavi-Erkek-Normal-Bel-Regular-Fit-Denim-Pantolon_1725279418.webp"
                alt=""
                width={100}
              />
              <div className="">
                <h1 className=" text-slate-800 font-semibold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing.
                </h1>
                <div className="flex items-center space-x-2">
                  <FiTruck className="text-blue-800" />
                  <p className="text-slate-600">
                    {" "}
                    Şimdi sipariş verirsen 3 gün içinde kapında.
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <Counter />
            </div>

            <div className="flex items-center space-x-8">
              <p className=" font-semibold text-blue-800 cursor-pointer  ">
                500TL
              </p>
              <div className="flex items-center cursor-pointer ">
                <p className=" text-red-700 font-semibold">SİL</p>
                <MdDeleteOutline className="text-red-700" size={20} />
              </div>
            </div>
          </div>

          <div className="border-b border-gray-300 flex items-center justify-between p-5 space-x-10 shadow-xl">
            <div className=" flex items-center space-x-5">
              <img
                src="/maleCategoryImage/Mavi-Erkek-Normal-Bel-Regular-Fit-Denim-Pantolon_1725279418.webp"
                alt=""
                width={100}
              />
              <div className="">
                <h1 className=" text-slate-800 font-semibold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing.
                </h1>
                <div className="flex items-center space-x-2">
                  <FiTruck className="text-blue-800" />
                  <p className="text-slate-600">
                    {" "}
                    Şimdi sipariş verirsen 3 gün içinde kapında.
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <Counter />
            </div>

            <div className="flex items-center space-x-8">
              <p className=" font-semibold text-blue-800 cursor-pointer  ">
                500TL
              </p>
              <div className="flex items-center cursor-pointer ">
                <p className=" text-red-700 font-semibold">SİL</p>
                <MdDeleteOutline className="text-red-700" size={20} />
              </div>
            </div>
          </div>
          
          <div className="border-b border-gray-300 flex items-center justify-between p-5 space-x-10 shadow-xl">
            <div className=" flex items-center space-x-5">
              <img
                src="/maleCategoryImage/Mavi-Erkek-Normal-Bel-Regular-Fit-Denim-Pantolon_1725279418.webp"
                alt=""
                width={100}
              />
              <div className="">
                <h1 className=" text-slate-800 font-semibold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing.
                </h1>
                <div className="flex items-center space-x-2">
                  <FiTruck className="text-blue-800" />
                  <p className="text-slate-600">
                    {" "}
                    Şimdi sipariş verirsen 3 gün içinde kapında.
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <Counter />
            </div>

            <div className="flex items-center space-x-8">
              <p className=" font-semibold text-blue-800 cursor-pointer  ">
                500TL
              </p>
              <div className="flex items-center cursor-pointer ">
                <p className=" text-red-700 font-semibold">SİL</p>
                <MdDeleteOutline className="text-red-700" size={20} />
              </div>
            </div>
          </div>

          <div className="border-b border-gray-300 flex items-center justify-between p-5 space-x-10 shadow-xl">
            <div className=" flex items-center space-x-5">
              <img
                src="/maleCategoryImage/Mavi-Erkek-Normal-Bel-Regular-Fit-Denim-Pantolon_1725279418.webp"
                alt=""
                width={100}
              />
              <div className="">
                <h1 className=" text-slate-800 font-semibold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing.
                </h1>
                <div className="flex items-center space-x-2">
                  <FiTruck className="text-blue-800" />
                  <p className="text-slate-600">
                    {" "}
                    Şimdi sipariş verirsen 3 gün içinde kapında.
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <Counter />
            </div>

            <div className="flex items-center space-x-8">
              <p className=" font-semibold text-blue-800 cursor-pointer  ">
                500TL
              </p>
              <div className="flex items-center cursor-pointer ">
                <p className=" text-red-700 font-semibold">SİL</p>
                <MdDeleteOutline className="text-red-700" size={20} />
              </div>
            </div>
          </div>

          
        </div>
     

      <div className=" border border-gray-300 rounded-lg p-5 flex flex-col space-y-5 w-60 max-h-52">
        <h1 className="text-xl font-semibold text-slate-800">Sipariş Özeti</h1>
        <div className="flex flex-col space-y-2">
          <p>
            Sepet Tutarı: <b>1000TL</b>
          </p>
          <p>
            Kargo Ücreti: <b>150TL</b>
          </p>
        </div>
        <Button className="w-full">Sepeti Onayla</Button>
      </div>
    </div>
  );
};

export default CartPage;
