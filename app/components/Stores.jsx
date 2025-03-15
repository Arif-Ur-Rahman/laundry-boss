"use client";
import { MapPin } from "lucide-react";

const stores = [
  {
    id: 1,
    image: "/store1.jpg",
    description:
      "Situated in the Gulshan-2 area of Dhaka, in close proximity to the scenic Gulshan Lake Park",
  },
  {
    id: 2,
    image: "/store2.jpg",
    description:
      "Located in the Dhanmondi area of Dhaka, adjacent to the picturesque Dhanmondi Lake.",
  },
  {
    id: 3,
    image: "/store3.jpg",
    description:
      "Positioned in the Banani area of Dhaka, in close proximity to the serene Banani Lake.",
  },
  {
    id: 4,
    image: "/store4.jpg",
    description:
      "Situated in the Uttara area of Dhaka, adjacent to the tranquil Uttara Lake.",
  },
];

export default function Stores() {
  return (
    <section className="py-12 flex flex-col items-center">
      {/* Section Heading */}
      <p className="text-gray-500 text-lg">CLEANING AND LAUNDRY</p>
      <h2 className="text-4xl font-bold text-[#3546AE] mt-2">Find Our Stores</h2>

      {/* Store Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {stores.map((store) => (
          <div
            key={store.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={store.image}
              alt="Store Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-700">{store.description}</p>
              <div className="mt-4 flex items-center text-blue-600 font-medium space-x-1">
                <MapPin size={18} />
                <a href="#" className="hover:underline">
                  View Location
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
