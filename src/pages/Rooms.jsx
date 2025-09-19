import React from "react";
import { useNavigate } from "react-router-dom";
import ROOMS from "../data/rooms"; // import your rooms data

export default function Rooms() {
  const navigate = useNavigate();

  function handleBook(room) {
    sessionStorage.setItem("selectedRoom", JSON.stringify(room));
    navigate("/checkout"); // go to checkout first
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 grid gap-6">
      {ROOMS.map((room) => (
        <div
          key={room.id}
          className="card p-4 flex justify-between items-center shadow rounded-lg"
        >
          <div>
            <h3 className="text-lg font-bold">{room.title}</h3>
            <p className="text-gray-600">₹{room.price} per night</p>
          </div>
          <button
            className="btn bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
            onClick={() => handleBook(room)}
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
}
