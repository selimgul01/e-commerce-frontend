import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

const AppLayout = ({children}) => {

 const location = useLocation()

  const noNavbarPath = ["/giris-yap"]

  const showNavbar = !noNavbarPath.includes(location.pathname)

  return (
    <main>
        {showNavbar && <Navbar/>} 
      {children}
    </main>
  )
}

export default AppLayout
