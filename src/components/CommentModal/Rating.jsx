import React, { useEffect, useState } from 'react';

const Rating = ({setRatingData}) => {
  const [rating, setRating] = useState(0); 
  const [hover, setHover] = useState(0);  
  

  useEffect(()=>{
    setRatingData(rating)
  },[rating,setRatingData])

  return (
    <div className="flex items-center"> 
      {[...Array(5)].map((star, index) => {
        index += 1; // Yıldızları 1'den 5'e kadar numaralandırıyoruz
        return (
          <button
            type="button"
            key={index}
            // Tailwind sınıfları dinamik olarak uygulanıyor
            // index <= (hover || rating) doğruysa text-yellow-500, yanlışsa text-gray-300
            className={`
              cursor-pointer 
              text-3xl 
              focus:outline-none 
              ${index <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'}
              transition-colors duration-200 ease-in-out
            `}
            onClick={() => setRating(index)} // Tıklandığında seçimi ayarla
            onMouseEnter={() => setHover(index)} // Üzerine gelindiğinde hover'ı ayarla
            onMouseLeave={() => setHover(rating)} // Farenin çıkınca seçili rating'e geri dön
          >
            &#9733; {/* Unicode yıldız karakteri */}
            {/* Font Awesome kullanıyorsanız: <i className="fa-solid fa-star"></i> */}
          </button>
        );
      })}
    </div>
  );
};

export default Rating;