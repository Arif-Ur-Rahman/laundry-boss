"use client";
import { useState } from "react";

const locations = [
  "Chittagong",
  "Dhaka",
  "Faridpur",
  "Gazipur",
  "Gopalganj",
  "Jessore",
  "Sylhet",
  "Bagerhat",
  "Jhenaidh",
  "Khulna",
];

export default function CoverageArea() {
  const [activeLocation, setActiveLocation] = useState("Chittagong");

  return (
    <section className="flex flex-col items-center justify-center py-10">
      <p className="text-gray-500 text-lg">We currently cover the following post codes</p>
      <h2 className="text-4xl font-bold text-[#3546AE] mt-2">Our Coverage Area</h2>

      <div className="flex flex-row mt-8 space-x-10">
        {/* Locations List */}
        <div className="grid grid-cols-2 gap-3">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => setActiveLocation(location)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeLocation === location
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {location}
            </button>
          ))}
        </div>

        {/* Image Placeholder for Map */}
        <div className="w-[450px] h-[300px] rounded-lg overflow-hidden shadow-lg">
          <img
            src="/area.png" 
            alt="Coverage Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
