// -------------------------
// 📄 CategoryPage.jsx – עמוד שמציג מוצרים לפי קטגוריה
// -------------------------

import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { categories } from "../data/categories";
import ProductCard from "../components/ProductCard";

function CategoryPage() {
  const { category } = useParams();

  // מציאת שם הקטגוריה בעברית
  const categoryObj = categories.find((c) => c.category === category);
  const categoryName = categoryObj ? categoryObj.name : category;

  // סינון מוצרים לפי מזהה הקטגוריה
  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">מוצרים בקטגוריה: {categoryName}</h2>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p className="text-center">לא נמצאו מוצרים לקטגוריה זו.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
