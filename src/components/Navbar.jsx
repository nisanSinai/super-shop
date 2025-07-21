// -------------------------
// 🔗 Navbar.jsx – תפריט ניווט עליון
// כולל קישורים לעמודים הראשיים + מעבר לעגלת קניות
// -------------------------

import React, { useContext } from "react"; // ✅ נוספה ספריית useContext
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";

// בעתיד נוכל לחבר את זה ל־CartContext כדי להראות כמה פריטים יש בסל
// למשל: const { cart } = useContext(CartContext);
import { CartContext } from "../context/CartContext"; // ✅ נוספה קריאה לקונטקסט

function AppNavbar() {
  const { cart } = useContext(CartContext); // ✅ שימוש בקונטקסט כדי לקבל את העגלה

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🛒 My Shop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              בית
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              מוצרים
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              סל קניות <Badge bg="secondary">{cart.length}</Badge>{" "}
              {/* ✅ הצגת כמות בעגלה */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
