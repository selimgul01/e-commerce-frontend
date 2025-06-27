import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import MaleCategoryPage from "./pages/Male/MaleCategoryPage";
import FemaleCategoryPage from "./pages/Female/FemaleCategoryPage";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage";



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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
