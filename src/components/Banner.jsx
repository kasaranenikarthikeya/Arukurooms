import React from "react";

export default function Banner() {
  return (
    <section
      className="relative h-[60vh] flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
    
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Aruku Rooms
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Eco-friendly cottages & tents in the heart of Araku Valley
        </p>
        <a
          href="/rooms"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg"
        >
          Book Your Stay
        </a>
      </div>
    </section>
  );
}

