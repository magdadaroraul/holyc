import React, { useState, useEffect } from "react";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "creditCard",
  });

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    calculateTotal(storedCart);
  }, []);

  // Calculate total price
  const calculateTotal = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully! Thank you for shopping.");
    localStorage.removeItem("cart"); // Clear the cart
    setCartItems([]);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your bucket is empty. Add items before proceeding to checkout.</p>
      ) : (
        <div>
          <h2>Order Summary</h2>
          <table
            style={{
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
              borderCollapse: "collapse",
              border: "1px solid #ccc",
            }}
          >
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                  Item
                </th>
                <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                  Quantity
                </th>
                <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td style={{ padding: "10px" }}>{item.name}</td>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    {item.quantity}
                  </td>
                  <td style={{ padding: "10px" }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 style={{ marginTop: "20px" }}>
            Total Price: ${totalPrice.toFixed(2)}
          </h3>

          <h2 style={{ marginTop: "40px" }}>Shipping & Payment</h2>
          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: "500px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Shipping Address"
              required
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                height: "80px",
              }}
            ></textarea>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cashOnDelivery">Cash on Delivery</option>
            </select>
            <button
              type="submit"
              style={{
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Place Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
