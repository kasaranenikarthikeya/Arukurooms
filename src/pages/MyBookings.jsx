import React from "react";

export default function MyBookings() {
  const bookings = JSON.parse(localStorage.getItem("araku_bookings") || "[]");

  if (bookings.length === 0) {
    return (
      <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow text-center">
        No bookings yet.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">My Bookings</h2>
      <div className="grid gap-6">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-400"
          >
            {/* Header: ID + Date + Total */}
            <div className="flex justify-between items-center mb-2">
              <div>
                <div className="font-bold text-lg text-blue-600">
                  Booking #{b.id}
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(b.date).toLocaleString()}
                </div>
              </div>
              <div className="font-bold text-green-600 text-xl">₹{b.total}</div>
            </div>

            {/* User Info */}
            <div className="text-gray-700 text-sm mb-2">
              <span className="font-medium">Name:</span> {b.name} &nbsp;|&nbsp;{" "}
              <span className="font-medium">Phone:</span> {b.phone}
            </div>

            {/* Items */}
            <div className="mt-2">
              {b.items.map((i) => (
                <div key={i.id} className="text-gray-900 text-sm mb-1">
                  • <span className="font-medium">{i.title}</span> &nbsp;|&nbsp;{" "}
                  {i.nights} night(s) &nbsp;|&nbsp; ₹{i.price * i.nights}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
