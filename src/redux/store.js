import { configureStore } from '@reduxjs/toolkit'
import  authSlice  from './auth/authSlice'
import  productSlice  from './product/productSlice'
import  cartSlice  from './cart/cartSlice'
import  counterSlice  from './counter/counterSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    cart: cartSlice,
    counter: counterSlice
  },
})