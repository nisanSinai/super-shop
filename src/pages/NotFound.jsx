// -------------------------
// ⚠️ NotFound.jsx – עמוד ברירת מחדל לשגיאות ניתוב
// מוצג כאשר הכתובת אינה תואמת לשום Route קיים
// -------------------------

import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <Container className="text-center mt-5">
      <h1>404</h1>
      <p>העמוד שביקשת לא נמצא.</p>
      <Link to="/" className="btn btn-primary mt-3">
        חזרה לדף הבית
      </Link>
    </Container>
  );
}

export default NotFoundPage;
