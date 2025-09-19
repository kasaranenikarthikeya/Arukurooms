import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  function handle(e) {
    e.preventDefault();
    login(name || "Guest");
    nav("/"); // redirect to home after login
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Sign In</h1>

        <form onSubmit={handle} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 rounded transition-colors"
          >
            Continue
          </button>
        </form>

        <div className="mt-6 border-t pt-4 text-center">
          <p className="text-gray-600">New to Aruku Rooms?</p>
          <button
            onClick={() => nav("/signup")}
            className="mt-2 text-blue-600 font-semibold hover:underline"
          >
            Create your account
          </button>
        </div>
      </div>
    </div>
  );
}
