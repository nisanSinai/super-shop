// -------------------------
// 🔍 ProductDetails.jsx – הצגת פרטי מוצר עם קרוסלת תמונות
// -------------------------

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center mt-5">המוצר לא נמצא 😕</p>;
  }

  const images =
    product.images?.length > 0
      ? product.images
      : ["https://via.placeholder.com/500x500?text=No+Image"];

  return (
    <Container className="mt-5 product-details">
      <Row className="align-items-center">
        <Col md={6}>
          <Carousel className="product-carousel">
            {images.map((imgUrl, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={imgUrl}
                  alt={`תמונה ${index + 1}`}
                  style={{ maxHeight: "450px", objectFit: "contain" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        <Col md={6}>
          <h2 className="mb-3">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <h4 className="text-success mb-4">{product.price}</h4>

          <Button variant="success" onClick={() => addToCart(product)}>
            הוסף לסל 🛒
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
