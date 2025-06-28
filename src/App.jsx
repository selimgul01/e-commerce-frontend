import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import MaleCategoryPage from "./pages/Male/MaleCategoryPage";
import FemaleCategoryPage from "./pages/Female/FemaleCategoryPage";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import CartPage from "./pages/Cart/CartPage";
import AuthPage from "./pages/Auth/AuthPage";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/erkek" element={<MaleCategoryPage />} />
          <Route path="/kadın" element={<FemaleCategoryPage />} />
          <Route path="/detail/:id" element={<ProductDetailPage />} />
          <Route path="/favoriler" element={<FavoritePage />} />
          <Route path="/sepet" element={<CartPage />} />
          <Route path="/giris-yap" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
