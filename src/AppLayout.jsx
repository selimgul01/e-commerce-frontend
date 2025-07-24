import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { useSelector } from 'react-redux';

const AppLayout = ({children}) => {

  const { items } = useSelector((state) => state.cart);
  const { favorites } = useSelector((state) => state.favorite);
  const { isLoading } = useSelector((state) => state.auth);


 const location = useLocation()

  const noNavbarPath = ["/giris-yap"]

  const showNavbar = !noNavbarPath.includes(location.pathname)

  return (
    <main>
        {showNavbar && <Navbar items = {items}  favorites = {favorites} isLoading = {isLoading}  />} 
      {children}
    </main>
  )
}

export default AppLayout
