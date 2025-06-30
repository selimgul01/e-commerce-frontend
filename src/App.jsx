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


 
function App() {

  return (
    <>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/erkek" element={<MaleCategoryPage />} />
            <Route path="/kadın" element={<FemaleCategoryPage />} />
            <Route path="/detay/:id" element={<ProductDetailPage />} />
            <Route path="/favoriler" element={<FavoritePage />} />
            <Route path="/sepet" element={<CartPage />} />
            <Route path="/giris-yap" element={<AuthPage />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
