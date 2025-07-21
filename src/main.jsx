import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

// 🛒 עוטף את האפליקציה ב־CartProvider
import { CartProvider } from "./context/CartContext";

// 📍 מוסיף את BrowserRouter עבור ניתוב תקין
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
