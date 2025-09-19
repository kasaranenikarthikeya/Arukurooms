
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">Aruku Rooms</h1>

      {/* Links */}
      <div className="flex space-x-6">
        <Link
          to="/"
          className="hover:text-green-400 transition-colors duration-200 font-medium"
        >
          Home
        </Link>
        <Link
          to="/rooms"
          className="hover:text-green-400 transition-colors duration-200 font-medium"
        >
          Rooms
        </Link>
        <Link
          to="/mybookings"
          className="hover:text-green-400 transition-colors duration-200 font-medium"
        >
          My Bookings
        </Link>
        <Link
          to="/login"
          className="hover:text-green-400 transition-colors duration-200 font-medium"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
