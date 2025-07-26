import React from "react";

const images = [
  {
    text: "Tüm Ürünler",
    id: 1,
  },
  {
    image:
      "/maleCategoryImage/Jack-Jones-Yuvarlak-Yaka-Siyah-Erkek-T-Shirt_1725279414.webp",
    text: "T-Shirt",
    id: 5,
  },
  {
    image: "/maleCategoryImage/instory_erkek_1744722602.webp",
    text: "Polo T-Shirt",
    id: 4,
  },
  {
    image:
      "/maleCategoryImage/U.S.-Polo-Assn.-Regular-Fit-Yaka-Mavi-Erkek-gomlek_1725279424.webp",
    text: "Erkek Gömlek",
    id: 10,
  },
  {
    image:
      "/maleCategoryImage/Mavi-Erkek-Normal-Bel-Regular-Fit-Denim-Pantolon_1725279418.webp",
    text: "Denim Pantolon",
    id: 7,
  },
  {
    image:
      "/maleCategoryImage/Beymen-Business-Normal-Bel-Slim-Fit-Lacivert-Erkek-Takim-Elbise_1725279407.webp",
    text: "Erkek Takım Elbise",
    id: 2,
  },
  {
    image:
      "/maleCategoryImage/F-By-Fabrika-Siyah-Erkek-Deri-Sneaker-RUBENS_1725279409.webp",
    text: "Sneaker",
    id: 3,
  },

  {
    image:
      "/maleCategoryImage/John-Richmond-Normal-Siyah-Erkek-Ceket__1725279416.webp",
    text: "Ceket",
    id: 6,
  },
  {
    image:
      "/maleCategoryImage/Tommy-Jeans-Normal-Siyah-Erkek-Esofman-Alti_1725279422.webp",
    text: "Eşofman",
    id: 9,
  },
];

const MaleCategory = ({ setCategorySearch }) => {
  const categorySearchHandler = (image) => {
    setCategorySearch(image.text);
  };

  return (
    <div className="pb-10 border-b xl:overflow-hidden overflow-x-scroll ">
      <h1 className="text-4xl font-semibold text-slate-900 ">Erkek</h1>
      <div className="flex items-center justify-between mt-3 space-x-8 min-w-[1270px] ">
        {images.map((image) => (
          <div
            onClick={() => categorySearchHandler(image)}
            key={image.id}
            className="flex flex-col items-center space-y-2 cursor-pointer"
          >
            <div className="bg-gray-200 rounded-full  2xl:w-[130px] 2xl:h-[130px] xl:w-[100px] xl:h-[100px]  ">
              {image?.image ? (
                <img src={image?.image} alt="" />
              ) : (
                <div className=" flex items-center justify-center text-xl text-center text-slate-800 2xl:w-[130px] 2xl:h-[130px] w-[110px] h-[110px] ">
                  Tüm Ürünler
                </div>
              )}
            </div>
            {image.image && (
              <p className="flex items-center justify-center w-full h-full text-center">
                {image?.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaleCategory;
