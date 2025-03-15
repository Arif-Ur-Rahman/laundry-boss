"use client";

import {
  Shirt,
  Sofa,
  WashingMachine,
  Clothes,
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
    <section className="relative top-[150px] left-[120px]">
      <div
        className="flex flex-col justify-center items-center"
        style={{
          width: "1200px",
          height: "660px",
          gap: "60px",
        }}
      >
        {/* Sub Heading */}
        <p className="text-gray-500 text-lg">
          Simple Laundry and Dry Cleaning Services
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-[#3546AE]">Our services</h2>

        {/* Services Grid */}
        <div
          className="grid grid-cols-4 gap-[20px]"
          style={{
            width: "1200px",
            height: "500px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-between rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${service.bgColor}`}
            >
              <div className="flex justify-center items-center w-full h-[70%] p-4">
                {service.icon}
              </div>
              <div className="w-full bg-white py-4 h-[30%] flex justify-center items-center">
                <h3 className="text-lg font-medium text-gray-800">
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
