import React, { useState, useEffect } from "react";

const YellowBasket = () => {
  const [basketItems, setBasketItems] = useState([]);

  // Load basket items from localStorage on component mount
  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasketItems(storedBasket);
  }, []);

  // Save basket to localStorage when items are updated
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketItems));
  }, [basketItems]);

  // Update item quantity
  const updateQuantity = (itemId, newQuantity) => {
    const updatedBasket = basketItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setBasketItems(updatedBasket);
  };

  // Remove an item from the basket
  const removeItem = (itemId) => {
    const updatedBasket = basketItems.filter((item) => item.id !== itemId);
    setBasketItems(updatedBasket);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return basketItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div style={{ padding: "20px", textAlign: "center"}}>
      <h1>Your Yellow Bucket</h1>
      {basketItems.length === 0 ? (
        <p>Your bucket is empty!</p>
      ) : (
        <div>
          <table
            style={{
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
              borderCollapse: "collapse",
              border: "1px solid #ffcc00",
              backgroundColor: "#fff8dc",
            }}
          >
            <thead>
              <tr>
                <th style={{ borderBottom: "2px solid #ffcc00", padding: "10px" }}>
                  Item
                </th>
                <th style={{ borderBottom: "2px solid #ffcc00", padding: "10px" }}>
                  Price
                </th>
                <th style={{ borderBottom: "2px solid #ffcc00", padding: "10px" }}>
                  Quantity
                </th>
                <th style={{ borderBottom: "2px solid #ffcc00", padding: "10px" }}>
                  Subtotal
                </th>
                <th style={{ borderBottom: "2px solid #ffcc00", padding: "10px" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {basketItems.map((item) => (
                <tr key={item.id}>
                  <td style={{ padding: "10px", color: "#ff9900" }}>{item.name}</td>
                  <td style={{ padding: "10px", color: "#ff9900" }}>${item.price.toFixed(2)}</td>
                  <td style={{ padding: "10px" }}>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value, 10))
                      }
                      style={{
                        width: "60px",
                        textAlign: "center",
                        border: "1px solid #ffcc00",
                      }}
                    />
                  </td>
                  <td style={{ padding: "10px", color: "#ff9900" }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td style={{ padding: "10px" }}>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        backgroundColor: "#ffcc00",
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
          <h2 style={{ marginTop: "20px", color: "#ff9900" }}>
            Total: ${getTotalPrice().toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
};

export default YellowBasket;
