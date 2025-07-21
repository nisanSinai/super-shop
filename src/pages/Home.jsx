// -------------------------
// 🏠 Home.jsx – עמוד הבית של האתר
// מציג קטגוריות ומוצרים מומלצים
// -------------------------

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">קטגוריות</h2>

      {/* הצגת קטגוריות */}
      <Row className="mb-5 justify-content-center category-row">
        {categories.map((cat) => (
          <Col key={cat.id} sm={6} md={4} lg={3} className="mb-3">
            <Link
              to={`/categories/${cat.category}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card className="h-100 text-center category-card">
                <div className="category-image-container">
                  <Card.Img
                    variant="top"
                    src={cat.image}
                    alt={cat.name}
                    className="category-image"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{cat.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>

      {/* הצגת מוצרים מומלצים */}
      <h2 className="mb-4 text-center">מוצרים מומלצים</h2>
      <Row>
        {products.slice(0, 4).map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
