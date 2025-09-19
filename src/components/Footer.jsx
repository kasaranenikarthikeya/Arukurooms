import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {/* About */}
        <div>
          <h3 className="font-bold text-lg mb-2">Araku Stays</h3>
          <p className="text-gray-300 text-sm">
            Explore the serene hills of Araku with cozy cottages, tents, and
            wooden houses. Book your stay easily and enjoy nature!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>
              <Link to="/" className="hover:text-emerald-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-emerald-500">
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/mybookings" className="hover:text-emerald-500">
                My Bookings
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-emerald-500">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact</h3>
          <p className="text-gray-300 text-sm">Email: info@arukustays.com</p>
          <p className="text-gray-300 text-sm">Phone: +91 98765 43210</p>
          <p className="text-gray-300 text-sm">Araku Valley, Andhra Pradesh</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Araku Stays. All rights reserved.
      </div>
    </footer>
  );
}
