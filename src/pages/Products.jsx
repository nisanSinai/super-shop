// -------------------------
// 🛍️ Products.jsx – עמוד הצגת כל המוצרים
// כולל אפשרות סינון לפי קטגוריה והצגה של כרטיסי מוצר
// -------------------------

import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { products } from "../data/products";
import { categories } from "../data/categories";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <Container className="mt-4">
      <h2 className="mb-3">כל המוצרים</h2>

      <Form.Group controlId="categorySelect" className="mb-4">
        <Form.Label>בחר קטגוריה:</Form.Label>
        <Form.Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">הכל</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.category}>
              {cat.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductsPage;
