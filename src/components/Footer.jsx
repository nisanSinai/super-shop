// -------------------------
// 🔗 Footer.jsx – תחתית האתר
// מוצגת בכל עמוד וכוללת מידע בסיסי או זכויות יוצרים
// -------------------------

import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-5">
      <Container>
        <small>© 2025 My Shop. כל הזכויות שמורות.</small>
      </Container>
    </footer>
  );
}

export default Footer;
