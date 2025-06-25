import React from 'react'

const NavbarBottom = () => {

    const categories = [
        "Kadın",
        "Erkek",
        "Çocuk",
        "Spor & Outdoor",
        "Ayakkabı & Çanta",
        "Kozmetik",
        "Ev & Yaşam & Elektronik",
        "Saat & Aksesuar",
        "Outlet",
        "Hediye",
        "Kampanyalar",
        "Markalar"
    ]

  return (
    <div className='container m-auto flex items-center justify-center space-x-5'>
      {
        categories?.map((category,i)=>(
            <span key={i} className={`${category === "Kampanyalar" ? "text-red-500" : "text-slate-600"} cursor-pointer pb-1 hover:scale-105 transition-all `}>
                {category }
            </span>
        ))
      }
    </div>
  )
}

export default NavbarBottom
