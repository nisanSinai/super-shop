// -------------------------
// 🔗 RecommendedList.jsx – תצוגת מוצרים מומלצים
// מציג רשימת מוצרים נבחרים (לרוב מתוך products.js)
// -------------------------

import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

// מקבל רשימה של מוצרים כ־props ומציג אותם
function RecommendedList({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <div className="mt-4">
      <h4 className="mb-3 text-center">מוצרים מומלצים</h4>

      <Row className="justify-content-center">
        {products.map((product) => (
          <Col
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="mb-4 d-flex"
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RecommendedList;
