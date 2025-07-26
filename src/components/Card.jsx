import React from 'react'

const Card = ({image}) => {
  return (
    <div className='flex flex-col items-start min-w-[200px]'>
      <img src={`${image.image}`} width={342} height={492} alt="" />
      <p className='p-2 text-slate-700 text-sm font-semibold'>{image.text}</p>
    </div>
  )
}

export default Card
