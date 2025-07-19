import React from 'react'


const images = [
  {
    image: "/maleCategoryImage/1_instory-erkek-sayfasina_1727788660.webp",
    text: "Pantolon",
    id: 1,
  },
  {
    image:
      "/maleCategoryImage/Beymen-Business-Normal-Bel-Slim-Fit-Lacivert-Erkek-Takim-Elbise_1725279407.webp",
    text: "Takım Elbise",
    id: 2,
  },
  {
    image:
      "/maleCategoryImage/F-By-Fabrika-Siyah-Erkek-Deri-Sneaker-RUBENS_1725279409.webp",
    text: "Sneaker",
    id: 3,
  },
  {
    image: "/maleCategoryImage/instory_erkek_1744722602.webp",
    text: "Polo T-Shirt",
    id: 4,
  },
  {
    image:
      "/maleCategoryImage/Jack-Jones-Yuvarlak-Yaka-Siyah-Erkek-T-Shirt_1725279414.webp",
    text: "T-Shirt",
    id: 5,
  },
  {
    image:
      "/maleCategoryImage/John-Richmond-Normal-Siyah-Erkek-Ceket__1725279416.webp",
    text: "Ceket",
    id: 6,
  },
  {
    image:
      "/maleCategoryImage/Mavi-Erkek-Normal-Bel-Regular-Fit-Denim-Pantolon_1725279418.webp",
    text: "Denim",
    id: 7,
  },
  {
    image: "/maleCategoryImage/Siyah-Deri-Evrak-Cantasi_1725279420.webp",
    text: "Çanta",
    id: 8,
  },
  {
    image:
      "/maleCategoryImage/Tommy-Jeans-Normal-Siyah-Erkek-Esofman-Alti_1725279422.webp",
    text: "Eşofman",
    id: 9,
  },
  {
    image:
      "/maleCategoryImage/U.S.-Polo-Assn.-Regular-Fit-Yaka-Mavi-Erkek-gomlek_1725279424.webp",
    text: "Gömlek",
    id: 10,
  },
];

const MaleCategory = () => {
  return (
    <div className="pb-20 border-b">
        <h1 className="text-4xl font-semibold text-slate-900">Erkek</h1>
        <div className="grid xl:grid-cols-10 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 grid-cols-2 mt-3 space-x-8  ">
          {images.map((image) => (
          <div key={image.id} className="flex flex-col items-center space-y-2 cursor-pointer">
            <div className="bg-gray-200 w-[130px] h-[130px] rounded-full  ">
              <img src={image.image} alt="" />
            </div>
            <p>{image.text}</p>
          </div>
        ))}
        </div> 
        
      </div>
  )
}

export default MaleCategory
