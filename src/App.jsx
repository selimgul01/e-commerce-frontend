import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MaleCategoryPage from "./pages/Male/MaleCategoryPage";
import FemaleCategoryPage from "./pages/Female/FemaleCategoryPage";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import CartPage from "./pages/Cart/CartPage";
import AuthPage from "./pages/Auth/AuthPage";
import { Toaster } from "react-hot-toast";
import AppLayout from "./AppLayout";
import OrderPage from "./pages/Order/OrderPage";
import { useEffect, useState } from "react";
import { getFavorites } from "./redux/favorite/favoriteSlice";
import { useDispatch } from "react-redux";
import { getCart } from "./redux/cart/cartSlice";

function App() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  
    useEffect(() => {

      if (token) {
        dispatch(getFavorites());
        dispatch(getCart());
      }
    }, [dispatch]);
  

  return (
    <>
      <BrowserRouter>
        <AppLayout search={search} setSearch={setSearch}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/erkek"
              element={<MaleCategoryPage search={search} />}
            />
            <Route path="/kadın" element={<FemaleCategoryPage />} />
            <Route path="/detay/:id" element={<ProductDetailPage />} />
            <Route path="/favoriler" element={<FavoritePage />} />
            <Route path="/sepet" element={<CartPage />} />
            <Route path="/giris-yap" element={<AuthPage />} />
            <Route path="/siparislerim" element={<OrderPage />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
