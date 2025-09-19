import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const pending = JSON.parse(sessionStorage.getItem("pendingBooking") || "null");
    if (!pending) navigate("/checkout");
    else setBooking(pending);
  }, []);

  const handlePayment = (e) => {
    e.preventDefault();
    if (!booking) return;

    setMessage("Payment Successful! Saving your booking...");

    const bookings = JSON.parse(localStorage.getItem("araku_bookings") || "[]");
    bookings.push(booking);
    localStorage.setItem("araku_bookings", JSON.stringify(bookings));
    sessionStorage.removeItem("pendingBooking");

    setTimeout(() => navigate("/bookings"), 2000);
  };

  if (!booking) return null;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Payment</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handlePayment} className="space-y-4">
        <p>Total Amount: <strong>₹{booking.total}</strong></p>
        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded font-semibold"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}
