// -------------------------
// 🛒 Cart.jsx – עגלת קניות עם כמות (מיושר למרכז)
// -------------------------

import React, { useContext } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const total = cart.reduce((sum, item) => {
    const numericPrice = parseFloat(
      item.price.replace("₪", "").replace(",", "")
    );
    return sum + (isNaN(numericPrice) ? 0 : numericPrice * item.quantity);
  }, 0);

  if (cart.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <h4>הסל שלך ריק 😕</h4>
        <Link to="/products" className="btn btn-primary mt-3">
          עבור לרכישת מוצרים
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-4">עגלת הקניות</h2>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>מוצר</th>
            <th>מחיר ליח'</th>
            <th>כמות</th>
            <th>סה"כ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            const price = parseFloat(
              item.price.replace("₪", "").replace(",", "")
            );
            const itemTotal = isNaN(price) ? 0 : price * item.quantity;
            return (
              <tr key={item.id}>
                <td>{item.name || item.title}</td>
                <td>{item.price}</td>
                <td>
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <Button size="sm" onClick={() => decreaseQuantity(item.id)}>
                      –
                    </Button>
                    <span>{item.quantity}</span>
                    <Button size="sm" onClick={() => increaseQuantity(item.id)}>
                      +
                    </Button>
                  </div>
                </td>
                <td>₪{itemTotal.toFixed(2)}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    הסר
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <h4>סה"כ לתשלום: ₪{total.toFixed(2)}</h4>

      <div className="d-flex gap-2 mt-3">
        <Button variant="secondary" onClick={clearCart}>
          נקה סל
        </Button>
        <Link to="/checkout" className="btn btn-success">
          לתשלום
        </Link>
      </div>
    </Container>
  );
}

export default Cart;
