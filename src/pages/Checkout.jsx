// -------------------------
// 💳 Checkout.jsx – עמוד תשלום (מוקפא, ללא תשלום אמיתי)
// מסכם את הקנייה ומציג הודעת הצלחה
// -------------------------

import React, { useContext, useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

function CheckoutPage() {
  const { cart, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // המרה למספר מתוך מחיר כמו "₪300"
  const total = cart.reduce((sum, item) => {
    const numericPrice = parseFloat(
      item.price.replace("₪", "").replace(",", "")
    );
    return sum + (isNaN(numericPrice) ? 0 : numericPrice);
  }, 0);

  const handleCheckout = () => {
    clearCart(); // מרוקן את הסל
    setOrderPlaced(true); // מציג הודעת הצלחה
  };

  return (
    <Container className="mt-5 text-center">
      <h2 className="mb-4">עמוד תשלום</h2>

      {orderPlaced ? (
        <Alert variant="success">
          ✅ ההזמנה בוצעה בהצלחה! תודה שקנית אצלנו.
        </Alert>
      ) : (
        <>
          <p>סה"כ לתשלום: ₪{total.toFixed(2)}</p>
          <Button variant="success" onClick={handleCheckout}>
            אישור תשלום (מדומה)
          </Button>
        </>
      )}
    </Container>
  );
}

export default CheckoutPage;
