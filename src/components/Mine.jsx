import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import './Sidebar.css'

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage or initialize with default data
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Save cart to localStorage when items are updated
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Update item quantity
  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  // Remove an item from the cart
  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <h1>Your Mine Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <table
            style={{
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                  Item
                </th>
                <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                  Price
                </th>
                <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                  Quantity
                </th>
                <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                  Subtotal
                </th>
                <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td style={{ padding: "10px" }}>{item.name}</td>
                  <td style={{ padding: "10px" }}>${item.price.toFixed(2)}</td>
                  <td style={{ padding: "10px" }}>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value, 10))
                      }
                      style={{ width: "60px", textAlign: "center" }}
                    />
                  </td>
                  <td style={{ padding: "10px" }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td style={{ padding: "10px" }}>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        backgroundColor: "#ff4d4d",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        padding: "5px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 style={{ marginTop: "20px" }}>
            Total: ${getTotalPrice().toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
