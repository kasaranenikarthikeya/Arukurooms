import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, add, total, clear } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const nav = useNavigate();

  useEffect(() => {
    const room = JSON.parse(sessionStorage.getItem("selectedRoom") || "null");
    if (room) {
      add({ ...room, nights: 1 });
      sessionStorage.removeItem("selectedRoom");
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !phone || !address) {
      alert("Please fill all fields!");
      return;
    }

    const booking = {
      id: "BK" + Math.random().toString(36).slice(2, 8).toUpperCase(),
      name,
      phone,
      address,
      items: cart,
      total,
      date: new Date().toISOString(),
      paymentMethod,
    };

    if (paymentMethod === "online") {
      sessionStorage.setItem("pendingBooking", JSON.stringify(booking));
      clear();
      nav("/payment"); // go to payment page
    } else {
      sessionStorage.setItem("pendingBooking", JSON.stringify(booking));
      clear();
      nav("/payment"); // go to payment page (for both cash and online)
    }
  }

  if (cart.length === 0)
    return <div className="card p-6 max-w-md mx-auto mt-6">No items in cart.</div>;

  return (
    <div className="card p-6 max-w-md mx-auto mt-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          required
          placeholder="Full Name"
          className="input border px-3 py-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          placeholder="Phone"
          className="input border px-3 py-2 rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          required
          placeholder="Address"
          className="input border px-3 py-2 rounded"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <div className="small font-semibold">Total: ₹{total}</div>

        <div className="flex gap-4 items-center">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
            />
            Cash on Arrival
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="online"
              checked={paymentMethod === "online"}
              onChange={() => setPaymentMethod("online")}
            />
            Pay Online
          </label>
        </div>

        <button
          type="submit"
          className="btn bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded font-semibold"
        >
          {paymentMethod === "cash"
            ? "Confirm Booking (Cash on Arrival)"
            : "Proceed to Payment"}
        </button>
      </form>
    </div>
  );
}
