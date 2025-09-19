import React from "react";
import { Link } from "react-router-dom";
import ROOMS from "../data/rooms";

export default function Home() {
  const featured = ROOMS.slice(0, 3); // show first 3 rooms as featured

  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Araku Stays
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Cozy wooden houses, tents & cottages. Quick search and easy booking.
          </p>
          <Link to="/rooms">
            <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold shadow-lg">
              Browse Rooms
            </button>
          </Link>
        </div>
      </section>

      {/* Welcome Card */}
      <section className="card p-6 my-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-2">Find Your Perfect Stay</h2>
        <p className="text-gray-700">
          Explore the best cottages and tents in Araku Valley. Easy booking and
          memorable experiences await!
        </p>
      </section>

      {/* Featured Stays */}
      <section className="my-6 px-4">
        <h2 className="text-xl font-bold mb-4">Featured Stays</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {featured.map((r) => (
            <div key={r.id} className="card p-4 shadow rounded">
              <img
                className="w-full h-48 object-cover rounded-md mb-2"
                src={r.images[0]}
                alt={r.title}
              />
              <h3 className="font-semibold mb-1">{r.title}</h3>
              <div className="flex justify-between items-center text-sm mb-2">
                <div>{r.type} · ₹{r.price}/night</div>
                <div className="bg-emerald-500 text-white px-2 py-1 rounded text-xs">
                  {r.rating} ★
                </div>
              </div>
              <Link
                to={`/rooms/${r.id}`}
                className="inline-block mt-2 text-emerald-600 font-semibold hover:underline"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
