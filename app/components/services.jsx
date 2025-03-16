"use client";

import {
  Shirt,
  Sofa,
  WashingMachine,
  BedDouble,
} from "lucide-react";

const services = [
  {
    title: "Dry Cleaning",
    icon: <Shirt size={64} className="text-blue-600" />,
    bgColor: "bg-yellow-100",
  },
  {
    title: "Household Item",
    icon: <Sofa size={64} className="text-pink-600" />,
    bgColor: "bg-pink-100",
  },
  {
    title: "Laundry Service",
    icon: <WashingMachine size={64} className="text-green-600" />,
    bgColor: "bg-green-100",
  },
  {
    title: "Wedding Dress",
    icon: <Shirt size={64} className="text-gray-600" />,
    bgColor: "bg-gray-200",
  },
  {
    title: "Dry Cleaning",
    icon: <Shirt size={64} className="text-blue-400" />,
    bgColor: "bg-blue-100",
  },
  {
    title: "Household Item",
    icon: <Sofa size={64} className="text-red-600" />,
    bgColor: "bg-red-100",
  },
  {
    title: "Laundry Service",
    icon: <WashingMachine size={64} className="text-purple-600" />,
    bgColor: "bg-purple-100",
  },
  {
    title: "Duvet & Bed Cleaning",
    icon: <BedDouble size={64} className="text-green-500" />,
    bgColor: "bg-green-50",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative px-4 py-12 md:py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center space-y-6 md:space-y-12">
        {/* Sub Heading */}
        <p className="text-gray-500 text-base md:text-lg text-center">
          Simple Laundry and Dry Cleaning Services
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3546AE] text-center">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4 md:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-between rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${service.bgColor}`}
            >
              <div className="flex justify-center items-center w-full py-10 md:py-14">
                {service.icon}
              </div>
              <div className="w-full bg-white py-4 flex justify-center items-center">
                <h3 className="text-md md:text-lg font-medium text-gray-800 text-center">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
