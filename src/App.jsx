// -------------------------
// 🔗 App.jsx – קומפוננטת האב של האפליקציה
// -------------------------

import React from "react";
import { Routes, Route } from "react-router-dom";

// ייבוא רכיבים ועמודים
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalCarousel from "./components/GlobalCarousel"; // ✅ הוספת הקרוסלה
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage"; // ⬅️ הוסף את זה
import "./styles.css";
function App() {
  return (
    <>
      <Navbar /> {/* מוצג בכל העמודים */}
      <GlobalCarousel /> {/* ✅ קרוסלה גלובלית לכל הדפים */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> {/* מוצג בכל העמודים */}
    </>
  );
}

export default App;
