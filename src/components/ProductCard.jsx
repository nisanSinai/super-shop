// -------------------------
// 🔗 ProductCard.jsx – כרטיס תצוגה של מוצר
// מציג שם, תמונה, מחיר וכפתור לפרטים ולהוספה לסל
// -------------------------

import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const mainImage =
    product.images && product.images.length > 0
      ? product.images[0]
      : product.image || "";

  return (
    <Card className="product-card shadow-sm text-center">
      {/* תמונה ראשית */}
      <div className="product-image-container">
        <Card.Img
          variant="top"
          src={mainImage}
          alt={product.name}
          className="product-img"
        />
      </div>

      {/* גוף הכרטיס */}
      <Card.Body className="product-body">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="mb-3 text-success fw-bold">
          {product.price}
        </Card.Text>

        {/* כפתורים */}
        <div className="product-buttons d-flex justify-content-around">
          <Button as={Link} to={`/products/${product.id}`} variant="primary">
            לפרטים
          </Button>
          <Button variant="success" onClick={() => addToCart(product)}>
            הוסף לסל
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
