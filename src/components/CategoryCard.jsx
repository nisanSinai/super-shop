// -------------------------
// 🧩 CategoryCard.jsx – כרטיס לקטגוריה (מכיל תמונה וכותרת)
// -------------------------

import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/CategoryCard.css";

function CategoryCard({ category }) {
  return (
    <Card
      as={Link}
      to={`/categories/${category.category}`}
      className="category-card text-center shadow-sm text-decoration-none"
    >
      <div className="category-image-container">
        <img
          src={category.image}
          alt={category.name}
          className="category-image"
        />
      </div>
      <Card.Body>
        <Card.Title className="category-title">{category.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;
